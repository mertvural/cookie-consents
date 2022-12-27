<template>
  <div class="cookieConsentModalWrapper" :class="visibleModal ? 'opened' : ''">
    <div class="modal-wrapper">
      <div class="settings_modal">
        <header class="settings_modal__header">
          {{ cmdset.title }}
          <button type="button" class="settings_modal__close" @click="closeModal()"></button>
        </header>
        <main class="settings_modal__main">
          {{ cmdset.description }}

          <ul class="accordion-block">
            <li v-for="(item, index) in cmdsetBlock" :key="index">
              <div class="accordion-block__title">
                <span :class="toggleBlock === index ? 'active' : ''" class="accordion-block__title-btn"
                  @click="openedWrapper(index)">
                  {{ item.title }}
                </span>

                <div class="input_wrapper">
                  <input type="checkbox" class="switch" :value="item.value" v-model="item.enabled"
                    @change="catAllChecked(item.value, item.enabled)" :disabled="item.readonly" />
                </div>
              </div>

              <div class="accordion-block__wrapper" v-show="toggleBlock === index">
                <p>
                  {{ item.description }}
                </p>

                <div class="cookie" v-for="(item2, index) in item.cookies" :key="index">
                  <span class="cookie__name" :class="item2.enabled ? 'active' : ''">
                    {{ item2.name }}
                  </span>
                  <div class="input_wrapper sm">
                    <input type="checkbox" class="switch" :value="item2.name" :disabled="item2.readonly"
                      v-model="item2.enabled" @change="catItemChecked(item.value)" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <footer class="settings_modal__footer">
          <div class="settings_modal__footer-buttons">
            <button type="button" class="btn btn--secondary" @click="acceptAll()">
              {{ cmdset.accept_all_btn }}
            </button>
            <button type="button" class="btn btn--primary" @click="rejectAll()">
              {{ cmdset.reject_all_btn }}
            </button>
            <button type="button" class="btn btn--secondary btn--last" @click="saveSettings()">
              {{ cmdset.save_settings_btn }}
            </button>
          </div>
        </footer>
      </div>
    </div>
    <div class="modal-bg"></div>
  </div>
</template>

<script>
export default {
  props: ["visibleModal", "cmdset", "closeModal", "toggleBlock", "saveSettings", "rejectAll", "acceptAll", "openedWrapper", "catAllChecked", "cmdsetBlock", "catItemChecked"]
}
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
</style>