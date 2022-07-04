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
          HEPSİNİ KABUL ET
        </button>
        <button type="button" class="btn btn--primary" @click="openedModal()">
          AYARLAR
        </button>
      </div>
    </div>
</template>

<script>
export default {
    props : ["visibleConsentModal","visibleModal","cmd","openedModal","acceptAll"]
}
</script>

<style>

</style>