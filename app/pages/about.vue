<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'About - SaladVault',
  meta: [
    { name: 'description', content: 'Why SaladVault exists. The problems with traditional password managers and how Dual-Lock solves them.' },
  ],
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('about.hero_title')" tag="h1" :speed="40" class="hero-title" />
      </div>
    </section>

    <!-- Pain Points -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('about.pain_title') }}</h2>
        <div class="pain-grid">
          <UiBlockCard :title="t('about.pain1_title')" :description="t('about.pain1_desc')" aos-delay="0" />
          <UiBlockCard :title="t('about.pain2_title')" :description="t('about.pain2_desc')" aos-delay="100" />
          <UiBlockCard :title="t('about.pain3_title')" :description="t('about.pain3_desc')" aos-delay="200" />
        </div>
      </div>
    </section>

    <!-- VS Comparison -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('about.philosophy_title') }}</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">{{ t('about.philosophy_subtitle') }}</p>
        <div class="vs-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="vs-col vs-danger">
            <h3 class="vs-header">
              <span class="vs-icon">✗</span>
              {{ t('about.vs_classic') }}
            </h3>
            <ul class="vs-list">
              <li>{{ t('about.vs_classic1') }}</li>
              <li>{{ t('about.vs_classic2') }}</li>
              <li>{{ t('about.vs_classic3') }}</li>
              <li>{{ t('about.vs_classic4') }}</li>
            </ul>
          </div>
          <div class="vs-divider">VS</div>
          <div class="vs-col vs-success">
            <h3 class="vs-header">
              <span class="vs-icon">✓</span>
              {{ t('about.vs_saladvault') }}
            </h3>
            <ul class="vs-list">
              <li>{{ t('about.vs_sv1') }}</li>
              <li>{{ t('about.vs_sv2') }}</li>
              <li>{{ t('about.vs_sv3') }}</li>
              <li>{{ t('about.vs_sv4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section">
      <div class="container">
        <div class="philosophy-grid">
          <UiFeatureRow :title="t('about.zk_title')" :description="t('about.zk_desc')" />
          <UiFeatureRow :title="t('about.dual_title')" :description="t('about.dual_desc')" />
          <UiFeatureRow :title="t('about.os_title')" :description="t('about.os_desc')" />
          <UiFeatureRow :title="t('about.sov_title')" :description="t('about.sov_desc')" />
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
  margin-bottom: 1.5rem;
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 3rem;
}

.hero {
  padding: 8rem 0 3rem;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
}

/* Pain grid */
.pain-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* VS */
.vs-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: start;
  max-width: 900px;
  margin: 0 auto;
}

.vs-col {
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 300ms;
}

.vs-col:hover {
  border-color: #238636;
}

.vs-danger .vs-icon { color: #ef4444; }
.vs-success .vs-icon { color: #238636; }

.vs-header {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.vs-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.vs-list li {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  padding-left: 1rem;
  position: relative;
}

.vs-list li::before {
  content: '-';
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.3);
}

.vs-divider {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  align-self: center;
}

/* Philosophy */
.philosophy-grid {
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero-title { font-size: 1.75rem; }
  .pain-grid { grid-template-columns: 1fr; }
  .vs-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .vs-divider {
    text-align: center;
  }
  .section { padding: 3rem 0; }
}
</style>
