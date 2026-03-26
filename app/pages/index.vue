<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'SaladVault - Zero-Knowledge Password Manager',
  meta: [
    { name: 'description', content: 'The open-source password manager with Dual-Lock protocol. You control 100% of your data.' },
  ],
})

const compareFeatures = computed(() => [
  { key: 'compare_zk', sv: '✓', dashlane: '✓', onepass: '✓', bitwarden: '✓' },
  { key: 'compare_dual', sv: '✓', dashlane: '✗', onepass: '~', bitwarden: '✗' },
  { key: 'compare_compartment', sv: '✓', dashlane: '✗', onepass: '~', bitwarden: '✗' },
  { key: 'compare_opensource', sv: '✓', dashlane: '✗', onepass: '✗', bitwarden: '✓' },
  { key: 'compare_nopii', sv: '✓', dashlane: '✗', onepass: '✗', bitwarden: '✗' },
  { key: 'compare_free', sv: '✓', dashlane: '✗', onepass: '✗', bitwarden: '✓' },
])

const trustBadges = computed(() => [
  { title: t('home.trust_opensource'), desc: t('home.trust_opensource_desc') },
  { title: t('home.trust_xchacha'), desc: t('home.trust_xchacha_desc') },
  { title: t('home.trust_argon'), desc: t('home.trust_argon_desc') },
  { title: t('home.trust_zerologs'), desc: t('home.trust_zerologs_desc') },
])
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('home.hero_title')" tag="h1" :speed="40" class="hero-title" />
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">{{ t('home.hero_subtitle') }}</p>
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/salad-vault/tauri-app/releases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            {{ t('home.btn_download') }}
          </a>
          <a href="https://github.com/salad-vault" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            {{ t('home.btn_github') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section">
      <div class="container">
        <div class="stats-grid">
          <UiBlockCard aos-delay="0">
            <p class="stat-number">{{ t('home.stats_stolen') }}</p>
            <p class="stat-label">{{ t('home.stats_stolen_label') }}</p>
          </UiBlockCard>
          <UiBlockCard aos-delay="100">
            <p class="stat-number">{{ t('home.stats_weak') }}</p>
            <p class="stat-label">{{ t('home.stats_weak_label') }}</p>
          </UiBlockCard>
          <UiBlockCard aos-delay="200">
            <p class="stat-number">{{ t('home.stats_reuse') }}</p>
            <p class="stat-label">{{ t('home.stats_reuse_label') }}</p>
          </UiBlockCard>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how" class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('home.how_title') }}</h2>
        <div class="how-steps">
          <UiFeatureRow :title="t('home.step1_title')" :description="t('home.step1_desc')" step="1" />
          <UiFeatureRow :title="t('home.step2_title')" :description="t('home.step2_desc')" step="2" />
          <UiFeatureRow :title="t('home.step3_title')" :description="t('home.step3_desc')" step="3" />
          <UiFeatureRow :title="t('home.step4_title')" :description="t('home.step4_desc')" step="4" />
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section id="compare" class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('home.compare_title') }}</h2>
        <div class="table-wrapper" data-aos="fade-up" data-aos-delay="100">
          <table class="compare-table">
            <thead>
              <tr>
                <th></th>
                <th class="compare-highlight">SaladVault</th>
                <th>Dashlane</th>
                <th>1Password</th>
                <th>Bitwarden</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feat in compareFeatures" :key="feat.key">
                <td class="compare-feat">{{ t(`home.${feat.key}`) }}</td>
                <td class="compare-cell compare-highlight">
                  <span :class="feat.sv === '✓' ? 'cell-yes' : feat.sv === '✗' ? 'cell-no' : 'cell-partial'">{{ feat.sv }}</span>
                </td>
                <td class="compare-cell">
                  <span :class="feat.dashlane === '✓' ? 'cell-yes' : feat.dashlane === '✗' ? 'cell-no' : 'cell-partial'">{{ feat.dashlane }}</span>
                </td>
                <td class="compare-cell">
                  <span :class="feat.onepass === '✓' ? 'cell-yes' : feat.onepass === '✗' ? 'cell-no' : 'cell-partial'">{{ feat.onepass }}</span>
                </td>
                <td class="compare-cell">
                  <span :class="feat.bitwarden === '✓' ? 'cell-yes' : feat.bitwarden === '✗' ? 'cell-no' : 'cell-partial'">{{ feat.bitwarden }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Trust Badges -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ t('home.trust_title') }}</h2>
        <div class="trust-grid">
          <UiBlockCard
            v-for="(badge, i) in trustBadges"
            :key="badge.title"
            :title="badge.title"
            :description="badge.desc"
            :aos-delay="String(i * 100)"
          />
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-block" data-aos="fade-up">
          <h2 class="cta-title">{{ t('home.cta_title') }}</h2>
          <p class="cta-subtitle">{{ t('home.cta_subtitle') }}</p>
          <a href="https://github.com/salad-vault/tauri-app/releases" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            {{ t('home.cta_btn') }}
          </a>
          <p class="cta-platforms">{{ t('home.cta_platforms') }}</p>
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

/* Hero */
.hero {
  padding: 8rem 0 5rem;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 200ms;
}

.btn-primary {
  background-color: #238636;
  color: #ffffff;
  border-color: #238636;
}

.btn-primary:hover {
  background-color: #2ea043;
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  border-color: #ffffff;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 0.9rem;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #238636;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}

/* How it works */
.how-steps {
  max-width: 700px;
  margin: 0 auto;
}

/* Comparison table */
.table-wrapper {
  overflow-x: auto;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.compare-table th,
.compare-table td {
  padding: 0.75rem 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.compare-table th {
  font-weight: 600;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 1rem;
}

.compare-highlight {
  color: #238636 !important;
  font-weight: 700 !important;
}

.compare-feat {
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
}

.cell-yes { color: #238636; font-weight: 700; }
.cell-no { color: rgba(255, 255, 255, 0.2); }
.cell-partial { color: rgba(255, 255, 255, 0.4); }

/* Trust */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* CTA */
.cta-section {
  padding-bottom: 6rem;
}

.cta-block {
  text-align: center;
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 4rem 2rem;
  transition: border-color 300ms;
}

.cta-block:hover {
  border-color: #238636;
}

.cta-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.cta-platforms {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.35);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title { font-size: 1.75rem; }
  .stats-grid { grid-template-columns: 1fr; }
  .trust-grid { grid-template-columns: 1fr; }
  .compare-table { font-size: 0.75rem; }
  .section { padding: 3rem 0; }
}
</style>
