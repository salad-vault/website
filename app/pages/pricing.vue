<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Pricing - SaladVault',
  meta: [
    { name: 'description', content: 'Simple pricing. Free forever for local use. Pro plans for cloud sync and advanced features.' },
  ],
})

const faqItems = computed(() => [
  { q: t('pricing.faq1_q'), a: t('pricing.faq1_a') },
  { q: t('pricing.faq2_q'), a: t('pricing.faq2_a') },
  { q: t('pricing.faq3_q'), a: t('pricing.faq3_a') },
  { q: t('pricing.faq4_q'), a: t('pricing.faq4_a') },
  { q: t('pricing.faq5_q'), a: t('pricing.faq5_a') },
  { q: t('pricing.faq6_q'), a: t('pricing.faq6_a') },
])

const openFaq = ref<number | null>(null)

function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('pricing.hero_title')" tag="h1" :speed="40" class="hero-title" />
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">{{ t('pricing.subtitle') }}</p>
      </div>
    </section>

    <!-- Pricing Grid -->
    <section class="section">
      <div class="container">
        <div class="pricing-grid">
          <UiPricingCard
            :name="t('pricing.plan_jardinier')"
            :price="t('pricing.plan_jardinier_price')"
            :period="t('pricing.plan_jardinier_period')"
            :subtitle="t('pricing.plan_jardinier_subtitle')"
            :features="[
              t('pricing.feat_unlimited_local'),
              t('pricing.feat_xchacha'),
              t('pricing.feat_duallock'),
              t('pricing.feat_passgen'),
              t('pricing.feat_import_export'),
              t('pricing.feat_recovery'),
            ]"
            :button-text="t('pricing.btn_download')"
          />
          <UiPricingCard
            :name="t('pricing.plan_maraicher')"
            :price="t('pricing.plan_maraicher_price')"
            :period="t('pricing.plan_maraicher_period')"
            :subtitle="t('pricing.plan_maraicher_subtitle')"
            :features="[
              t('pricing.feat_cloud_sync'),
              t('pricing.feat_auto_backup'),
              t('pricing.feat_shared_vaults'),
              t('pricing.feat_priority_support'),
            ]"
            :badge="t('pricing.recommended')"
            :highlighted="true"
            :button-text="t('pricing.coming_soon')"
            :button-disabled="true"
          />
          <UiPricingCard
            :name="t('pricing.plan_familial')"
            :price="t('pricing.plan_familial_price')"
            :period="t('pricing.plan_familial_period')"
            :subtitle="t('pricing.plan_familial_subtitle')"
            :features="[
              t('pricing.feat_6_users'),
              t('pricing.feat_family_sharing'),
              t('pricing.feat_unlimited_devices'),
            ]"
            :button-text="t('pricing.coming_soon')"
            :button-disabled="true"
          />
          <UiPricingCard
            :name="t('pricing.plan_enterprise')"
            :price="t('pricing.plan_enterprise_price')"
            :subtitle="t('pricing.plan_enterprise_subtitle')"
            :features="[
              t('pricing.feat_unlimited_users'),
              t('pricing.feat_sso'),
              t('pricing.feat_selfhosted'),
            ]"
            :button-text="t('pricing.coming_soon')"
            :button-disabled="true"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('pricing.faq_title') }}</h2>
        <div class="faq-list">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="faq-item"
            :class="{ 'faq-item--open': openFaq === i }"
            data-aos="fade-up"
          >
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ item.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-show="openFaq === i" class="faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.hero {
  padding: 8rem 0 3rem;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Pricing grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: start;
}

/* FAQ */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  overflow: hidden;
  transition: border-color 300ms;
}

.faq-item:hover,
.faq-item--open {
  border-color: #238636;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
}

.faq-toggle {
  color: #238636;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
}

.faq-answer p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-title { font-size: 1.75rem; }
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  .section { padding: 3rem 0; }
}
</style>
