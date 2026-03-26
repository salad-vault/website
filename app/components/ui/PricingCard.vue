<script setup lang="ts">
defineProps<{
  name: string
  price: string
  period?: string
  subtitle: string
  features: string[]
  highlighted?: boolean
  badge?: string
  buttonText: string
  buttonDisabled?: boolean
  buttonHref?: string
}>()
</script>

<template>
  <div
    class="pricing-card"
    :class="{ 'pricing-card--highlighted': highlighted }"
    data-aos="fade-up"
  >
    <span v-if="badge" class="pricing-badge">{{ badge }}</span>
    <div class="pricing-header">
      <h3 class="pricing-name">{{ name }}</h3>
      <div class="pricing-price">
        <span class="pricing-amount">{{ price }}</span>
        <span v-if="period" class="pricing-period">{{ period }}</span>
      </div>
      <p class="pricing-subtitle">{{ subtitle }}</p>
    </div>
    <ul class="pricing-features">
      <li v-for="feat in features" :key="feat" class="pricing-feature">
        <span class="pricing-check">+</span>
        <span>{{ feat }}</span>
      </li>
    </ul>
    <a
      v-if="buttonHref"
      :href="buttonHref"
      target="_blank"
      rel="noopener noreferrer"
      class="pricing-btn pricing-btn--link"
    >
      {{ buttonText }}
    </a>
    <button
      v-else
      class="pricing-btn"
      :class="{ 'pricing-btn--disabled': buttonDisabled }"
      :disabled="buttonDisabled"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.pricing-card {
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: border-color 300ms ease;
}

.pricing-card:hover {
  border-color: #238636;
}

.pricing-card--highlighted {
  border-color: #238636;
}

.pricing-badge {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #238636;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
}

.pricing-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.pricing-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pricing-price {
  margin-bottom: 0.5rem;
}

.pricing-amount {
  font-size: 2rem;
  font-weight: 700;
}

.pricing-period {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 0.25rem;
}

.pricing-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.pricing-features {
  list-style: none;
  flex: 1;
  margin-bottom: 1.5rem;
}

.pricing-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.pricing-check {
  color: #238636;
  font-weight: 700;
  flex-shrink: 0;
}

.pricing-btn {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #238636;
  background: transparent;
  color: #238636;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms, color 200ms;
}

.pricing-btn:hover:not(:disabled) {
  background-color: #238636;
  color: #ffffff;
}

.pricing-btn--disabled {
  opacity: 0.4;
  cursor: default;
}

.pricing-btn--link {
  display: block;
  text-align: center;
  text-decoration: none;
}
</style>
