<script setup lang="ts">
defineProps<{
  title: string
  description: string
  step?: string
}>()
</script>

<template>
  <div class="feature-row" data-aos="fade-up">
    <span class="feature-chevron">{{ step || '>' }}</span>
    <div>
      <h4 class="feature-row-title">{{ title }}</h4>
      <p class="feature-row-desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.feature-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.feature-row:last-child {
  border-bottom: none;
}

.feature-chevron {
  color: #238636;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.feature-row-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.feature-row-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}
</style>
