// ============================================
// MAIN JAVASCRIPT - BLOG FUNCTIONALITY
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                nav.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

// ============================================
// RENDER ARTICLE CARDS
// ============================================
function renderArticleCard(article) {
    return `
    <article class="article-card" onclick="window.location.href='article.html?slug=${article.slug}'">
      <div class="article-card-image">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
      </div>
      <div class="article-card-content">
        <div class="article-meta">
          <span class="article-category">${article.category}</span>
          <span class="article-date">
            <i class="fas fa-calendar"></i> ${formatDate(article.date)}
          </span>
        </div>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-excerpt">${article.excerpt}</p>
        <div class="article-card-footer">
          <div class="article-author">
            <i class="fas fa-user"></i>
            <span>${article.author}</span>
          </div>
          <a href="article.html?slug=${article.slug}" class="read-more">
            Devamını Oku <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ============================================
// RENDER ARTICLES GRID
// ============================================
function renderArticles(articles, containerId = 'articles-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (articles.length === 0) {
        container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--color-text-tertiary); margin-bottom: 1rem;"></i>
        <p style="color: var(--color-text-secondary); font-size: 1.125rem;">Aradığınız kriterlere uygun makale bulunamadı.</p>
      </div>
    `;
        return;
    }

    container.innerHTML = articles.map(article => renderArticleCard(article)).join('');
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.trim();
            if (query.length === 0) {
                renderArticles(getAllArticles());
            } else {
                const results = searchArticles(query);
                renderArticles(results);
            }
        }, 300);
    });
}

// ============================================
// CATEGORY FILTERING
// ============================================
function initCategoryFilters() {
    const filtersContainer = document.getElementById('category-filters');
    if (!filtersContainer) return;

    const categories = getAllCategories();

    filtersContainer.innerHTML = categories.map(category => `
    <button class="category-filter ${category === 'Tümü' ? 'active' : ''}" data-category="${category}">
      ${category}
    </button>
  `).join('');

    // Add click handlers
    filtersContainer.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filtersContainer.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Filter articles
            const category = button.dataset.category;
            const articles = getArticlesByCategory(category);
            renderArticles(articles);
        });
    });
}

// ============================================
// RENDER SIDEBAR WIDGETS
// ============================================
function renderPopularArticles() {
    const container = document.getElementById('popular-articles');
    if (!container) return;

    const articles = getPopularArticles(5);
    container.innerHTML = articles.map(article => `
    <li class="widget-list-item">
      <a href="article.html?slug=${article.slug}">
        <span>${article.title}</span>
        <span class="widget-list-count">${article.views}</span>
      </a>
    </li>
  `).join('');
}

function renderRecentArticles() {
    const container = document.getElementById('recent-articles');
    if (!container) return;

    const articles = getRecentArticles(5);
    container.innerHTML = articles.map(article => `
    <li class="widget-list-item">
      <a href="article.html?slug=${article.slug}">
        <span>${article.title}</span>
      </a>
    </li>
  `).join('');
}

function renderCategories() {
    const container = document.getElementById('categories-list');
    if (!container) return;

    const categories = getAllCategories().filter(cat => cat !== 'Tümü');
    container.innerHTML = categories.map(category => `
    <li class="widget-list-item">
      <a href="category.html?category=${encodeURIComponent(category)}">
        <span>${category}</span>
        <span class="widget-list-count">${getCategoryCount(category)}</span>
      </a>
    </li>
  `).join('');
}

// ============================================
// LOAD ARTICLE DETAIL PAGE
// ============================================
function loadArticleDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        window.location.href = 'index.html';
        return;
    }

    const article = getArticleBySlug(slug);

    if (!article) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${article.title} - Blog`;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', article.excerpt);
    }

    // Render article header
    const headerContainer = document.getElementById('article-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
      <div class="article-category">${article.category}</div>
      <h1>${article.title}</h1>
      <div class="article-header-meta">
        <span><i class="fas fa-user"></i> ${article.author}</span>
        <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
        <span><i class="fas fa-clock"></i> ${article.readTime} okuma</span>
        <span><i class="fas fa-eye"></i> ${article.views} görüntülenme</span>
      </div>
    `;
    }

    // Render featured image
    const imageContainer = document.getElementById('article-featured-image');
    if (imageContainer) {
        imageContainer.innerHTML = `<img src="${article.image}" alt="${article.title}">`;
    }

    // Render article content
    const contentContainer = document.getElementById('article-content');
    if (contentContainer) {
        contentContainer.innerHTML = article.content;
    }

    // Render related articles
    const relatedContainer = document.getElementById('related-articles');
    if (relatedContainer) {
        const relatedArticles = getRelatedArticles(article.id, 3);
        if (relatedArticles.length > 0) {
            relatedContainer.innerHTML = relatedArticles.map(related => renderArticleCard(related)).join('');
        } else {
            relatedContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-tertiary);">İlgili makale bulunamadı.</p>';
        }
    }

    // Render tags
    const tagsContainer = document.getElementById('article-tags');
    if (tagsContainer && article.tags) {
        tagsContainer.innerHTML = article.tags.map(tag => `
      <span class="article-category" style="margin-right: 0.5rem;">${tag}</span>
    `).join('');
    }
}

// ============================================
// LOAD CATEGORY PAGE
// ============================================
function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (!category) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${category} - Blog`;

    // Update category title
    const titleElement = document.getElementById('category-title');
    if (titleElement) {
        titleElement.textContent = category;
    }

    // Get and render articles
    const articles = getArticlesByCategory(category);
    renderArticles(articles, 'category-articles');
}

// ============================================
// SOCIAL SHARING
// ============================================
function initSocialSharing() {
    const shareButtons = document.querySelectorAll('[data-share]');

    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = button.dataset.share;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%20${url}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Here you would typically send this to your backend
        alert(`Teşekkürler! ${email} adresi bültenimize kaydedildi.`);
        form.reset();
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// LAZY LOAD IMAGES
// ============================================
function initLazyLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Common initializations for all pages
    initMobileMenu();
    initSmoothScroll();
    initLazyLoad();
    initSocialSharing();
    initNewsletter();

    // Page-specific initializations
    const path = window.location.pathname;

    if (path.includes('index.html') || path.endsWith('/')) {
        // Homepage
        renderArticles(getAllArticles());
        initSearch();
        initCategoryFilters();
        renderPopularArticles();
        renderRecentArticles();
        renderCategories();
    } else if (path.includes('article.html')) {
        // Article detail page
        loadArticleDetail();
        renderPopularArticles();
        renderRecentArticles();
        renderCategories();
    } else if (path.includes('category.html')) {
        // Category page
        loadCategoryPage();
        renderPopularArticles();
        renderRecentArticles();
        renderCategories();
    }

    // Add current year to footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ============================================
// UTILITY: Update active nav link
// ============================================
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on load
updateActiveNavLink();
