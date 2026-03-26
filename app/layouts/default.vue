<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    offset: 80,
  })
})
</script>

<template>
  <div class="layout">
    <Navbar />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
