export default function CookieConsent() {
    let self = this;
    self.data = {
        cookie_project_name: 'beinconnect_cookie_consent',
        current_lang: 'tr',
        languages: {
            'tr': {
                consent_modal: {
                    title: 'We use cookies!',
                    description: 'Hello, this website tracks cookies to understand the cookies necessary to make it work properly and how you interact with it. The latter is determined only after approval.',
                    primary_btn: {
                        text: 'ACCEPT ALL'
                    },
                    secondary_btn: {
                        text: 'SETTINGS'
                    }
                },
                settings_modal: {
                    title: "Cookies",
                    description: "I use cookies to provide basic functionality of the website and improve your online experience. You can choose to join/exit at any time for each category. For more details regarding cookies and other sensitive data, please read the full privacy policy.",
                    save_settings_btn: 'Save Settings',
                    accept_all_btn: 'Accept All',
                    reject_all_btn: 'Reject All',
                    blocks: [
                        {
                            title: "Strictly necessary cookies",
                            description: "These cookies are necessary for my website to work properly. Without these cookies the website will not function properly.",
                            value: 'necessary',
                            enabled: true,
                            readonly: true,
                            cookies: [
                                {
                                    name: "cookie1",
                                    enabled: true,
                                    readonly: true,
                                },
                                {
                                    name: "cookie2",
                                    enabled: true,
                                    readonly: true,
                                }
                            ]
                        },
                        {
                            title: "Performance and Analytics cookies",
                            description: "These cookies allow the website to remember choices you have made in the past.",
                            value: 'performance',
                            enabled: false,
                            readonly: false,
                            cookies: [
                                {
                                    name: "cookie3",
                                    enabled: false,
                                    readonly: false,
                                },
                                {
                                    name: "cookie4",
                                    enabled: false,
                                    readonly: false,
                                }
                            ]
                        },
                        {
                            title: "Advertising and Targeting cookies",
                            description: `
                            These cookies collect information about how you use the website, which pages you visit and which links you click. All data is anonymous and cannot be used to identify you
                            `,
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            cookies: [
                                {
                                    name: "cookie5",
                                    enabled: false,
                                    readonly: false
                                },
                                {
                                    name: "cookie6",
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