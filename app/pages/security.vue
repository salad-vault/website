<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('security.title')} - SaladVault`,
  meta: [
    { name: 'description', content: 'SaladVault security audit status, cryptographic architecture, and how to report vulnerabilities.' },
  ],
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="container">
        <UiTypewriterText :text="t('security.title')" tag="h1" :speed="40" class="hero-title" />
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">{{ t('security.subtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">

        <!-- Audit status -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.audit_title') }}</h2>
          <p class="legal-text">{{ t('security.audit_text') }}</p>
          <div class="audit-status-card">
            <div class="audit-row">
              <span class="audit-label">{{ t('security.audit_formal') }}</span>
              <span class="audit-badge audit-badge--pending">{{ t('security.audit_planned') }}</span>
            </div>
            <div class="audit-row">
              <span class="audit-label">{{ t('security.audit_community') }}</span>
              <span class="audit-badge audit-badge--active">{{ t('security.audit_open') }}</span>
            </div>
            <div class="audit-row">
              <span class="audit-label">{{ t('security.audit_ci') }}</span>
              <span class="audit-badge audit-badge--active">{{ t('security.audit_active') }}</span>
            </div>
            <div class="audit-row">
              <span class="audit-label">{{ t('security.audit_deps') }}</span>
              <span class="audit-badge audit-badge--active">{{ t('security.audit_active') }}</span>
            </div>
          </div>
        </div>

        <!-- Crypto architecture -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.crypto_title') }}</h2>
          <p class="legal-text">{{ t('security.crypto_intro') }}</p>
          <div class="crypto-table">
            <div class="crypto-row">
              <span class="crypto-label">{{ t('security.crypto_encryption') }}</span>
              <span class="crypto-value">XChaCha20-Poly1305 (256-bit, nonce 24 bytes)</span>
            </div>
            <div class="crypto-row">
              <span class="crypto-label">{{ t('security.crypto_kdf') }}</span>
              <span class="crypto-value">Argon2id (m=64 MB, t=3, p=4, output=32 bytes)</span>
            </div>
            <div class="crypto-row">
              <span class="crypto-label">{{ t('security.crypto_key_combine') }}</span>
              <span class="crypto-value">HKDF-SHA256 (info="SaladVault_MasterKey_v2")</span>
            </div>
            <div class="crypto-row">
              <span class="crypto-label">{{ t('security.crypto_blind') }}</span>
              <span class="crypto-value">HMAC-SHA256</span>
            </div>
            <div class="crypto-row">
              <span class="crypto-label">{{ t('security.crypto_sync') }}</span>
              <span class="crypto-value">Argon2id ({{ t('security.crypto_sync_detail') }})</span>
            </div>
          </div>
        </div>

        <!-- What you can verify -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.verify_title') }}</h2>
          <p class="legal-text">{{ t('security.verify_intro') }}</p>
          <ul class="legal-list legal-list--yes">
            <li>{{ t('security.verify_source') }}</li>
            <li>{{ t('security.verify_crypto') }}</li>
            <li>{{ t('security.verify_network') }}</li>
            <li>{{ t('security.verify_storage') }}</li>
            <li>{{ t('security.verify_zeroize') }}</li>
          </ul>
        </div>

        <!-- Supply chain -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.supply_title') }}</h2>
          <p class="legal-text">{{ t('security.supply_intro') }}</p>
          <ul class="legal-list legal-list--yes">
            <li>{{ t('security.supply_rust') }}</li>
            <li>{{ t('security.supply_pin') }}</li>
            <li>{{ t('security.supply_audit') }}</li>
            <li>{{ t('security.supply_dependabot') }}</li>
            <li>{{ t('security.supply_npmrc') }}</li>
            <li>{{ t('security.supply_signed') }}</li>
          </ul>
        </div>

        <!-- Report a vulnerability -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.report_title') }}</h2>
          <p class="legal-text">{{ t('security.report_text') }}</p>
          <a href="https://github.com/salad-vault/tauri-app/security/advisories" target="_blank" class="security-link">
            {{ t('security.report_link') }} →
          </a>
        </div>

        <!-- Warrant Canary -->
        <div class="legal-block" data-aos="fade-up">
          <h2 class="legal-heading">{{ t('security.canary_title') }}</h2>
          <p class="legal-text">{{ t('security.canary_text') }}</p>
          <div class="canary-card">
            <p>{{ t('security.canary_statement') }}</p>
            <p class="canary-date">{{ t('security.canary_date') }}</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
.section { padding: 2rem 0 4rem; }
.hero { padding: 8rem 0 2rem; text-align: center; }
.hero-title { font-size: 2.5rem; font-weight: 700; }
.hero-subtitle { color: rgba(255,255,255,0.6); margin-top: 0.75rem; font-size: 1rem; }

.legal-content { display: flex; flex-direction: column; gap: 2rem; }
.legal-block { background: #1c2128; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 2rem; transition: border-color 300ms; }
.legal-block:hover { border-color: #238636; }
.legal-heading { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
.legal-text { color: rgba(255,255,255,0.65); line-height: 1.7; font-size: 0.9rem; }
.legal-list { list-style: none; padding: 0; margin-top: 0.75rem; }
.legal-list li { padding: 0.3rem 0 0.3rem 1.5rem; position: relative; color: rgba(255,255,255,0.65); font-size: 0.9rem; line-height: 1.6; }
.legal-list--yes li::before { content: "✓"; position: absolute; left: 0; color: #238636; font-weight: 700; }

/* Audit status */
.audit-status-card { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.audit-row { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
.audit-row:last-child { border-bottom: none; }
.audit-label { color: rgba(255,255,255,0.75); font-size: 0.85rem; }
.audit-badge { padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
.audit-badge--active { background: rgba(35,134,54,0.2); color: #238636; border: 1px solid rgba(35,134,54,0.3); }
.audit-badge--pending { background: rgba(210,153,34,0.15); color: #d29922; border: 1px solid rgba(210,153,34,0.3); }

/* Crypto table */
.crypto-table { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.4rem; }
.crypto-row { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; background: rgba(13,17,23,0.5); border-radius: 6px; gap: 1rem; flex-wrap: wrap; }
.crypto-label { color: rgba(255,255,255,0.75); font-size: 0.85rem; font-weight: 600; }
.crypto-value { color: #238636; font-size: 0.8rem; font-family: 'Courier New', monospace; }

/* Security link */
.security-link { display: inline-block; margin-top: 0.75rem; color: #238636; font-weight: 600; text-decoration: none; transition: opacity 0.15s; }
.security-link:hover { opacity: 0.8; }

/* Canary */
.canary-card { margin-top: 1rem; padding: 1.25rem; background: rgba(13,17,23,0.5); border: 1px solid rgba(35,134,54,0.3); border-radius: 8px; }
.canary-card p { color: rgba(255,255,255,0.75); font-size: 0.85rem; line-height: 1.6; }
.canary-date { margin-top: 0.5rem; color: #238636; font-weight: 600; font-size: 0.85rem; }

@media (max-width: 768px) {
  .hero-title { font-size: 1.75rem; }
  .crypto-row { flex-direction: column; align-items: flex-start; gap: 0.2rem; }
}
</style>
