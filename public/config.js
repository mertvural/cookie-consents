var CookieConsent = function () {
    let self = this;
    self.data = {
        cookie_project_name: 'beinconnect_cookie_consent',
        current_lang: 'tr',
        languages: {
            'tr': {
                consent_modal: {
                    title: 'Çerez kullanıyoruz!',
                    description: 'Merhaba, bu web sitesi düzgün çalışmasını sağlamak için gerekli çerezleri ve onunla nasıl etkileşim kurduğunuzu anlamak için çerezleri takip eder. İkincisi ancak onay alındıktan sonra belirlenir.',
                    primary_btn: {
                        text: 'Hepsini kabul et'
                    },
                    secondary_btn: {
                        text: 'Hepsini reddet'
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
                                    name: "cerez1",
                                    enabled: true,
                                    readonly: true,
                                },
                                {
                                    name: "cerez2",
                                    enabled: true,
                                    readonly: true,
                                }
                            ]
                        },
                        {
                            title: "Performans ve Analiz çerezleri",
                            description: "Bu çerezler, web sitesinin geçmişte yaptığınız seçimleri hatırlamasını sağlar.",
                            value: 'performance',
                            enabled: false,
                            readonly: false,
                            cookies: [
                                {
                                    name: "cerez3",
                                    enabled: false,
                                    readonly: false,
                                },
                                {
                                    name: "cerez4",
                                    enabled: false,
                                    readonly: false,
                                }
                            ]
                        },
                        {
                            title: "Reklam ve Hedefleme çerezleri",
                            description: `
                            Bu tanımlama bilgileri, web sitesini nasıl kullandığınız, hangi sayfaları ziyaret ettiğiniz ve hangi bağlantılara tıkladığınız hakkında bilgi toplar. Tüm veriler anonimdir ve sizi tanımlamak için kullanılamaz
                            `,
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            cookies: [
                                {
                                    name: "cerez5",
                                    enabled: false,
                                    readonly: false
                                },
                                {
                                    name: "cerez6",
                                    enabled: false,
                                    readonly: false
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}