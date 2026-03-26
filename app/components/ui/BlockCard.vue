<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  aos?: string
  aosDelay?: string
}>(), {
  aos: 'fade-up',
  aosDelay: '0',
})
</script>

<template>
  <div
    class="block-card"
    :data-aos="aos"
    :data-aos-delay="aosDelay"
  >
    <h3 v-if="title" class="block-card-title">{{ title }}</h3>
    <p v-if="description" class="block-card-desc">{{ description }}</p>
    <slot />
  </div>
</template>

<style scoped>
.block-card {
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 300ms ease;
}

.block-card:hover {
  border-color: #238636;
}

.block-card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.block-card-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}
</style>
