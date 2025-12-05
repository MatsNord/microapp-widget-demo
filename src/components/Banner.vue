<script setup lang="ts">
defineProps<{ partnerCode: string | null }>();
</script>

<template>
  <div v-if="partnerCode" class="partner-banner">
    <img :src="`/banners/${partnerCode}.png`" :alt="`Partner Banner PartnerCode: ${partnerCode}`" />
  </div>
</template>

<style scoped>
.partner-banner {
  text-align: center;
  margin-bottom: 1em;
}
</style>
