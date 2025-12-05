<!-- widget/src/App.vue -->
<script setup lang="ts">
import AppShell from '@microapp/App.vue';
import WidgetSummary from './components/WidgetSummary.vue';
import Banner from './components/Banner.vue';
import { usePartnerCode } from './composables/usePartnerCode';
import { onMounted } from 'vue';

const { partnerCode } = usePartnerCode();

// Fejka event om partnerCode saknas (endast för demo)
onMounted(() => {
  if (!partnerCode.value) {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: { partnerCode: 'demo123' }
      })
    );
  }
});
</script>

<template>
  <Banner :partner-code="partnerCode" />
  <AppShell>
    <template #header>
      <div>Partner Widget</div>
    </template>
    <WidgetSummary />
    <template #footer>
      <div>Widget Footer</div>
    </template>
  </AppShell>
</template>