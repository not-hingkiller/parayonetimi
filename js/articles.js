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
      
      <p>Bu kural, sadece paranızı yönetmenizi sağlamaz; aynı zamanda suçluluk duymadan harcama yapmanıza ve geleceğiniz için kaygı duymadan birikim yapmanıza olanak tanır. Gelin, ABD'li senatör ve iflas hukuku uzmanı Elizabeth Warren tarafından popülerleştirilen bu yöntemi tüm detaylarıyla inceleyelim.</p>
      
      <h2>50/30/20 Kuralı Nedir?</h2>
      <p>50/30/20 kuralı, vergiler düşüldükten sonra elinize geçen net geliri üç ana kategoriye ayırmanızı öneren bir bütçeleme yöntemidir. Bu yöntemin güzelliği basitliğinde yatar. Her harcamanızı kuruşu kuruşuna takip etmek yerine, harcamalarınızı üç ana "kova"ya doldurursunuz:</p>
      
      <ul>
        <li><strong>İhtiyaçlar (%50)</strong></li>
        <li><strong>İstekler (%30)</strong></li>
        <li><strong>Birikim ve Borç Ödeme (%20)</strong></li>
      </ul>
      
      <p>Bu oranlar, hayatın tadını kaçırmadan finansal sağlığınızı korumanız için gereken dengeyi temsil eder.</p>
      
      <h2>1. Kategori: İhtiyaçlar (Gelirinizin %50'si)</h2>
      <p>Bu kategori, hayatta kalmanız ve temel yaşam standartlarınızı sürdürebilmeniz için kesinlikle gerekli olan harcamaları kapsar. "Olmazsa olmazlar" listesidir. Eğer bu ödemeleri yapmazsanız, yaşam kaliteniz ciddi şekilde düşer, yasal sorunlarla karşılaşırsınız veya sağlığınız tehlikeye girer.</p>
      
      <h3>Neler "İhtiyaç" Kategorisine Girer?</h3>
      <ul>
        <li>Kira veya konut kredisi ödemeleri</li>
        <li>Elektrik, su, doğalgaz, internet gibi temel faturalar</li>
        <li>Market alışverişi (Temel gıda maddeleri)</li>
        <li>Ulaşım giderleri (Toplu taşıma, benzin)</li>
        <li>Sağlık sigortası veya düzenli ilaç masrafları</li>
        <li>Varsa, asgari kredi kartı ödemeleri (yasal takip yememek için)</li>
      </ul>
      
      <p><strong>Dikkat Edilmesi Gereken Tuzak:</strong> İnsanlar genellikle "istekleri" ihtiyaç zannetme eğilimindedir. Örneğin, bir akıllı telefona sahip olmak günümüzde bir "ihtiyaç" olabilir; ancak en son model, en pahalı akıllı telefona sahip olmak bir "istek"tir. Evde yemek yapmak için alınan makarna bir ihtiyaçtır; ancak her gün dışarıda lüks bir restoranda yemek yemek bir istektir.</p>
      
      <p>Eğer sabit giderleriniz (kira vb.) gelirinizin %50'sini aşıyorsa, finansal olarak "kırmızı alarm" veriyorsunuz demektir. Bu durumda ya daha uygun fiyatlı bir eve geçmek, faturaları düşürmek gibi radikal kararlar almalı ya da gelirinizi artırmanın yollarını aramalısınız.</p>
      
      <h2>2. Kategori: İstekler (Gelirinizin %30'u)</h2>
      <p>Bütçe yapmanın en zor kısmı, genellikle harcamaları kısmakla ilgilidir. Ancak 50/30/20 kuralı, size paranızın %30'unu keyfinize göre harcama özgürlüğü tanır. Bu kategori, hayatta kalmanız için zorunlu olmayan ama hayatı yaşamaya değer kılan, size mutluluk veren harcamaları içerir.</p>
      
      <h3>Neler "İstek" Kategorisine Girer?</h3>
      <ul>
        <li>Dışarıda yemek yemek ve kahve keyifleri</li>
        <li>Sinema, tiyatro, konser biletleri</li>
        <li>Netflix, Spotify gibi dijital üyelikler</li>
        <li>Tatil masrafları</li>
        <li>Hobi harcamaları</li>
        <li>Yeni kıyafetler (ihtiyaç fazlası olanlar)</li>
      </ul>
      
      <p><strong>Neden %30?</strong> Pek çok katı bütçe planı, bu kalemleri tamamen kesmenizi öğütler. Ancak insan psikolojisi buna uzun süre dayanamaz. Kendinizi sürekli kısıtlanmış hissetmek, bir süre sonra bütçe planını tamamen terk etmenize ve "intikam alışverişi" yaparak daha fazla harcamanıza neden olur. %30'luk dilim, psikolojik sürdürülebilirlik için hayati önem taşır. Bu parayı harcadığınız için suçluluk duymayın; çünkü bütçeniz buna izin veriyor!</p>
      
      <h2>3. Kategori: Geleceğiniz (Gelirinizin %20'si)</h2>
      <p>İşte finansal özgürlüğün sihirli anahtarı buradadır. Gelirinizin %20'si, bugünkü "siz" için değil, gelecekteki "siz" için ayrılmalıdır. Bu kategori, borçlarınızı temizlemek, güvence oluşturmak ve servet inşa etmek içindir.</p>
      
      <h3>Bu %20 ile Neler Yapılmalı?</h3>
      <ul>
        <li><strong>Acil Durum Fonu Oluşturmak:</strong> İşsiz kalma, ani hastalık veya evdeki bir tadilat gibi durumlar için, en az 3-6 aylık giderinizi karşılayacak nakit parayı kenara koyun.</li>
        <li><strong>Yüksek Faizli Borçları Kapatmak:</strong> Kredi kartı borçları gibi yüksek faiz işleyen "toksik" borçları temizlemek, yapabileceğiniz en iyi yatırımdır.</li>
        <li><strong>Yatırım Yapmak (Borsa ve Altın):</strong> Borçlarınız bittiğinde ve acil durum fonunuz hazır olduğunda, bu %20'yi artık paranın sizin için çalışacağı alanlara yönlendirmelisiniz. Hisse senetleri, yatırım fonları, bireysel emeklilik (BES) veya döviz/altın sepetleri ile bileşik getirinin gücünden faydalanmalısınız.</li>
      </ul>
      
      <h2>Bu Kuralı Nasıl Uygulayacaksınız? (Adım Adım Rehber)</h2>
      <p>Teori güzeldir, ancak pratik her şeydir. 50/30/20 kuralını hayatınıza hemen bugün entegre etmek için şu 4 adımı izleyin:</p>
      
      <p><strong>Adım 1: Net Gelirinizi Hesaplayın</strong><br>Maaş bordronuzdaki brüt tutara değil, banka hesabınıza yatan net tutara bakın. Eğer prim veya ek iş gibi düzensiz gelirleriniz varsa, son 3 ayın ortalamasını alın.</p>
      
      <p><strong>Adım 2: Harcamalarınızı Takip Edin (Yüzleşme Anı)</strong><br>Geçen ay nereye ne kadar harcadınız? Kredi kartı ekstrelerinizi ve banka hareketlerinizi inceleyin. Harcamalarınızı İhtiyaç, İstek ve Birikim olarak üç gruba ayırın.</p>
      
      <p><strong>Adım 3: Oranları Ayarlayın</strong><br>Mevcut durumunuz 50/30/20'ye uymuyor olabilir. Belki şu an 70/20/10 durumundasınız. Sorun değil. Hedefiniz yavaş yavaş ideal orana yaklaşmak olmalı. İsteklerden kısarak borç ödemeye aktarın. Abonelikleri gözden geçirin. Daha uygun fiyatlı market alternatiflerine yönelin.</p>
      
      <p><strong>Adım 4: Otomatiğe Bağlayın</strong><br>İradenize güvenmeyin, sisteme güvenin. Maaş yattığı gün, %20'lik birikim tutarının otomatik olarak yatırım hesabınıza veya borç ödemesine gitmesi için bankanıza talimat verin. Görmediğiniz parayı harcayamazsınız.</p>
      
      <h2>Türkiye Şartlarında 50/30/20 Mümkün mü?</h2>
      <p>Gerçekçi olalım; yüksek enflasyon ve artan kira fiyatları nedeniyle, özellikle büyük şehirlerde yaşayanlar için sabit giderleri (İhtiyaçlar) %50 ile sınırlamak zor olabilir.</p>
      
      <p>Eğer kiranız ve faturalarınız maaşınızın %60'ını veya %70'ini götürüyorsa, kuralı esnetin. 60/20/20 veya 70/10/20 gibi varyasyonları deneyin. Burada en kritik nokta, %20'lik birikim/yatırım kısmından asla taviz vermemektir. Gerekirse isteklerinizden (%10'a düşürerek) kısın, ancak geleceğinize yatırım yapmaktan vazgeçmeyin. Çünkü enflasyonist ortamda paranızı yatırıma yönlendirmemek, paranın erimesine göz yummak demektir.</p>
      
      <h2>Sonuç: Mükemmel Olmak Zorunda Değilsiniz</h2>
      <p>50/30/20 kuralı, katı bir kanun değil, bir pusuladır. Bazı aylar tatil harcamalarıyla %30'luk istek sınırı aşılabilir, bazı aylar beklenmedik bir sağlık masrafı çıkabilir. Önemli olan genel rotayı kaybetmemektir.</p>
      
      <p>Para yönetimi, ne kadar kazandığınızla değil, elinizde kalanı nasıl yönlendirdiğinizle ilgilidir. Bugün %20'lik dilimi ayırıp doğru hisse senetlerine veya yatırım fonlarına yatıran biri, maaşı kendisinden yüksek olan ama plansız harcayan birinden çok daha zengin bir geleceğe sahip olacaktır.</p>
      
      <p><strong>Şimdi hesap makinesini elinize alın ve kendi 50/30/20 tablonuzu oluşturun. Gelecekteki "siz", bugün attığınız bu adım için size minnettar kalacak.</strong></p>
    `,
    category: "Finans",
    author: "Para Yönetimi",
    date: "2026-01-09",
    readTime: "12 dk",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop",
    featured: false,
    views: 0,
    tags: ["bütçe", "para yönetimi", "tasarruf", "50/30/20"]
  },
  {
    id: 3,
    title: "Bileşik Getiri: Dünyanın 8. Harikası ve Servet İnşasının Sırrı",
    slug: "bilesik-getiri-dunyanin-8-harikasi",
    excerpt: "Albert Einstein'a atfedilen meşhur bir söz vardır: 'Bileşik faiz, dünyanın 8. harikasıdır. Onu anlayan kazanır, anlamayan ise bedelini öder.'",
    content: `
      <p>Albert Einstein'a atfedilen meşhur bir söz vardır: "Bileşik faiz (getiri), dünyanın 8. harikasıdır. Onu anlayan kazanır, anlamayan ise bedelini öder."</p>
      
      <p>Çoğu insan zengin olmanın yolunun piyangoyu tutturmaktan, çok büyük bir miras kalmasından veya bir anda parlayan dahiyane bir iş fikrinden geçtiğini sanır. Oysa gerçek servet, genellikle sıkıcı görünen, yavaş ilerleyen ama matematiksel kesinliği olan bir sürecin ürünüdür. Bu sürecin motoru ise Bileşik Getiri'dir.</p>
      
      <h2>Basit ve Bileşik Arasındaki Devasa Fark</h2>
      <p>Bileşik getiriyi anlamak için önce onun zıttı olan "Basit Getiri"ye bakmak gerekir.</p>
      
      <ul>
        <li><strong>Basit Getiri:</strong> Sadece koyduğunuz anapara üzerinden kazanç sağlarsınız.</li>
        <li><strong>Bileşik Getiri:</strong> Anaparanızın getiri sağlaması, sonra o getirinin de tekrar getiri sağlaması, sonra o getirinin getirisinin de getiri sağlaması... Yani, paranın yavrulamasının da yavrulamasıdır.</li>
      </ul>
      
      <p>Bunu bir "Kartopu Etkisi" (Snowball Effect) olarak düşünebilirsiniz. Dağın zirvesinden avucunuzda sıktığınız küçük bir kartopunu yuvarladığınızı hayal edin. İlk başta kartopu küçüktür ve yavaş büyür. Ancak yuvarlandıkça yüzeyi genişler, her dönüşte üzerine daha fazla kar yapışır. Yolun sonuna geldiğinde, o küçük top artık devasa bir çığa dönüşmüştür ve önünde durulması imkansızdır.</p>
      
      <h2>Sayılarla Bir Örnek</h2>
      <p>Cebinizde 10.000 TL var ve yıllık %10 getiri elde ediyorsunuz.</p>
      
      <p><strong>Basit Getiri:</strong> Her yıl 1.000 TL kazanırsınız. 20 yıl sonra toplam 20.000 TL kârınız olur. Anaparanızla birlikte toplam 30.000 TL'niz olur.</p>
      
      <p><strong>Bileşik Getiri:</strong> İlk yıl 1.000 TL kazanırsınız (Toplam 11.000 TL). İkinci yıl, artık 11.000 TL üzerinden %10 kazanırsınız (1.100 TL). Üçüncü yıl 12.100 TL üzerinden kazanırsınız... 20 yılın sonunda paranız 67.275 TL olur.</p>
      
      <p>Gördünüz mü? Anapara aynı, oran aynı, süre aynı. Ancak sırf kazanılan parayı çekmeyip sisteme dahil ettiğiniz için, paranız iki katından fazla değerlendi.</p>
      
      <h2>Zamanın Gücü: Erken Başlamak Neden Çok Paradan Daha Önemlidir?</h2>
      <p>Bileşik getirinin en iyi dostu "para" değil, <strong>"zaman"</strong>dır. Çoğu genç yatırımcı, "Şu an param az, elim bollaşınca yatırım yaparım" hatasına düşer. Oysa finansal matematikte, küçük parayla erken başlamak, büyük parayla geç başlamaktan neredeyse her zaman daha iyidir.</p>
      
      <p>Bunu kanıtlamak için iki kurgusal karakterimiz Zeynep ve Ahmet'in hikayesine bakalım. Varsayalım ki her ikisi de yıllık ortalama %10 getiri elde ediyor.</p>
      
      <h3>1. Zeynep (Erken Kalkan Yol Alır)</h3>
      <ul>
        <li>Zeynep 25 yaşında yatırıma başlar.</li>
        <li>Her ay sadece 1.000 TL yatırır.</li>
        <li>Bunu sadece 10 yıl boyunca yapar (35 yaşına kadar).</li>
        <li>35 yaşında para eklemeyi bırakır ama parasını çekmez, içerideki para 60 yaşına kadar (25 yıl daha) büyümeye devam eder.</li>
        <li><strong>Zeynep'in Cebinden Çıkan Toplam Para: 120.000 TL</strong></li>
      </ul>
      
      <h3>2. Ahmet (Geç Kalanın Telaşı)</h3>
      <ul>
        <li>Ahmet 25 yaşında "Daha gencim, harcayayım" der. Yatırıma 35 yaşında başlar.</li>
        <li>Zeynep'i yakalamak için her ay 1.000 TL yatırır.</li>
        <li>Bunu tam 25 yıl boyunca (60 yaşına kadar) aralıksız sürdürür.</li>
        <li><strong>Ahmet'in Cebinden Çıkan Toplam Para: 300.000 TL</strong></li>
      </ul>
      
      <h3>60 Yaşına Geldiklerinde Sonuç Ne Olur?</h3>
      <p>Herkes Ahmet'in daha çok parası olacağını düşünür çünkü o, Zeynep'ten 2,5 kat daha fazla para yatırmıştır (300 bin TL'ye karşı 120 bin TL).</p>
      
      <p>Ancak sonuç şaşırtıcıdır:</p>
      <ul>
        <li><strong>Ahmet'in Toplam Birikimi:</strong> Yaklaşık 1.330.000 TL</li>
        <li><strong>Zeynep'in Toplam Birikimi:</strong> Yaklaşık 2.150.000 TL</li>
      </ul>
      
      <p>İnanılmaz değil mi? Zeynep, Ahmet'ten çok daha az para yatırmasına ve Ahmet'ten 15 yıl daha az çalışmasına rağmen, sırf 10 yıl erken başladığı için neredeyse iki katı servete sahip oldu.</p>
      
      <p><strong>İşte bileşik getirinin sırrı budur: Zaman, miktardan daha değerlidir.</strong></p>
      
      <h2>Borsada Bileşik Getiri Nasıl Çalışır? (Temettü Gücü)</h2>
      <p>"Bileşik getiri sadece banka faizi midir?" Hayır. Hatta enflasyonist ortamlarda banka faizi reel getiri sunmayabilir. Bileşik getirinin en iyi çalıştığı yerlerden biri <strong>Hisse Senedi Piyasası (Borsa)</strong>dır.</p>
      
      <p>Borsada bileşik getiri mekanizması "Temettü" (Kâr Payı) ile çalışır:</p>
      <ul>
        <li>Bir şirketin hissesini aldınız ve şirket kâr etti. Size hesabınıza nakit olarak kâr payı (temettü) yatırdı.</li>
        <li>Eğer o parayı çekip harcarsanız, bileşik getiriyi bozarsınız.</li>
        <li>Eğer o gelen parayla, hisse fiyatı ne olursa olsun tekrar aynı hisseden alırsanız, "lot sayınızı" artırırsınız.</li>
        <li>Seneye şirket tekrar temettü verdiğinde, artık daha fazla hisseniz olduğu için daha fazla ödeme alırsınız. Bu daha fazla ödemeyle daha da fazla hisse alırsınız.</li>
      </ul>
      
      <p>Yıllar içinde bu döngü (Temettü Verimi + Hisse Fiyatı Artışı), portföyünüzü parabolik bir şekilde yukarı taşır. Türkiye borsasında (BIST) EREGL, FROTO, TUPRS gibi şirketlerin uzun vadeli grafiklerine bakıldığında, temettülerini geri yatıran yatırımcıların servetlerini nasıl katladığı açıkça görülür.</p>
      
      <h2>72 Kuralı: Kafadan Hesaplama Pratiği</h2>
      <p>Paranızın ne zaman ikiye katlanacağını merak ediyorsanız, karmaşık hesap makinelerine ihtiyacınız yok. Finansçıların kullandığı basit bir pratik yöntem vardır: 72 Kuralı.</p>
      
      <p><strong>Formül:</strong> 72 / Yıllık Getiri Oranı = Paranın İkiye Katlanma Süresi (Yıl)</p>
      
      <p>Örneğin paranızı yıllık %10 getiri sağlayan bir fona yatırdınız: 72 / 10 = 7,2 Yıl. (Paranız 7 yılda bir ikiye katlanacak).</p>
      
      <p>Eğer yıllık %24 getiri bulursanız: 72 / 24 = 3 Yıl. (Paranız her 3 yılda bir ikiye katlanacak).</p>
      
      <p>Bu kural, bir yatırımın potansiyelini hızlıca anlamanız için harika bir araçtır.</p>
      
      <h2>Sabır: En Büyük Düşmanınız ve En İyi Dostunuz</h2>
      <p>Bileşik getirinin grafiği doğrusal (düz bir çizgi) değildir; üsteldir (hokey sopası şeklinde).</p>
      
      <p>Yatırıma başladığınız ilk yıllar çok sıkıcı geçer. Sanki paranız hiç büyümüyormuş gibi hissedersiniz.</p>
      <ul>
        <li>1. Yıl: Küçük bir artış.</li>
        <li>5. Yıl: Hâlâ göze çarpan bir zenginlik yok.</li>
        <li>10. Yıl: "Acaba değiyor mu?" şüpheleri.</li>
        <li>15. Yıl ve Sonrası: BOOM! Eğri bir anda dikleşmeye başlar. Önceki 10 yılda kazandığınız toplam parayı, artık tek bir yılda kazanmaya başlarsınız.</li>
      </ul>
      
      <p>Çoğu insan, grafiğin o dikleştiği "kırılma noktası"nı göremeden, 5. veya 6. yılda sıkılıp parasını çeker ve harcar. Warren Buffett'ın servetinin %99'unu 50 yaşından sonra kazandığını biliyor muydunuz? O, sadece "sıkılmadan" kartopunu yuvarlamaya devam etti.</p>
      
      <h2>Sonuç: Bugün Bir Fidan Dik</h2>
      <p>Eski bir Çin atasözü der ki: "Bir ağaç dikmek için en iyi zaman 20 yıl önceydi. İkinci en iyi zaman ise bugündür."</p>
      
      <p>Belki 20 yaşında başlamadınız, belki şu an 30, 40 hatta 50 yaşındasınız. Hiç fark etmez. Bileşik getiri makinesini çalıştırmak için hiçbir zaman geç kalmış sayılmazsınız. Ancak bugün başlamazsanız, yarın bir gün daha kaybetmiş olacaksınız.</p>
      
      <p>Sitenizdeki diğer yazımızda bahsettiğimiz %20'lik birikim kuralını hatırlayın. O parayı yastık altında tutmayın. Enflasyonun o parayı eritmesine izin vermeyin. Onu bir yatırım hesabına koyun, doğru varlıkları seçin ve sabırla büyümesini izleyin.</p>
      
      <p><strong>Unutmayın; küçük damlalar sadece göl olmaz, doğru yönetilirse okyanus olur. Finansal özgürlüğünüz, o ilk kartopunu bugün yuvarlamanıza bağlı.</strong></p>
    `,
    category: "Finans",
    author: "Para Yönetimi",
    date: "2026-01-09",
    readTime: "15 dk",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop",
    featured: true,
    views: 0,
    tags: ["bileşik getiri", "yatırım", "finans", "servet"]
  },
  {
    id: 4,
    title: "Yatırımcı Psikolojisi: Borsada En Büyük Düşmanınız Ekran Değil, Aynadaki Yüzdür",
    slug: "yatirimci-psikolojisi-borsada-en-buyuk-dusmaniniz",
    excerpt: "Isaac Newton, Güney Denizi Balonu krizinde servetinin büyük bir kısmını kaybettikten sonra şu sözü söylemiştir: 'Gök cisimlerinin hareketlerini milimetrik hesaplayabiliyorum ama insanların çılgınlığını hesaplayamıyorum.'",
    content: `
      <p>Dünyanın gelmiş geçmiş en büyük fizikçilerinden Isaac Newton, Güney Denizi Balonu (South Sea Bubble) krizinde servetinin büyük bir kısmını kaybettikten sonra tarihe geçen şu sözü söylemiştir: <strong>"Gök cisimlerinin hareketlerini milimetrik hesaplayabiliyorum ama insanların çılgınlığını hesaplayamıyorum."</strong></p>
      
      <p>Eğer Newton gibi bir dahi bile borsada duygularına yenik düşüp para kaybedebiliyorsa, bu konu üzerinde durup düşünmemiz gerekir. Finansal okuryazarlık sadece bilançoları okumak, grafiklere bakmak veya faiz oranlarını takip etmek değildir. Başarılı bir yatırımcı olmanın %20'si teknik bilgi ise, %80'i psikolojiyi yönetebilmektir.</p>
      
      <p>Borsada para kazanmak basit bir matematiksel formüle dayanır: "Düşükten al, yüksekten sat." Söylemesi dünyanın en kolay cümlesidir. Ancak uygulamada milyonlarca yatırımcı tam tersini yapar: Coşkuyla tepeden alır, korkuyla dipten satar. Peki neden? Beynimiz finansal piyasalar için değil, vahşi doğada hayatta kalmak için evrimleşmiştir de ondan.</p>
      
      <p>Bu yazıda, portföyünüzü eriten iki büyük psikolojik canavarı; <strong>FOMO (Fırsatı Kaçırma Korkusu)</strong> ve <strong>Panik Satışını</strong> inceleyecek ve onlarla nasıl başa çıkacağınızı konuşacağız.</p>
      
      <h2>1. FOMO (Fear Of Missing Out): Fırsatı Kaçırma Korkusu</h2>
      <p>Sosyal medyada bir hissenin adı dolaşmaya başlar. Arkadaş grubunuzda herkes "X hissesini aldım, bir haftada %20 yaptı!" diye konuşur. Grafik dimdik yukarı gitmektedir. İçinizden bir ses fısıldar: "Herkes zengin oluyor, sen treni kaçırıyorsun! Hemen almalısın!"</p>
      
      <p>İşte bu sese FOMO denir. Ve genellikle felaketin başlangıcıdır.</p>
      
      <h3>FOMO Neden Tehlikelidir?</h3>
      <p>FOMO, sizi rasyonel analizden uzaklaştırır ve sürü psikolojisine iter. Bir hisse senedi, arkasında temel bir gerekçe olmadan sadece "fiyatı artıyor diye" alınıyorsa, orada yatırım değil kumar yapılıyor demektir.</p>
      
      <p>Fiyatlar sonsuza kadar yükselmez. Genellikle küçük yatırımcı, o "coşku" evresinin en tepesinde, yani "balonun patlamak üzere olduğu" noktada oyuna dahil olur. Profesyonel yatırımcıların (balinaların) kâr satışı yapıp çıkmaya hazırlandığı yer, FOMO'ya kapılan acemi yatırımcının "Bütün paramla giriyorum!" dediği yerdir. Sonuç? Zirveden maliyetlenmek ve yıllarca zararın çıkmasını beklemek.</p>
      
      <h3>FOMO'yu Yenmek İçin 3 Taktik:</h3>
      <ul>
        <li><strong>Piyasa Fırsatlarla Doludur:</strong> Borsada fırsatlar otobüs durağı gibidir. Biri kaçarsa, 15 dakika sonra diğeri gelir. "Bu son şanstı" düşüncesi bir illüzyondur.</li>
        <li><strong>Sosyal Medya Detoksu:</strong> Twitter (X), Telegram veya forumlardaki "Uçacak, kaçacak, tavan tavan gidecek" paylaşımlarını görmezden gelin. Unutmayın, kimse size karşılıksız para kazandırmak için tüyo vermez.</li>
        <li><strong>Kendi Analizinize Güvenin:</strong> Bir hisseyi almadan önce kendinize şu soruyu sorun: "Bu hisseyi fiyatı arttığı için mi alıyorum, yoksa şirketin kârı arttığı için mi?" Cevabınız fiyat ise, o "Al" butonuna basmayın.</li>
      </ul>
      
      <h2>2. Panik Satışı: Korkunun Ecele Faydası Yoktur</h2>
      <p>FOMO ne kadar "açgözlülük" ile ilgiliyse, Panik Satışı da o kadar "korku" ile ilgilidir. Ve korku, açgözlülükten çok daha güçlü bir duygudur.</p>
      
      <p>Nobel ödüllü psikolog Daniel Kahneman'ın "Beklenti Teorisi"ne (Prospect Theory) göre; insanlar kaybetmenin acısını, kazanmanın sevincinden 2 kat daha fazla hisseder. Yani 1000 TL kazanmak sizi biraz mutlu eder, ama 1000 TL kaybetmek sizi kahreder.</p>
      
      <p>Piyasa düşmeye başladığında, ekranlar kırmızıya boyandığında beyninizin "amigdala" bölgesi (korku merkezi) devreye girer. Mantıklı düşünen ön lobunuz devre dışı kalır. Beyniniz size şunu emreder: "Tehlike var! Hemen kaç! Nakite geç ve canını kurtar!"</p>
      
      <p>İşte bu dürtüyle sattığınız an, aslında "sanal" olan zararınızı "gerçek" bir zarara dönüştürürsünüz. Tarihsel veriler gösteriyor ki, piyasanın en büyük düşüş günlerinde panikleyip satanlar, hemen ardından gelen büyük yükseliş günlerini kaçırmış ve uzun vadede en çok zarar eden kitle olmuştur.</p>
      
      <h3>Panik Anında Ne Yapmalı?</h3>
      <ul>
        <li><strong>Ekranı Kapatın:</strong> Düşüş günlerinde sürekli ekrana bakmak, yangına körükle gitmek gibidir. Fiyatlara bakmayı bırakın, yürüyüşe çıkın.</li>
        <li><strong>Yatırım Tezini Hatırlayın:</strong> O hisseyi alırken bir sebebiniz vardı. Şirketin fabrikası mı yandı? İflas mı etti? Yoksa sadece genel piyasa kötümserliği mi var? Eğer şirketin temelleri sağlamsa, fiyatın düşmesi bir "satış" sinyali değil, "indirimli alış" fırsatıdır.</li>
        <li><strong>Maliyete Odaklanmayın:</strong> "Maliyetime gelince satacağım" düşüncesi yanlıştır. Piyasa sizin maliyetinizi bilmez ve umursamaz.</li>
      </ul>
      
      <h2>3. Yatırımcı Psikolojisini Yönetmenin Altın Kuralları</h2>
      <p>Duygularınızı tamamen yok edemezsiniz, sonuçta robotsunuz değil, insansınız. Ancak onları yönetmeyi öğrenebilirsiniz. İşte borsada "çelik gibi sinirlere" sahip olmanın reçetesi:</p>
      
      <h3>A. Yatırım Planınız Olsun (Oyun Planı)</h3>
      <p>Maça çıkmadan önce stratejiniz belli olmalıdır. Hisseyi kaçtan alacaksınız? Hangi durumda satacaksınız? Hedefiniz ne? Vadeniz ne kadar? Yazılı bir planınız varsa, kriz anında duygularınızla değil, planınızla hareket edersiniz. Plansız yatırımcı, rüzgarda savrulan yaprak gibidir; her fiyat hareketinde yön değiştirir.</p>
      
      <h3>B. İhtiyacınız Olan Parayla Yatırım Yapmayın</h3>
      <p>Borsadaki en stresli yatırımcı, o paraya haftaya veya gelecek ay ihtiyacı olan yatırımcıdır. "Kredi kartı borcumu ödeyeceğim parayla 3 günlüğüne borsaya gireyim" demek, intihar etmektir. Borsaya yatırdığınız para, en az 1-3 yıl boyunca dokunmayacağınız, kaybettiğinizde hayat standardınızı düşürmeyecek bir para olmalıdır. "Unutabileceğiniz" parayla yatırım yaparsanız, düşüşlerde panik olmazsınız.</p>
      
      <h3>C. Uzun Vadeli Düşünün (Miyop Olmayın)</h3>
      <p>Borsayı günlük veya haftalık takip etmek, miyop olmaktır. Bir ağacın büyümesini her gün ölçmeye çalışırsanız, hiç büyümüyormuş gibi gelir. Ama 5 yıl sonra baktığınızda dev bir çınar görürsünüz. Warren Buffett'ın dediği gibi: "Hisse senedi piyasası, sabırsızlardan sabırlılara para aktaran bir araçtır." Grafikleri günlükten çıkarıp "aylık" periyoda aldığınızda, o korkunç düşüşlerin aslında uzun vadeli yükseliş trendinde küçük birer "düzeltme" olduğunu görürsünüz.</p>
      
      <h3>D. Çeşitlendirme Yapın (Sepet Mantığı)</h3>
      <p>Tüm paranızı tek bir hisseye veya sektöre yatırırsanız, gece rahat uyuyamazsınız. O hisseyle ilgili kötü bir haber geldiğinde %50 zarar edebilirsiniz. Ancak paranızı 10 farklı şirkete, altına veya fonlara bölerseniz; biri düşse bile diğeri yükseleceği için psikolojiniz sağlam kalır.</p>
      
      <h2>Sonuç: Yatırım Bir Maraton Koşusudur</h2>
      <p>Borsa bir zenginleşme yeri değil, varlık koruma ve büyütme yeridir. Kısa vadede zengin olma hayaliyle (FOMO) işlem yapanlar, genellikle kısa vadede batarak (Panik Satışı) piyasayı terk ederler.</p>
      
      <p>Başarılı yatırımcılar duygusuz değildir; sadece korku ve coşkularının kararlarını etkilemesine izin vermezler. Onlar düştüğünde ağlamaz, çıktığında havalara uçmazlar. Sürece odaklanırlar.</p>
      
      <p>Bir dahaki sefere parmağınız "Sat" butonuna giderken korkuyla titrediğinde veya "Al" butonuna giderken heyecanla çarptığında durun. Derin bir nefes alın. Bilgisayardan uzaklaşın. Ve kendinize şu soruyu sorun: <strong>"Şu an mantığımla mı karar veriyorum, yoksa duygularımla mı?"</strong></p>
      
      <p><strong>Cevap genellikle cüzdanınızın kaderini belirleyecektir.</strong></p>
    `,
    category: "Finans",
    author: "Para Yönetimi",
    date: "2026-01-09",
    readTime: "14 dk",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop",
    featured: true,
    views: 0,
    tags: ["yatırımcı psikolojisi", "FOMO", "panik satış", "borsa"]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function getAllArticles() {
  return articlesDB;
}

function getArticleById(id) {
  return articlesDB.find(article => article.id === id);
}

function getArticleBySlug(slug) {
  return articlesDB.find(article => article.slug === slug);
}

function getFeaturedArticles() {
  return articlesDB.filter(article => article.featured);
}

function getArticlesByCategory(category) {
  if (category === 'Tümü' || !category) {
    return articlesDB;
  }
  return articlesDB.filter(article => article.category === category);
}

function getAllCategories() {
  const categories = ['Tümü'];
  const uniqueCategories = [...new Set(articlesDB.map(article => article.category))];
  return categories.concat(uniqueCategories.sort());
}

function searchArticles(query) {
  const lowerQuery = query.toLowerCase();
  return articlesDB.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

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

function getRecentArticles(limit = 5) {
  return [...articlesDB]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

function getPopularArticles(limit = 5) {
  return [...articlesDB]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('tr-TR', options);
}

function getCategoryCount(category) {
  return articlesDB.filter(article => article.category === category).length;
}

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
