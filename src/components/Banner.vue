<script setup lang="ts">
defineProps<{ partnerCode: string | null }>();
</script>

<template>
  <div v-if="partnerCode" class="partner-banner">
   Partner widget för partner nr: <strong>{{ partnerCode }}</strong>
  </div>
</template>

<style scoped>
.partner-banner {
  text-align: right;
  margin-bottom: 1em;
}
</style>
