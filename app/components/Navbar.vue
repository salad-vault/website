<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const mobileOpen = ref(false)

function toggleLang() {
  setLocale(locale.value === 'en' ? 'fr' : 'en')
}

const links = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.features', to: '/features' },
  { key: 'nav.pricing', to: '/pricing' },
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <NuxtLink to="/" class="navbar-logo">
        <img src="/logo.png" alt="SaladVault" class="navbar-logo-img" width="28" height="28" />
        <span class="navbar-logo-text">SaladVault</span>
      </NuxtLink>

      <div class="navbar-links" :class="{ open: mobileOpen }">
        <NuxtLink
          v-for="link in links"
          :key="link.key"
          :to="link.to"
          class="navbar-link"
          @click="mobileOpen = false"
        >
          {{ t(link.key) }}
        </NuxtLink>
      </div>

      <div class="navbar-right">
        <a
          href="https://github.com/salad-vault"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar-icon"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" size="22" />
        </a>
        <button class="navbar-lang" @click="toggleLang" :aria-label="locale === 'en' ? 'Switch to French' : 'Switch to English'">
          {{ locale === 'en' ? 'FR' : 'EN' }}
        </button>
        <button class="navbar-burger" @click="mobileOpen = !mobileOpen" aria-label="Menu">
          <span :class="{ active: mobileOpen }"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #0d1117;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.navbar-logo-img {
  border-radius: 4px;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  transition: color 200ms;
  letter-spacing: 0.02em;
}

.navbar-link:hover,
.navbar-link.router-link-active {
  color: #ffffff;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar-icon {
  color: rgba(255, 255, 255, 0.6);
  transition: color 200ms;
  display: flex;
}

.navbar-icon:hover {
  color: #ffffff;
}

.navbar-lang {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 200ms, color 200ms;
}

.navbar-lang:hover {
  border-color: #238636;
  color: #ffffff;
}

.navbar-burger {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: relative;
}

.navbar-burger span,
.navbar-burger span::before,
.navbar-burger span::after {
  display: block;
  width: 20px;
  height: 2px;
  background: #ffffff;
  position: absolute;
  left: 4px;
  transition: transform 200ms;
}

.navbar-burger span { top: 13px; }
.navbar-burger span::before { content: ''; top: -6px; }
.navbar-burger span::after { content: ''; top: 6px; }

.navbar-burger span.active { background: transparent; }
.navbar-burger span.active::before { transform: translateY(6px) rotate(45deg); }
.navbar-burger span.active::after { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 768px) {
  .navbar-burger {
    display: block;
  }

  .navbar-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #0d1117;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.75rem;
  }

  .navbar-links.open {
    display: flex;
  }
}
</style>
