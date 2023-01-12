# cookie consent vue+vite

Cookie Consent for Vue JS (Version 3 Compatible)

Allows or deletes cookies. There are config files to change the design and add the relevant cookies.
A lightweight JavaScript plugin to handle cookie consent.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

Seee [Vite Configuration Reference](https://vitejs.dev/config/).

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
        cookie_project_name: 'cookie_consent',
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

