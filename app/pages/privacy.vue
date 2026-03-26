<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('privacy.title')} - SaladVault`,
  meta: [
    { name: 'description', content: 'SaladVault Privacy Policy. Zero-Knowledge architecture means we cannot read your data.' },
  ],
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('privacy.title')" tag="h1" :speed="40" class="hero-title" />
        <p class="last-updated">{{ t('privacy.last_updated') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <p class="intro-text" data-aos="fade-up">{{ t('privacy.intro') }}</p>

        <!-- Section 1 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s1_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s1_text') }}</p>
        </div>

        <!-- Section 2 - What we DON'T collect -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s2_title') }}</h2>
          <ul class="legal-list legal-list--no">
            <li>{{ t('privacy.s2_p1') }}</li>
            <li>{{ t('privacy.s2_p2') }}</li>
            <li>{{ t('privacy.s2_p3') }}</li>
            <li>{{ t('privacy.s2_p4') }}</li>
            <li>{{ t('privacy.s2_p5') }}</li>
          </ul>
        </div>

        <!-- Section 3 - What we collect -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s3_title') }}</h2>
          <ul class="legal-list legal-list--yes">
            <li>{{ t('privacy.s3_p1') }}</li>
            <li>{{ t('privacy.s3_p2') }}</li>
            <li>{{ t('privacy.s3_p3') }}</li>
            <li>{{ t('privacy.s3_p4') }}</li>
            <li>{{ t('privacy.s3_p5') }}</li>
            <li>{{ t('privacy.s3_p6') }}</li>
          </ul>
        </div>

        <!-- Section 4 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s4_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s4_text') }}</p>
        </div>

        <!-- Section 5 - Third parties -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s5_title') }}</h2>
          <ul class="legal-list">
            <li>{{ t('privacy.s5_p1') }}</li>
            <li>{{ t('privacy.s5_p2') }}</li>
            <li>{{ t('privacy.s5_p3') }}</li>
          </ul>
        </div>

        <!-- Section 6 - Security -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s6_title') }}</h2>
          <ul class="legal-list legal-list--yes">
            <li>{{ t('privacy.s6_p1') }}</li>
            <li>{{ t('privacy.s6_p2') }}</li>
            <li>{{ t('privacy.s6_p3') }}</li>
            <li>{{ t('privacy.s6_p4') }}</li>
          </ul>
        </div>

        <!-- Section 7 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s7_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s7_text') }}</p>
        </div>

        <!-- Section 8 - GDPR -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s8_title') }}</h2>
          <ul class="legal-list legal-list--yes">
            <li>{{ t('privacy.s8_p1') }}</li>
            <li>{{ t('privacy.s8_p2') }}</li>
            <li>{{ t('privacy.s8_p3') }}</li>
          </ul>
          <p class="legal-text legal-note">{{ t('privacy.s8_p4') }}</p>
        </div>

        <!-- Section 9 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s9_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s9_text') }}</p>
        </div>

        <!-- Section 10 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s10_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s10_text') }}</p>
        </div>

        <!-- Section 11 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s11_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s11_text') }}</p>
        </div>

        <!-- Section 12 -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('privacy.s12_title') }}</h2>
          <p class="legal-text">{{ t('privacy.s12_text') }}</p>
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
  gap: 2rem;
}

.intro-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
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
}

.legal-note {
  margin-top: 0.75rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
}

.legal-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legal-list li {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
}

.legal-list li::before {
  position: absolute;
  left: 0;
  font-weight: 700;
}

.legal-list--no li::before {
  content: '✗';
  color: #ef4444;
}

.legal-list--yes li::before {
  content: '+';
  color: #238636;
}

.legal-list:not(.legal-list--no):not(.legal-list--yes) li::before {
  content: '>';
  color: rgba(255, 255, 255, 0.3);
}
</style>
