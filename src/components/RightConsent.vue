<template>
  <div class="consent_modal" v-show="visibleConsentModal && !visibleModal">
      <h2>
        {{ cmd.title }}
      </h2>
      <p>
        {{ cmd.description }}
      </p>
      <div class="consent_modal__buttons">
        <button type="button" class="btn btn--secondary" @click="acceptAll()">
          {{cmd.primary_btn.text}}
        </button>
        <button type="button" class="btn btn--primary" @click="openedModal()">
           {{cmd.secondary_btn.text}}
        </button>
      </div>
    </div>
</template>

<script>
export default {
    props : ["visibleConsentModal","visibleModal","cmd","openedModal","acceptAll"]
}
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
</style>