# cookie consent vue+vite

Allows or deletes cookies. There are config files to change the design and add the relevant cookies.
A lightweight JavaScript plugin to handle cookie consent.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## NPM Settings
```sh
npm i cookie-consent-mv
```

```sh
import {App} from 'cookie-consent-mv'
```

```sh
<template>
  <App :datas = "datas" />
</template>
```
### Required for datas config settings. It is also a props.
You can change the fields you see. is the config file
An example setup for datas props;
```sh
datas: {
        cookie_project_name: "cookie_consent",
        current_lang: "tr",
        languages: {
          tr: {
            consent_modal: {
              title: "asdsad kullanıyoruz!",
              description:
                "Merhaba, bu web sitesi düzgün çalışmasını sağlamak için gerekli çerezleri ve onunla nasıl etkileşim kurduğunuzu anlamak için çerezleri takip eder. İkincisi ancak onay alındıktan sonra belirlenir.",
              primary_btn: {
                text: "Hepsini kabul et",
              },
              secondary_btn: {
                text: "Hepsini reddet",
              },
            },
            settings_modal: {
              title: "Çerezler",
              description:
                "Web sitesinin temel işlevlerini sağlamak ve çevrimiçi deneyiminizi geliştirmek için tanımlama bilgileri kullanıyorum. Her kategori için istediğiniz zaman katılmayı/çıkma yapmayı seçebilirsiniz. Çerezler ve diğer hassas verilerle ilgili daha fazla ayrıntı için lütfen tam gizlilik politikasını okuyun.",
              save_settings_btn: "Ayarları kaydet",
              accept_all_btn: "Hepsini kabul et",
              reject_all_btn: "Hepsini reddet",
              blocks: [
                {
                  title: "Kesinlikle gerekli çerezler",
                  description:
                    "Bu çerezler web sitemin düzgün çalışması için gereklidir. Bu çerezler olmadan web sitesi düzgün çalışmayacaktır.",
                  value: "necessary",
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
                    },
                  ],
                },
                {
                  title: "Performans ve Analiz çerezleri",
                  description:
                    "Bu çerezler, web sitesinin geçmişte yaptığınız seçimleri hatırlamasını sağlar.",
                  value: "performance",
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
                    },
                  ],
                },
                {
                  title: "Reklam ve Hedefleme çerezleri",
                  description: `
                            Bu tanımlama bilgileri, web sitesini nasıl kullandığınız, hangi sayfaları ziyaret ettiğiniz ve hangi bağlantılara tıkladığınız hakkında bilgi toplar. Tüm veriler anonimdir ve sizi tanımlamak için kullanılamaz
                            `,
                  value: "targeting",
                  enabled: false,
                  readonly: false,
                  cookies: [
                    {
                      name: "cerez5",
                      enabled: false,
                      readonly: false,
                    },
                    {
                      name: "cerez6",
                      enabled: false,
                      readonly: false,
                    },
                  ],
                },
              ],
            },
          },
        },
      }
```

# CSS 

```sh
@import url(../node_modules/cookie-consent-mv/dist/style.css);

Note : this is a required css. cannot be changed
```

## Customize CSS
```sh
:root {
  --font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
  --modal-font-size : 16px;
  --consent-modal-bg : #fff;
  --settings-modal-bg : #fff;
  --consent-modal-font-size : 14px;
  --consent-modal-width : 400px;
  --text-title-description-color: #2d4156;
  --btn-bg-secondary: #a71d8e;
  --btn-bg-secondary-hover: #bb249f;
  --btn-text-secondary-color: #fff;
  --btn-bg-primary: #333232;
  --btn-bg-primary-hover: #333232;
  --btn-text-primary-color: #333232;
  --overlay-bg: rgba(4, 6, 8, 0.8);
  --cookie-category-block: #f0f4f7;
  --cookie-category-block-bg-hover: #e9eff4;
  --cookie-category-block-text : #2d4156;
  --switch-bg: #333232;
  --switch-bg-active: #a71d8e;
  --bg-disable: #d4dee2;
  --bg-close : #f0f4f7;
  --bg-close-hover : #ddd;
}

Note : You can make edits in this css
```
![1](https://user-images.githubusercontent.com/10594349/177137779-91e0da0e-4391-435a-986e-e8caa9a69117.png)
![3](https://user-images.githubusercontent.com/10594349/177137786-b984fd25-c331-4eac-99eb-824eb391ef2a.png)
![2](https://user-images.githubusercontent.com/10594349/177137789-dd7fc0f3-9e6e-473a-a469-451dcefde952.png)

