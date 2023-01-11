<template>
  <div class="cookieConsentWrapper">
    <RightConsent :visibleConsentModal="visibleConsentModal" :visibleModal="visibleModal" :cmd="cmd"
      :openedModal="openedModal" :acceptAll="acceptAll" />
    <OptionModal :catItemChecked="catItemChecked" :cmdsetBlock="cmdsetBlock" :visibleModal="visibleModal"
      :cmdset="cmdset" :closeModal="closeModal" :toggleBlock="toggleBlock" :saveSettings="saveSettings"
      :rejectAll="rejectAll" :acceptAll="acceptAll" :openedWrapper="openedWrapper" :catAllChecked="catAllChecked" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
//import {CookieConsent} from "./assets/config"
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
      getLocalStorageDatas: [],
      cookieState: {
        acceptAll: 1,
        rejectAll: 2,
        saveSettings: 3,
        setAgain: 4,
      },
    };
  },
  created() {

    var self = this;

    //if props are present or not
    if (!self.datas) {
      const datas = new CookieConsent();
      self.cmd = datas.data.languages.tr.consent_modal;
      self.cmdset = datas.data.languages.tr.settings_modal;
      self.cookieName = datas.data.cookie_project_name;
      self.getLocalStorageDatas = JSON.parse(localStorage.getItem(self.cookieName))
      self.getLocalStorageDatas ? self.cmdsetBlock = self.getLocalStorageDatas : self.cmdsetBlock = datas.data.languages.tr.settings_modal.blocks;
    } else {
      self.cmd = self.datas.languages.tr.consent_modal;
      self.cmdset = self.datas.languages.tr.settings_modal;
      self.cookieName = self.datas.cookie_project_name;
      self.cmdsetBlock = self.datas.languages.tr.settings_modal.blocks;
    }    

  },
  mounted() {
    let self = this;
    window.addEventListener("load", function (event) {
      //If there is no localstorage, show popup, if there is, read its values
      !self.getLocalStorageDatas ? self.visibleConsentModal = true : self.cookieStateChange(self.cookieState.setAgain);
      const openedCookieBttn = document.querySelector(".openedCookieBttn");
      if (!openedCookieBttn) return
      openedCookieBttn.addEventListener("click", () => self.openedModal());
    });
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
    /*
     * @param {String} val = item cookie
     */
    catItemChecked(val) {
      let [filterVal] = this.cmdsetBlock.filter((x) => x.value === val);
      filterVal.enabled = filterVal.cookies.some(x => x.enabled === true)
    },
    /*
     * makes it all approved
     */
    acceptAll() {
      this.cmdsetBlock.forEach((element) => {
        if (element.readonly) return;
        element.enabled = true;
        element.cookies.map((x) => (x.enabled = true));
      });
      this.storageAdd(this.cmdsetBlock);
    },
    /*
     * makes them all unapproved
     */
    rejectAll() {
      this.cmdsetBlock.forEach((element) => {
        if (element.readonly) return;
        element.enabled = false;
        element.cookies.map((x) => (x.enabled = false));
      });
      this.storageAdd(this.cmdsetBlock);
      this.cookieStateChange(this.cookieState.rejectAll);
    },
    /*
     * saves selections
     */
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
    /*
     * opens modal
     */
    openedModal() {
      this.visibleModal = true;
    },
    /*
     * closes the modal
     */
    closeModal() {
      this.visibleModal = false;
      this.visibleConsentModal = false;
    },
  },
};
</script>