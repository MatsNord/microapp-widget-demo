<script setup lang="ts">
import { useSummary } from '@microapp/composables/useSummary'
import WidgetSummaryHeader from './WidgetSummaryHeader.vue'
import { usePartnerCode } from '../composables/usePartnerCode'
import PartnerBanner from './Banner.vue'


const { items, isLoading, reload } = useSummary()
const { partnerCode } = usePartnerCode()
</script>

<template>
  <div class="widget-summary">
    <PartnerBanner :partner-code="partnerCode" />
    <WidgetSummaryHeader />

    <section v-if="isLoading">
      Laddar data från microapp...
    </section>

    <section v-else>
      <ul class="widget-summary__list">
        <li
          v-for="item in items"
          :key="item.id"
          class="widget-summary__item"
        >
          <!-- Egen layout, helt frikopplad från microappens HTML -->
          <strong>{{ item.title }}</strong>
        </li>
      </ul>

      <el-button type="primary" @click="reload">
        Ladda om (widget)
      </el-button>
    </section>
  </div>
</template>

<style scoped>
.widget-summary {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  background: #fafafa;
}

.widget-summary__list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.widget-summary__item + .widget-summary__item {
  margin-top: 0.5rem;
}
</style>
