<template>
  <div class="cookieConsentWrapper">
    <div
      class="consent_modal"
      v-show="visibleConsentModal && !visibleModal"
    >
      <h2>
        {{ cmd.title }}
      </h2>
      <p>
        {{ cmd.description }}
        <button
          type="button"
          class="consent_modal__btn-link"
          @click="openedModal()"
        >
          Seçmeme izin ver
        </button>
      </p>
      <div class="consent_modal__buttons">
        <button type="button" class="btn btn--secondary" @click="acceptAll()">
          Hepsini kabul et
        </button>
        <button type="button" class="btn btn--primary" @click="rejectAll()">
          Hepsini reddet
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
                    <svg
                      class="is_checked"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 426.67 426.67"
                    >
                      <path
                        d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z"
                      ></path>
                    </svg>
                    <svg
                      class="is_unchecked"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 212.982 212.982"
                    >
                      <path
                        d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
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
                      <svg
                        class="is_checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 426.67 426.67"
                      >
                        <path
                          d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z"
                        ></path>
                      </svg>
                      <svg
                        class="is_unchecked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 212.982 212.982"
                      >
                        <path
                          d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
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
                class="btn btn--primary btn--last"
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

export default {
  data() {
    return {
      visibleConsentModal: false,
      visibleModal: false,
      cmd: null,
      cmdset: null,
      cmdsetBlock: null,
      toggleBlock: false,
      cookieName: "cookieConsent",
      cookieState: {
        acceptAll: 1,
        rejectAll: 2,
        saveSettings: 3,
        setAgain: 4,
      },
    };
  },
  created() {
    const datas = new CookieConsent();
    this.cmd = datas.data.languages.tr.consent_modal;
    this.cmdset = datas.data.languages.tr.settings_modal;
    this.cookieName = datas.data.cookie_project_name;
    this.cmdsetBlock = datas.data.languages.tr.settings_modal.blocks;
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

<style lang="scss" scoped>
@import "./assets/main.scss";
</style>