// ============================================
// ARTICLE DATABASE & CONTENT MANAGEMENT
// ============================================

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
        <li>Ulaşım giderleri (Toplu taşıma, benzin)</li>
        <li>Sağlık sigortası veya düzenli ilaç masrafları</li>
      </ul>
      <p><strong>Dikkat Edilmesi Gereken Tuzak:</strong> İnsanlar genellikle "istekleri" ihtiyaç zannetme eğilimindedir. Örneğin, bir akıllı telefona sahip olmak günümüzde bir "ihtiyaç" olabilir; ancak en son model, en pahalı akıllı telefona sahip olmak bir "istek"tir.</p>
      <h2>2. Kategori: İstekler (Gelirinizin %30'u)</h2>
      <p>Bu kategori, hayatta kalmanız için zorunlu olmayan ama hayatı yaşamaya değer kılan harcamaları içerir:</p>
      <ul>
        <li>Dışarıda yemek yemek ve kahve keyifleri</li>
        <li>Netflix, Spotify gibi dijital üyelikler</li>
        <li>Tatil masrafları</li>
        <li>Hobi harcamaları</li>
      </ul>
      <p><strong>Neden %30?</strong> Pek çok katı bütçe planı, bu kalemleri tamamen kesmenizi öğütler. Ancak insan psikolojisi buna uzun süre dayanamaz. %30'luk dilim, psikolojik sürdürülebilirlik için hayati önem taşır.</p>
      <h2>3. Kategori: Geleceğiniz (Gelirinizin %20'si)</h2>
      <p>İşte finansal özgürlüğün sihirli anahtarı buradadır:</p>
      <ul>
        <li><strong>Acil Durum Fonu Oluşturmak</strong></li>
        <li><strong>Yüksek Faizli Borçları Kapatmak</strong></li>
        <li><strong>Yatırım Yapmak (Borsa ve Altın)</strong></li>
      </ul>
      <h2>Türkiye Şartlarında 50/30/20 Mümkün mü?</h2>
      <p>Yüksek enflasyon ve artan kira fiyatları nedeniyle, özellikle büyük şehirlerde yaşayanlar için sabit giderleri %50 ile sınırlamak zor olabilir. Kuralı esnetin: 60/20/20 veya 70/10/20 gibi varyasyonları deneyin. En kritik nokta, %20'lik birikim/yatırım kısmından asla taviz vermemektir.</p>
      <h2>Sonuç</h2>
      <p>Para yönetimi, ne kadar kazandığınızla değil, elinizde kalanı nasıl yönlendirdiğinizle ilgilidir. Bugün %20'lik dilimi ayırıp doğru yatırımlara yönlendiren biri, maaşı kendisinden yüksek olan ama plansız harcayan birinden çok daha zengin bir geleceğe sahip olacaktır.</p>
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
      <p>Çoğu insan zengin olmanın yolunun piyangoyu tutturmaktan geçtiğini sanır. Oysa gerçek servet, genellikle sıkıcı görünen, yavaş ilerleyen ama matematiksel kesinliği olan bir sürecin ürünüdür. Bu sürecin motoru ise Bileşik Getiri'dir.</p>
      <h2>Basit ve Bileşik Arasındaki Devasa Fark</h2>
      <ul>
        <li><strong>Basit Getiri:</strong> Sadece koyduğunuz anapara üzerinden kazanç sağlarsınız.</li>
        <li><strong>Bileşik Getiri:</strong> Anaparanızın getiri sağlaması, sonra o getirinin de tekrar getiri sağlaması... Yani, paranın yavrulamasının da yavrulamasıdır.</li>
      </ul>
      <p>Bunu bir "Kartopu Etkisi" olarak düşünebilirsiniz. Dağın zirvesinden yuvarladığınız küçük kartopu, yolun sonunda devasa bir çığa dönüşür.</p>
      <h2>Sayılarla Örnek</h2>
      <p>10.000 TL ve yıllık %10 getiri:</p>
      <p><strong>Basit Getiri:</strong> 20 yıl sonra 30.000 TL</p>
      <p><strong>Bileşik Getiri:</strong> 20 yıl sonra 67.275 TL</p>
      <h2>Zeynep ve Ahmet Hikayesi</h2>
      <p><strong>Zeynep:</strong> 25 yaşında başladı, 10 yıl boyunca aylık 1.000 TL yatırdı (toplam 120.000 TL), sonra bıraktı. 60 yaşında: <strong>2.150.000 TL</strong></p>
      <p><strong>Ahmet:</strong> 35 yaşında başladı, 25 yıl boyunca aylık 1.000 TL yatırdı (toplam 300.000 TL). 60 yaşında: <strong>1.330.000 TL</strong></p>
      <p>Zeynep daha az yatırmasına rağmen daha zengin oldu. İşte bileşik getirinin sırrı: <strong>Zaman, miktardan daha değerlidir.</strong></p>
      <h2>72 Kuralı</h2>
      <p><strong>Formül:</strong> 72 / Yıllık Getiri = Paranın İkiye Katlanma Süresi</p>
      <p>%10 getiri: 72/10 = 7.2 yıl</p>
      <h2>Sonuç</h2>
      <p>Eski bir Çin atasözü: "Bir ağaç dikmek için en iyi zaman 20 yıl önceydi. İkinci en iyi zaman ise bugündür."</p>
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
    excerpt: "Isaac Newton, Güney Denizi Balonu krizinde servetinin büyük bir kısmını kaybettikten sonra şu sözü söylemiştir: 'Gök cisimlerinin hareketlerini hesaplayabiliyorum ama insanların çılgınlığını hesaplayamıyorum.'",
    content: `
      <p>Isaac Newton, Güney Denizi Balonu krizinde servetini kaybettikten sonra: <strong>"Gök cisimlerinin hareketlerini milimetrik hesaplayabiliyorum ama insanların çılgınlığını hesaplayamıyorum."</strong></p>
      <p>Newton gibi bir dahi bile borsada duygularına yenik düşebiliyorsa, bu konu üzerinde durup düşünmeliyiz. Başarılı yatırımcı olmanın %20'si teknik bilgi, %80'i psikolojiyi yönetebilmektir.</p>
      <h2>1. FOMO (Fırsatı Kaçırma Korkusu)</h2>
      <p>Herkes "X hissesini aldım, %20 yaptı!" diye konuşurken içinizden bir ses fısıldar: "Treni kaçırıyorsun!" İşte bu FOMO'dur ve genellikle felaketin başlangıcıdır.</p>
      <h3>FOMO'yu Yenmek İçin 3 Taktik:</h3>
      <ul>
        <li><strong>Piyasa Fırsatlarla Doludur:</strong> Fırsatlar otobüs durağı gibidir, biri kaçarsa diğeri gelir.</li>
        <li><strong>Sosyal Medya Detoksu:</strong> "Uçacak, tavan gidecek" paylaşımlarını görmezden gelin.</li>
        <li><strong>Kendi Analizinize Güvenin:</strong> "Fiyatı arttığı için mi alıyorum, şirketin kârı arttığı için mi?"</li>
      </ul>
      <h2>2. Panik Satışı</h2>
      <p>Daniel Kahneman'ın "Beklenti Teorisi"ne göre; insanlar kaybetmenin acısını, kazanmanın sevincinden 2 kat daha fazla hisseder.</p>
      <p>Piyasa düştüğünde beyninizdeki amigdala devreye girer: "Tehlike var! Hemen kaç!" Bu dürtüyle sattığınız an, "sanal" zararınızı "gerçek" zarara dönüştürürsünüz.</p>
      <h3>Panik Anında Ne Yapmalı?</h3>
      <ul>
        <li><strong>Ekranı Kapatın:</strong> Düşüş günlerinde sürekli bakmak yangına körükle gitmektir.</li>
        <li><strong>Yatırım Tezini Hatırlayın:</strong> Şirketin fabrikası mı yandı? Yoksa genel kötümserlik mi?</li>
      </ul>
      <h2>Altın Kurallar</h2>
      <ul>
        <li><strong>Yazılı Planınız Olsun:</strong> Kriz anında duygularınızla değil, planınızla hareket edin.</li>
        <li><strong>İhtiyacınız Olan Parayla Yatırım Yapmayın:</strong> En az 1-3 yıl dokunmayacağınız para olsun.</li>
        <li><strong>Uzun Vadeli Düşünün:</strong> Warren Buffett: "Borsa sabırsızlardan sabırlılara para aktarır."</li>
        <li><strong>Çeşitlendirme Yapın:</strong> Tüm paranızı tek hisseye yatırmayın.</li>
      </ul>
      <h2>Sonuç</h2>
      <p>Parmağınız "Sat" butonuna giderken durun. Derin nefes alın ve sorun: <strong>"Mantığımla mı karar veriyorum, yoksa duygularımla mı?"</strong></p>
    `,
    category: "Finans",
    author: "Para Yönetimi",
    date: "2026-01-09",
    readTime: "14 dk",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop",
    featured: true,
    views: 0,
    tags: ["yatırımcı psikolojisi", "FOMO", "panik satış", "borsa"]
  },
  {
    id: 5,
    title: "Acil Durum Fonu: Finansal Hayatınızın Hava Yastığı",
    slug: "acil-durum-fonu-finansal-hayatinizin-hava-yastigi",
    excerpt: "Hayat, planlar yaparken başımıza gelenlerdir. Bir sabah arabanızın motoru bozulabilir, dişiniz aniden ağrımaya başlayabilir veya işyerinizde küçülme kararı alınabilir. Acil Durum Fonu olmadan bu krizleri nasıl yöneteceksiniz?",
    content: `
      <p>Hayat, planlar yaparken başımıza gelenlerdir. Siz ay sonu bütçenizi kusursuzca hesaplamış, tasarruf hedeflerinizi belirlemiş ve geleceğe umutla bakarken; bir sabah arabanızın motoru bozulabilir, dişiniz aniden ağrımaya başlayıp pahalı bir tedavi gerektirebilir veya işyerinizde beklenmedik bir küçülme kararı alınabilir.</p>
      
      <p><strong>Murphy Kanunları finansal hayatta da işler: "Bir şeyin ters gitme ihtimali varsa, en kötü zamanda ters gider."</strong></p>
      
      <p>İşte tam bu noktada, finansal kaderinizi belirleyen kritik bir soruyla baş başa kalırsınız: Bu krizi nasıl yöneteceksiniz? Kredi kartlarına sarılıp borç sarmalına mı gireceksiniz, yoksa derin bir nefes alıp kenardaki "Acil Durum Fonu"nuzu mu kullanacaksınız?</p>
      
      <p>Finansal özgürlüğe giden yolda atılması gereken ilk adım hisse senedi almak değil, bir Acil Durum Fonu oluşturmaktır.</p>
      
      <h2>Acil Durum Fonu Nedir?</h2>
      <p>Acil durum fonu; öngörülemeyen, zorunlu ve acil harcamalarınızı karşılamak üzere kenara ayırdığınız, kolay ulaşılabilir (likit) nakit paradır.</p>
      
      <p>Bu para; tatil için, yeni bir iPhone almak için veya düğün masrafları için biriktirilen para değildir. Bu para, tabiri caizse, finansal hayatınızın "yangın tüpü"dür. Sadece yangın çıktığında kullanılır. Amacı sizi zengin etmek değil, güvende tutmaktır.</p>
      
      <p><em>Atalarımızın "Ak akçe kara gün içindir" sözünün modern finans dünyasındaki karşılığı tam olarak budur.</em></p>
      
      <h2>Neden Yatırımdan Önce Bu Fonu Oluşturmalısınız?</h2>
      <p>Pek çok yeni yatırımcı, eline geçen ilk toplu parayla hemen borsaya girmek ister. Ancak acil durum fonu olmadan yatırıma başlamak, emniyet kemeri takmadan otobanda hız yapmaya benzer.</p>
      
      <h3>1. Yatırımlarınızı Korumak İçin</h3>
      <p>Diyelim ki tüm paranızla borsada hisse senedi aldınız. Ancak aniden 50.000 TL'lik acil bir sağlık masrafınız çıktı. Cebinizde nakit yok. Mecburen hisselerinizi satmak zorundasınız.</p>
      <p>Peki ya o gün borsa %10 düşüşteyse? Acil nakit ihtiyacı, sizi zararına satış yapmaya zorlar. Acil durum fonu, yatırımlarınıza dokunmadan krizleri atlatmanızı sağlar.</p>
      
      <h3>2. Borç Sarmalından Kaçınmak İçin</h3>
      <p>Beklenmedik bir masraf çıktığında nakdiniz yoksa, genellikle kredi kartlarına başvurursunuz. Yüksek faiz oranları derken, 10 birimlik sorun size 20 birimlik borç yükü olarak geri döner.</p>
      <p><strong>Acil durum fonu, sizi bankalara faiz ödemekten kurtaran en büyük sigortanızdır. Kendi kendinizin bankası olursunuz.</strong></p>
      
      <h3>3. Psikolojik Rahatlık (Huzurlu Uyku)</h3>
      <p>Kenarda 3-6 aylık giderinizi karşılayacak bir paranın durduğunu bilmek, paha biçilemez bir özgüven ve huzur verir. İşyerinde mobbinge mi uğruyorsunuz? "İstifa edersem kiramı nasıl öderim?" korkusu olmadan, daha dik durabilirsiniz.</p>
      
      <h2>Acil Durum Fonu Ne Kadar Olmalı?</h2>
      <p>Genel kabul görmüş finansal kural: <strong>Aylık zorunlu giderlerinizin en az 3 ila 6 katı.</strong></p>
      
      <p>Dikkat edin, "maaşınızın" değil, "giderlerinizin" katı. Örneğin; maaşınız 40.000 TL olabilir ama zorunlu giderleriniz 25.000 TL ise:</p>
      <ul>
        <li><strong>Minimum Hedef:</strong> 25.000 x 3 = 75.000 TL</li>
        <li><strong>İdeal Hedef:</strong> 25.000 x 6 = 150.000 TL</li>
      </ul>
      
      <h3>Hangi Durumda 3 Ay, Hangi Durumda 6 Ay?</h3>
      <p><strong>3 Aylık Fon Yeterli Olabilir Eğer:</strong> Bekarsınız, iş güvenceniz yüksek, bakmakla yükümlü kimse yok, kendi evinizde oturuyorsunuz.</p>
      <p><strong>6 Ay (veya daha fazlası) Gerekir Eğer:</strong> Evlisiniz ve çocuklarınız var, serbest meslek yapıyorsunuz, geliriniz düzensiz, kirada oturuyorsunuz. Risk arttıkça, tampon bölge de kalınlaşmalıdır.</p>
      
      <h2>Bu Parayı Nerede Tutmalısınız?</h2>
      <p>Türkiye gibi yüksek enflasyonun olduğu ülkelerde bu parayı yönetmek strateji gerektirir. Vadesiz hesapta tutarsanız erir, uzun vadeli fona yatırırsanız "acil" durumda nakde çeviremezsiniz.</p>
      
      <p><strong>Çözüm: Likit ve Getirili Araçlar</strong></p>
      <ul>
        <li><strong>Para Piyasası Fonları:</strong> Mevduat faizine yakın getiri, istediğiniz an nakde çevrilebilir.</li>
        <li><strong>Günlük Faiz Veren Mevduat Hesapları:</strong> Vadeniz bozulmadan para çekebildiğiniz hesaplar.</li>
      </ul>
      
      <p><strong>Asla Yapılmaması Gerekenler:</strong> Acil durum fonuyla hisse senedi, kripto para veya uzun vadeli tahvil alınmaz. Çünkü paraya ihtiyacınız olduğu gün, borsanın çakıldığı güne denk gelebilir.</p>
      
      <h2>Acil Durum Fonu Nasıl Kullanılır?</h2>
      <p>Adı üzerinde: <strong>ACİL.</strong> Bu fonu kullanmadan önce kendinize sorun:</p>
      <ul>
        <li>Bu harcama beklenmedik mi?</li>
        <li>Bu harcama zorunlu mu? (Hayatımı veya sağlığımı etkiliyor mu?)</li>
        <li>Bu harcamayı yapmazsam ciddi sonuçları olur mu?</li>
      </ul>
      
      <h3>Doğru Kullanım Örnekleri:</h3>
      <ul>
        <li>İşten çıkarılma durumunda kira ve fatura ödemeleri</li>
        <li>Acil tıbbi müdahaleler veya ilaçlar</li>
        <li>Evin tesisatının patlaması, kombinin bozulması</li>
        <li>Arabanın bozulması (işe arabayla gidiyorsanız)</li>
      </ul>
      
      <h3>Yanlış Kullanım Örnekleri:</h3>
      <ul>
        <li>Arkadaşlarla son dakika tatil planı</li>
        <li>İndirime giren harika bir ayakkabı</li>
        <li>Eski ama çalışan telefonun yenisiyle değiştirilmesi</li>
      </ul>
      
      <h2>Fonu Oluşturmak İçin Stratejiler</h2>
      <p>75.000 TL veya 100.000 TL gibi rakamlar gözünüzü korkutmasın. Kimse bu fonu bir gecede oluşturmaz. Bu bir maratondur.</p>
      
      <ul>
        <li><strong>Küçük Başlayın:</strong> Önce hedefiniz 5.000 TL olsun. Sonra 1 aylık gider, sonra 3 aylık gider.</li>
        <li><strong>Otomatik Katılım:</strong> Maaşınız yattığı gün, otomatik ödeme talimatıyla belirlediğiniz tutarı fon hesabına aktarın.</li>
        <li><strong>Ek Gelirleri Aktarın:</strong> Yıl sonu primi, vergi iadesi, sattığınız ikinci el eşyadan gelen parayı doğrudan bu fona atın.</li>
        <li><strong>Harcamaları Gözden Geçirin:</strong> Netflix'i iptal etmek, dışarıda kahveyi azaltmak ile bu süreci hızlandırabilirsiniz.</li>
      </ul>
      
      <h2>Sonuç: Önce Maskeyi Kendinize Takın</h2>
      <p>Uçaklardaki güvenlik anonsunu hatırlarsınız: "Basınç düşerse, maskeyi önce kendinize, sonra çocuğunuza takın."</p>
      
      <p><strong>Acil durum fonu, sizin oksijen maskenizdir.</strong> Eğer siz finansal olarak nefes alamazsanız, ne ailenize ne de geleceğinize faydanız dokunur. Yatırım dünyasının cazibesine kapılmadan önce, sıkıcı gibi görünen ama hayat kurtaran bu adımı atın.</p>
      
      <p>Banka hesabınızda, kimseye muhtaç olmadan 6 ay yaşayabileceğiniz bir para olduğunu bildiğiniz o gün hissedeceğiniz güç, satın alabileceğiniz en lüks eşyadan daha değerlidir. <strong>O gün geldiğinde, finansal özgürlük yolculuğunuzun en zor kısmını başarmışsınız demektir.</strong></p>
    `,
    category: "Finans",
    author: "Para Yönetimi",
    date: "2026-01-10",
    readTime: "12 dk",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=450&fit=crop",
    featured: true,
    views: 0,
    tags: ["acil durum fonu", "tasarruf", "finansal güvenlik", "birikim"]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function getAllArticles() { return articlesDB; }
function getArticleById(id) { return articlesDB.find(article => article.id === id); }
function getArticleBySlug(slug) { return articlesDB.find(article => article.slug === slug); }
function getFeaturedArticles() { return articlesDB.filter(article => article.featured); }
function getArticlesByCategory(category) {
  if (category === 'Tümü' || !category) return articlesDB;
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
  return articlesDB.filter(article => article.id !== articleId && article.category === currentArticle.category).slice(0, limit);
}
function getRecentArticles(limit = 5) {
  return [...articlesDB].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
}
function getPopularArticles(limit = 5) {
  return [...articlesDB].sort((a, b) => b.views - a.views).slice(0, limit);
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
  module.exports = { articlesDB, getAllArticles, getArticleById, getArticleBySlug, getFeaturedArticles, getArticlesByCategory, getAllCategories, searchArticles, getRelatedArticles, getRecentArticles, getPopularArticles, formatDate, getCategoryCount };
}
