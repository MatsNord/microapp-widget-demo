<template>
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

<script setup lang="ts">
import AppShell from '@microapp/App.vue';
import WidgetSummary from './components/WidgetSummary.vue';
</script>