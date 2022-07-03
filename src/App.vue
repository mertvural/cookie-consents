<template>
  <div class="cookieConsentWrapper">
    <div class="consent_modal" v-show="visibleConsentModal && !visibleModal">
      <h2>
        {{ cmd.title }}
      </h2>
      <p>
        {{ cmd.description }}
      </p>
      <div class="consent_modal__buttons">
        <button type="button" class="btn btn--secondary" @click="acceptAll()">
          HEPSİNİ KABUL ET
        </button>
        <button type="button" class="btn btn--primary" @click="openedModal()">
          AYARLAR
        </button>
      </div>
    </div>
    <div
      class="cookieConsentModalWrapper"
      :class="visibleModal ? 'opened' : ''"
    >
      <div class="modal-wrapper">
        <div class="settings_modal">
          <header class="settings_modal__header">
            {{ cmdset.title }}
            <button
              type="button"
              class="settings_modal__close"
              @click="closeModal()"
            ></button>
          </header>
          <main class="settings_modal__main">
            {{ cmdset.description }}

            <ul class="accordion-block">
              <li v-for="(item, index) in cmdset.blocks" :key="index">
                <div class="accordion-block__title">
                  <span
                    :class="toggleBlock === index ? 'active' : ''"
                    class="accordion-block__title-btn"
                    @click="openedWrapper(index)"
                  >
                    {{ item.title }}
                  </span>

                  <div class="input_wrapper">
                    <input
                      type="checkbox"
                      class="switch"
                      :value="item.value"
                      v-model="item.enabled"
                      @change="catAllChecked(item.value, item.enabled)"
                      :checked="item.cookies.some((x) => x.enabled === true)"
                      :disabled="item.readonly"
                    />
                  </div>
                </div>

                <div
                  class="accordion-block__wrapper"
                  v-show="toggleBlock === index"
                >
                  <p>
                    {{ item.description }}
                  </p>

                  <div
                    class="cookie"
                    v-for="(item, index) in item.cookies"
                    :key="index"
                  >
                    <span
                      class="cookie__name"
                      :class="item.enabled ? 'active' : ''"
                    >
                      {{ item.name }}
                    </span>
                    <div class="input_wrapper sm">
                      <input
                        type="checkbox"
                        class="switch"
                        :value="item.name"
                        :disabled="item.readonly"
                        v-model="item.enabled"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </main>
          <footer class="settings_modal__footer">
            <div class="settings_modal__footer-buttons">
              <button
                type="button"
                class="btn btn--secondary"
                @click="acceptAll()"
              >
                Hepsini kabul et
              </button>
              <button
                type="button"
                class="btn btn--primary"
                @click="rejectAll()"
              >
                Hepsini reddet
              </button>
              <button
                type="button"
                class="btn btn--secondary btn--last"
                @click="saveSettings()"
              >
                Ayarları kaydet
              </button>
            </div>
          </footer>
        </div>
      </div>
      <div class="modal-bg"></div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import CookieConsent from "../src/assets/config";
export default {
  props: ["datas"],
  data() {
    return {
      visibleConsentModal: false,
      visibleModal: false,
      cmd: null,
      cmdset: null,
      cmdsetBlock: null,
      toggleBlock: false,
      cookieName: null,
      cookieState: {
        acceptAll: 1,
        rejectAll: 2,
        saveSettings: 3,
        setAgain: 4,
      },
    };
  },
  created() {
    if (!this.datas) {
      const datas = new CookieConsent();
      this.cmd = datas.data.languages.tr.consent_modal;
      this.cmdset = datas.data.languages.tr.settings_modal;
      this.cookieName = datas.data.cookie_project_name;
      this.cmdsetBlock = datas.data.languages.tr.settings_modal.blocks;
    } else {
      this.cmd = this.datas.languages.tr.consent_modal;
      this.cmdset = this.datas.languages.tr.settings_modal;
      this.cookieName = this.datas.cookie_project_name;
      this.cmdsetBlock = this.datas.languages.tr.settings_modal.blocks;
    }

    !localStorage.getItem(this.cookieName)
      ? (this.visibleConsentModal = true)
      : this.cookieStateChange(this.cookieState.setAgain);
  },

  methods: {
    /*
     * @param {Number} index - index of the number
     */
    openedWrapper(ths) {
      if (this.toggleBlock === ths) {
        this.toggleBlock = false;
        return;
      }
      this.toggleBlock = ths;
    },

    /*
     * @param {String, Boolean} val = category cookie, enabled = active passive checkbox
     */
    catAllChecked(val, enabled) {
      let [filterVal] = this.cmdsetBlock.filter((x) => x.value === val);
      enabled
        ? filterVal.cookies.map((x) => (x.enabled = true))
        : filterVal.cookies.map((x) => (x.enabled = false));
    },

    acceptAll() {
      this.cmdsetBlock.forEach((element) => {
        if (element.readonly) return;
        element.cookies.map((x) => (x.enabled = true));
      });
      this.storageAdd(this.cmdsetBlock);
    },

    rejectAll() {
      this.cmdsetBlock.forEach((element) => {
        if (element.readonly) return;
        element.cookies.map((x) => (x.enabled = false));
      });
      this.storageAdd(this.cmdsetBlock);
      this.cookieStateChange(this.cookieState.rejectAll);
    },

    saveSettings() {
      this.storageAdd(this.cmdsetBlock);
      this.cookieStateChange(this.cookieState.saveSettings);
    },

    /*
     * @param {String} cmdset = selected situations
     */
    storageAdd(cmdset) {
      localStorage.setItem(this.cookieName, JSON.stringify(cmdset));
      this.visibleConsentModal = false;
      this.visibleModal = false;
    },

    /*
     * @param {Number} state = events that will happen
     */
    cookieStateChange(state) {
      switch (state) {
        case 1:
          break;
        case 2:
          this.cmdsetBlock.forEach((element) => {
            if (element.readonly) return;
            element.cookies.map((x) => Cookies.remove(x.name, { path: "" }));
          });
          break;
        case 3:
          this.cmdsetBlock.forEach((element) => {
            if (element.readonly) return;
            element.cookies.map((x) => {
              if (x.enabled === false) {
                Cookies.remove(x.name, { path: "" });
              }
            });
          });
          break;

        case 4:
          let getLocalStorageDatas = JSON.parse(
            localStorage.getItem(this.cookieName)
          );
          getLocalStorageDatas.forEach((element) => {
            if (element.readonly) return;
            element.cookies.map((x) => {
              if (x.enabled === false) {
                Cookies.remove(x.name, { path: "" });
              }
            });
          });

          break;

        default:
          break;
      }
    },

    openedModal() {
      this.visibleModal = true;
    },

    closeModal() {
      this.visibleModal = false;
      this.visibleConsentModal = false;
    },
  },
};
</script>

<style>
@import "./assets/config.css";
</style>

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>