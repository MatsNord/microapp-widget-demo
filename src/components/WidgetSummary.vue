// widget/src/WidgetSummary.vue
<template>
  <div>
    <WidgetSummaryHeader />
    <div v-if="isLoading">Loading...</div>
    <ul v-else>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
    <el-button type="primary" @click="reload">Reload</el-button>
  </div>
</template>

<script setup lang="ts">
import WidgetSummaryHeader from './WidgetSummaryHeader.vue';
import { useSummary } from '@microapp/composables/useSummary';
const { items, isLoading, reload } = useSummary();
</script>