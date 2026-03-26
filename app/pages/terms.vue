<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('terms.title')} - SaladVault`,
  meta: [
    { name: 'description', content: 'SaladVault Terms of Use. Zero-Knowledge password manager.' },
  ],
})

const sections = computed(() => [
  { title: t('terms.s1_title'), paragraphs: [t('terms.s1_text')] },
  { title: t('terms.s2_title'), paragraphs: [t('terms.s2_text')] },
  { title: t('terms.s3_title'), paragraphs: [t('terms.s3_p1'), t('terms.s3_p2'), t('terms.s3_p3')] },
  { title: t('terms.s4_title'), paragraphs: [t('terms.s4_text')] },
  { title: t('terms.s5_title'), paragraphs: [t('terms.s5_p1'), t('terms.s5_p2'), t('terms.s5_p3')] },
  { title: t('terms.s6_title'), paragraphs: [t('terms.s6_text')] },
  { title: t('terms.s7_title'), paragraphs: [t('terms.s7_text')] },
  { title: t('terms.s8_title'), paragraphs: [t('terms.s8_p1'), t('terms.s8_p2')] },
  { title: t('terms.s9_title'), paragraphs: [t('terms.s9_text')] },
  { title: t('terms.s10_title'), paragraphs: [t('terms.s10_text')] },
  { title: t('terms.s11_title'), paragraphs: [t('terms.s11_text')] },
  { title: t('terms.s12_title'), paragraphs: [t('terms.s12_text')] },
  { title: t('terms.s13_title'), paragraphs: [t('terms.s13_text')] },
])
</script>

<template>
  <div>
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('terms.title')" tag="h1" :speed="40" class="hero-title" />
        <p class="last-updated">{{ t('terms.last_updated') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div
          v-for="(s, i) in sections"
          :key="i"
          class="legal-block"
          data-aos="fade-up"
        >
          <h2 class="legal-heading">{{ s.title }}</h2>
          <p v-for="(p, j) in s.paragraphs" :key="j" class="legal-text">{{ p }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero {
  padding: 8rem 0 2rem;
  text-align: center;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.last-updated {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

.section {
  padding: 2rem 0 5rem;
}

.legal-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.legal-block {
  background-color: #1c2128;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 300ms;
}

.legal-block:hover {
  border-color: #238636;
}

.legal-heading {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.legal-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.legal-text:last-child {
  margin-bottom: 0;
}
</style>
