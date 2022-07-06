<template>
  <div class="cookieConsentWrapper">
    <RightConsent
      :visibleConsentModal="visibleConsentModal"
      :visibleModal="visibleModal"
      :cmd="cmd"
      :openedModal="openedModal"
      :acceptAll="acceptAll"
    />
    <OptionModal
      :visibleModal="visibleModal"
      :cmdset="cmdset"
      :closeModal="closeModal"
      :toggleBlock="toggleBlock"
      :saveSettings="saveSettings"
      :rejectAll="rejectAll"
      :acceptAll="acceptAll"
      :openedWrapper="openedWrapper"
      :catAllChecked="catAllChecked"
    />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import CookieConsent from "../src/assets/config";
import RightConsent from "./components/RightConsent.vue";
import OptionModal from "./components/OptionModal.vue";
export default {
  components: {
    RightConsent,
    OptionModal,
  },
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
      this.closeModal();
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