<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: 'Features - SaladVault',
    meta: [
        { name: 'description', content: 'Dual-Lock protocol, Saladier compartmentalization, XChaCha20-Poly1305 encryption, and more.' },
    ],
})

const featureCards = computed(() => [
    { title: t('features.feat_encryption'), desc: t('features.feat_encryption_desc') },
    { title: t('features.feat_kdf'), desc: t('features.feat_kdf_desc') },
    { title: t('features.feat_recovery'), desc: t('features.feat_recovery_desc') },
    { title: t('features.feat_import'), desc: t('features.feat_import_desc') },
    { title: t('features.feat_hidden'), desc: t('features.feat_hidden_desc') },
    { title: t('features.feat_autolock'), desc: t('features.feat_autolock_desc') },
    { title: t('features.feat_clipboard'), desc: t('features.feat_clipboard_desc') },
    { title: t('features.feat_screenshot'), desc: t('features.feat_screenshot_desc') },
    { title: t('features.feat_deadman'), desc: t('features.feat_deadman_desc') },
    { title: t('features.feat_generator'), desc: t('features.feat_generator_desc') },
    { title: t('features.feat_multisync'), desc: t('features.feat_multisync_desc') },
    { title: t('features.feat_updater'), desc: t('features.feat_updater_desc') },
    { title: t('features.feat_i18n'), desc: t('features.feat_i18n_desc') },
    { title: t('features.feat_guide'), desc: t('features.feat_guide_desc') },
])
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="hero">
            <div class="container">
                <UiTypewriterText :text="t('features.hero_title')" tag="h1" :speed="40" class="hero-title" />
            </div>
        </section>

        <!-- Dual-Lock -->
        <section class="section">
            <div class="container">
                <div class="highlight-card" data-aos="fade-up">
                    <h2 class="highlight-title">{{ t('features.duallock_title') }}</h2>
                    <p class="highlight-desc">{{ t('features.duallock_desc') }}</p>
                    <div class="protocol-diagram">
                        <div class="proto-item">Master Password</div>
                        <div class="proto-arrow">+</div>
                        <div class="proto-item">Device Key</div>
                        <div class="proto-arrow">→</div>
                        <div class="proto-item proto-accent">HKDF-SHA256</div>
                        <div class="proto-arrow">→</div>
                        <div class="proto-item proto-accent">Master Key</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Saladiers -->
        <section class="section">
            <div class="container">
                <div class="highlight-card" data-aos="fade-up">
                    <h2 class="highlight-title">{{ t('features.saladier_title') }}</h2>
                    <p class="highlight-desc">{{ t('features.saladier_desc') }}</p>
                </div>
            </div>
        </section>

        <!-- Feature Grid -->
        <section class="section">
            <div class="container">
                <div class="feature-grid">
                    <UiBlockCard v-for="(feat, i) in featureCards" :key="feat.title" :title="feat.title"
                        :description="feat.desc" :aos-delay="String((i % 2) * 100)" />
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
    padding: 3rem 0;
}

.hero {
    padding: 8rem 0 3rem;
    text-align: center;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 700;
}

/* Highlight cards */
.highlight-card {
    background-color: #1c2128;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 2.5rem;
    transition: border-color 300ms;
}

.highlight-card:hover {
    border-color: #238636;
}

.highlight-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.highlight-desc {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 700px;
}

/* Protocol diagram */
.protocol-diagram {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.proto-item {
    background-color: #0d1117;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
}

.proto-accent {
    border-color: #238636;
    color: #238636;
}

.proto-arrow {
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.25rem;
    font-weight: 700;
}

/* Saladier demo */
.saladier-demo {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.saladier-box {
    background-color: #0d1117;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1rem 1.5rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: border-color 300ms;
}

.saladier-box:hover {
    border-color: #238636;
}

/* Feature grid */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 1.75rem;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .protocol-diagram {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
