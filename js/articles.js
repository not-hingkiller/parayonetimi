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
    },
    {
        id: 2,
        title: "50/30/20 Kuralı: Finansal Özgürlüğe Giden Altın Oran",
        slug: "50-30-20-kurali-finansal-ozgurluge-giden-altin-oran",
        excerpt: "Ay sonunu getirmekte zorlanıyor musunuz? Maaşınızın hesabınıza yatmasıyla buharlaşıp uçması bir oluyor mu? 50/30/20 kuralı ile paranızı yönetmeyi öğrenin...",
        content: `
      <p>Ay sonunu getirmekte zorlanıyor musunuz? Maaşınızın hesabınıza yatmasıyla buharlaşıp uçması bir oluyor mu? Yalnız değilsiniz. Çoğu insan gelirinin yetersizliğinden şikayet eder, ancak asıl sorun genellikle gelirin miktarından ziyade, paranın nasıl yönetildiğidir.</p>
      
      <p>Karmaşık Excel tabloları, takip etmesi zor uygulamalar veya cimrilik derecesindeki kısıtlamalar sizi bütçe yapmaktan soğutuyorsa, size iyi bir haberimiz var. Finans dünyasının en basit, en etkili ve en sürdürülebilir yöntemiyle tanışın: 50/30/20 Kuralı.</p>
      
      <h2>50/30/20 Kuralı Nedir?</h2>
      <p>50/30/20 kuralı, vergiler düşüldükten sonra elinize geçen net geliri üç ana kategoriye ayırmanızı öneren bir bütçeleme yöntemidir:</p>
      
      <ul>
        <li><strong>İhtiyaçlar (%50)</strong></li>
        <li><strong>İstekler (%30)</strong></li>
        <li><strong>Birikim ve Borç Ödeme (%20)</strong></li>
      </ul>
      
      <h2>1. Kategori: İhtiyaçlar (Gelirinizin %50'si)</h2>
      <p>Bu kategori, hayatta kalmanız ve temel yaşam standartlarınızı sürdürebilmeniz için kesinlikle gerekli olan harcamaları kapsar:</p>
      
      <ul>
        <li>Kira veya konut kredisi ödemeleri</li>
        <li>Elektrik, su, doğalgaz, internet gibi temel faturalar</li>
        <li>Market alışverişi (Temel gıda maddeleri)</li>
        <li>Ulaşım giderleri</li>
        <li>Sağlık sigortası veya düzenli ilaç masrafları</li>
      </ul>
      
      <h2>2. Kategori: İstekler (Gelirinizin %30'u)</h2>
      <p>Bu kategori, hayatta kalmanız için zorunlu olmayan ama hayatı yaşamaya değer kılan harcamaları içerir:</p>
      
      <ul>
        <li>Dışarıda yemek yemek ve kahve keyifleri</li>
        <li>Sinema, tiyatro, konser biletleri</li>
        <li>Netflix, Spotify gibi dijital üyelikler</li>
        <li>Tatil masrafları</li>
        <li>Hobi harcamaları</li>
      </ul>
      
      <h2>3. Kategori: Geleceğiniz (Gelirinizin %20'si)</h2>
      <p>İşte finansal özgürlüğün sihirli anahtarı buradadır:</p>
      
      <ul>
        <li>Acil Durum Fonu Oluşturmak</li>
        <li>Yüksek Faizli Borçları Kapatmak</li>
        <li>Yatırım Yapmak (Borsa ve Altın)</li>
      </ul>
      
      <h2>Nasıl Uygulayacaksınız?</h2>
      <p><strong>Adım 1:</strong> Net Gelirinizi Hesaplayın</p>
      <p><strong>Adım 2:</strong> Harcamalarınızı Takip Edin</p>
      <p><strong>Adım 3:</strong> Oranları Ayarlayın</p>
      <p><strong>Adım 4:</strong> Otomatiğe Bağlayın</p>
      
      <h2>Sonuç</h2>
      <p>Para yönetimi, ne kadar kazandığınızla değil, elinizde kalanı nasıl yönlendirdiğinizle ilgilidir. Bugün %20'lik dilimi ayırıp doğru yatırımlara yönlendiren biri, maaşı kendisinden yüksek olan ama plansız harcayan birinden çok daha zengin bir geleceğe sahip olacaktır.</p>
    `,
        category: "Finans",
        author: "Para Yönetimi",
        date: "2026-01-09",
        readTime: "8 dk",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop",
        featured: false,
        views: 0,
        tags: ["bütçe", "para yönetimi", "tasarruf", "50/30/20"]
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
