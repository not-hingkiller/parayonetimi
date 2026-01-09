// ============================================
// ARTICLE DATABASE & CONTENT MANAGEMENT
// ============================================

// Sample Articles Database
const articlesDB = [
    {
        id: 1,
        title: "Borsa Nedir?: Geleceğe Yatırımın Anahtarı",
        slug: "borsa-nedir-gelecege-yatirimin-anahtari",
        excerpt: "Borsayı en basit haliyle, büyük bir pazar yeri olarak düşünebilirsiniz. Ancak bu pazarda domates veya biber değil; şirketlerin ortaklık payları alınır satılır...",
        content: `
      <p>Borsayı en basit haliyle, büyük bir pazar yeri olarak düşünebilirsiniz. Ancak bu pazarda domates veya biber değil; şirketlerin ortaklık payları (hisse senetleri), dövizler veya değerli madenler el değiştirir.</p>
      
      <p>Bir şirketin büyümesine, kâr etmesine ve geleceğine inandığınızda, borsadan o şirketin hissesini alarak ona küçük bir oranda ortak olursunuz. Şirket değer kazandıkça sizin paranız da değerlenir; şirket kârından pay dağıttığında (temettü) siz de hesabınızda nakit ödeme görebilirsiniz.</p>
      
      <h2>Neden Önemli?</h2>
      <p>Borsa, sadece "al-sat" yaparak kısa yoldan zengin olma yeri değildir. Aksine;</p>
      
      <ul>
        <li>Enflasyona karşı paranızı korumanın,</li>
        <li>Büyük şirketlerin büyüme hikayesine ortak olmanın,</li>
        <li>Finansal özgürlüğe giden yolda birikimlerinizi katlamanın</li>
      </ul>
      
      <p>en etkili yollarından biridir. Unutmayın, borsa bir oyun değil; sabır, analiz ve doğru strateji gerektiren ciddi bir yatırım aracıdır.</p>
      
      <p>Siz de para yönetiminin bir parçası olarak borsayı öğrenmeye başladığınızda, aslında kendi geleceğinizi inşa etmeye başlamış olursunuz.</p>
    `,
        category: "Finans",
        author: "Para Yönetimi",
        date: "2026-01-09",
        readTime: "3 dk",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
        featured: true,
        views: 0,
        tags: ["borsa", "yatırım", "finans", "hisse senedi"]
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get all articles
function getAllArticles() {
    return articlesDB;
}

// Get article by ID
function getArticleById(id) {
    return articlesDB.find(article => article.id === id);
}

// Get article by slug
function getArticleBySlug(slug) {
    return articlesDB.find(article => article.slug === slug);
}

// Get featured articles
function getFeaturedArticles() {
    return articlesDB.filter(article => article.featured);
}

// Get articles by category
function getArticlesByCategory(category) {
    if (category === 'Tümü' || !category) {
        return articlesDB;
    }
    return articlesDB.filter(article => article.category === category);
}

// Get all unique categories
function getAllCategories() {
    const categories = ['Tümü'];
    const uniqueCategories = [...new Set(articlesDB.map(article => article.category))];
    return categories.concat(uniqueCategories.sort());
}

// Search articles
function searchArticles(query) {
    const lowerQuery = query.toLowerCase();
    return articlesDB.filter(article =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.content.toLowerCase().includes(lowerQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}

// Get related articles (by category, excluding current article)
function getRelatedArticles(articleId, limit = 3) {
    const currentArticle = getArticleById(articleId);
    if (!currentArticle) return [];

    return articlesDB
        .filter(article =>
            article.id !== articleId &&
            article.category === currentArticle.category
        )
        .slice(0, limit);
}

// Get recent articles
function getRecentArticles(limit = 5) {
    return [...articlesDB]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

// Get popular articles (by views)
function getPopularArticles(limit = 5) {
    return [...articlesDB]
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
}

// Format date to Turkish
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
}

// Get category article count
function getCategoryCount(category) {
    return articlesDB.filter(article => article.category === category).length;
}

// ============================================
// EXPORT FOR USE IN OTHER FILES
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        articlesDB,
        getAllArticles,
        getArticleById,
        getArticleBySlug,
        getFeaturedArticles,
        getArticlesByCategory,
        getAllCategories,
        searchArticles,
        getRelatedArticles,
        getRecentArticles,
        getPopularArticles,
        formatDate,
        getCategoryCount
    };
}
