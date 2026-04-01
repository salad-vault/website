<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.product') }}</h4>
          <NuxtLink to="/#how" class="footer-link">{{ t('footer.how_it_works') }}</NuxtLink>
          <NuxtLink to="/pricing" class="footer-link">{{ t('footer.pricing') }}</NuxtLink>
          <NuxtLink to="/#compare" class="footer-link">{{ t('footer.comparison') }}</NuxtLink>
          <NuxtLink to="/pricing#faq" class="footer-link">{{ t('footer.faq') }}</NuxtLink>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.security') }}</h4>
          <a href="https://github.com/salad-vault" target="_blank" rel="noopener noreferrer" class="footer-link">{{ t('footer.source_code') }}</a>
          <a href="https://github.com/salad-vault/tauri-app#readme" target="_blank" rel="noopener noreferrer" class="footer-link">{{ t('footer.crypto_docs') }}</a>
          <NuxtLink to="/security" class="footer-link">{{ t('footer.audits') }}</NuxtLink>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">{{ t('footer.legal') }}</h4>
          <NuxtLink to="/terms" class="footer-link">{{ t('footer.terms') }}</NuxtLink>
          <NuxtLink to="/privacy" class="footer-link">{{ t('footer.privacy') }}</NuxtLink>
          <span class="footer-link" :title="t('footer.warrant_tooltip')">{{ t('footer.warrant_canary') }} ✓</span>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-made">{{ t('footer.made_with') }}</p>
        <p class="footer-copy">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem 0 2rem;
  background-color: #0d1117;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.footer-heading {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 200ms;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-link--disabled {
  opacity: 0.3;
  cursor: default;
}

.footer-link--disabled:hover {
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-made {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.5rem;
}

.footer-copy {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.25);
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
