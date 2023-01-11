export class CookieConsent {
    constructor() {
        let self = this;
        self.data = {
            cookie_project_name: 'tod_cookie_consent',
            current_lang: 'tr',
            languages: {
                'tr': {
                    consent_modal: {
                        title: 'Çerez kullanıyoruz!',
                        description: 'Merhaba, bu web sitesi düzgün çalışmasını sağlamak için gerekli çerezleri ve onunla nasıl etkileşim kurduğunuzu anlamak için çerezleri takip eder.',
                        primary_btn: {
                            text: 'HEPSİNİ KABUL ET'
                        },
                        secondary_btn: {
                            text: 'AYARLAR'
                        }
                    },
                    settings_modal: {
                        title: "Çerezler",
                        description: "Web sitesinin temel işlevlerini sağlamak ve çevrimiçi deneyiminizi geliştirmek için tanımlama bilgileri kullanıyorum. Her kategori için istediğiniz zaman katılmayı/çıkma yapmayı seçebilirsiniz. Çerezler ve diğer hassas verilerle ilgili daha fazla ayrıntı için lütfen tam gizlilik politikasını okuyun.",
                        save_settings_btn: 'Ayarları kaydet',
                        accept_all_btn: 'Hepsini kabul et',
                        reject_all_btn: 'Hepsini reddet',
                        blocks: [
                            {
                                title: "Kesinlikle gerekli çerezler",
                                description: "Bu çerezler web sitemin düzgün çalışması için gereklidir. Bu çerezler olmadan web sitesi düzgün çalışmayacaktır.",
                                value: 'necessary',
                                enabled: true,
                                readonly: true,
                                cookies: [
                                    {
                                        name: "ai_session",
                                        description : "Sayfa yükleme sürelerini hızlandırır ve geldiği IP adresine bağlı olarak bir tarayıcıya uygulanabilecek tüm güvenlik kısıtlamalarını geçersiz kılar.",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "AccountNo",
                                        description : "Site kullanıcı kimliği",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "Gapl",
                                        description : "Bazı Kullanıcı bilgilerini tutar (Member Source, Customer Segment)",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".lctng",
                                        description : "GeoLocation Id tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "__RequestVerificationToken",
                                        description : "VerificationToken bilgisini tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".dzdy",
                                        description : "Login olan kullanıcının içeriklere erişimi için gereklidir",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".tkn",
                                        description : "Maç Başlıyor farklı ortamlarda login için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".pvrfy",
                                        description : "PhoneVerify için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".phne",
                                        description : "PhoneVerify için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".scard",
                                        description : "Sepete ürün ekleme için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".cpck",
                                        description : "Sepete ürün ekleme için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".pymnt",
                                        description : "Sepetten kredi kartı sayfasına geçiş için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".cckk",
                                        description : "Kredi kartı 3d işlemleri için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".vchrcode",
                                        description : "promosyon işlemleri için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".vchrpck",
                                        description : "Kupon kodu sayfasında gösterilmeyen 2.paket",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".nextact",
                                        description : "Sayfalar arası akışta açılacak layoutlar için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".cpnlu",
                                        description : "Sepete ürün ekleme için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".vrfycd",
                                        description : "verify işlemleri için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".mtchstrtdsbld",
                                        description : "Match Start Routing için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".wlcmpgvstd",
                                        description : "Welcome sayfasının ziyaret edildiği bilgisi için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".isFreeTrialPurchase",
                                        description : "Free Tial Baseket Ekranı gelmeden satın alma işlemi için gerekli",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".childMode",
                                        description : "Çocuk sayfası true or false",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".childModeSttngs",
                                        description : "Çocuk sayfası ayarları bilgilerini tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".success3d",
                                        description : "3d ödeme ile ilgili teknik bilgileri tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".sntf",
                                        description : "TeklifUrl İle Abone Olma ile ilgili bilgileri tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".freeTrialNotAvailable",
                                        description : "ücretsiz deneme ile ilgili bilgileri tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".pymntresultmsg",
                                        description : "Ödeme sonucu mesajı bilgilerini tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".pymntresultobj",
                                        description : "Ödeme sonucu bilgilerini tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: ".cbot",
                                        description : "ChatBotSessionId bilgilerini tutar",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "fanCatalogTeamSelect",
                                        description : "Takım seçme ekranında kullanılacak katalog",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "skipBasket",
                                        description : "Sepet adımını atlamak için kullanılacak",
                                        enabled: true,
                                        readonly: true,
                                    },
                                    {
                                        name: "q_a_c",
                                        description : "Captchayi disable etmek için key",
                                        enabled: true,
                                        readonly: true,
                                    }
                                ]
                            },
                            {
                                title: "Performans ve Analiz çerezleri",
                                description: "Bu çerezler, web sitesinin geçmişte yaptığınız seçimleri hatırlamasını sağlar.",
                                value: 'performance',
                                enabled: true,
                                readonly: false,
                                cookies: [
                                    {
                                        name: ".analyticsId",
                                        description : "Kullanıcı etkileşimlerini izleyip rapor oluşturmayı sağlayan cookie",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "_gid",
                                        description : "Ziyaretçinin web sitesini nasıl kullandığına ilişkin istatistiksel veriler oluşturmak için kullanılan özelleştirilmiş bir kimliği kaydeder",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "ai_user",
                                        description : "İstatistiksel kullanım ve telemetri bilgilerini toplamak için Microsoft Application Insights yazılımı tarafından kullanılır",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "_clsk",
                                        description : "Bu tanımlama bilgisi, ziyaretçilerin bir web sitesini nasıl kullandığına ilişkin bilgileri depolamak ve web sitesinin nasıl çalıştığına ilişkin bir analiz raporu oluşturmaya yardımcı olmak için Microsoft Clarity tarafından yüklenir",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "_ga",
                                        description : "Google Ads platformunun kullandığı kullanıcı takip çerezidir",
                                        enabled: true,
                                        readonly: false,
                                    },
                                ]
                            },
                            {
                                title: "Reklam ve Hedefleme çerezleri",
                                description: `
                            Bu tanımlama bilgileri, web sitesini nasıl kullandığınız, hangi sayfaları ziyaret ettiğiniz ve hangi bağlantılara tıkladığınız hakkında bilgi toplar. Tüm veriler anonimdir ve sizi tanımlamak için kullanılamaz
                            `,
                                value: 'targeting',
                                enabled: true,
                                readonly: false,
                                cookies: [
                                    {
                                        name: "_gcl_au",
                                        description : "Bu çerez, Google Analytics tarafından web sitesiyle kullanıcı etkileşimini anlamak için kullanılır",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "_fbp",
                                        description : "Web sitelerindeki ziyaretleri depolamak ve izlemek için kullanılır",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "_clck",
                                        description : "Microsoft Clarity tarafından kullanılır. Tanımlama bilgisi, katıştırılmış Microsoft Clarity komut dosyaları tarafından ayarlanır. Bu çerezin amacı, ısı haritası ve oturum kaydı içindir",
                                        enabled: true,
                                        readonly: false,
                                    },
                                    {
                                        name: "cto_bundle",
                                        description : "Daha alakalı reklamlar görüntülemek için ziyaretçi davranışını toplar",
                                        enabled: true,
                                        readonly: false,
                                    },
                                ]
                            }
                        ]
                    }
                }
            }
        };
    }
}