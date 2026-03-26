<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  speed?: number
  tag?: string
}>(), {
  speed: 50,
  tag: 'span',
})

const { displayed, done, el } = useTypewriter(props.text, props.speed)
</script>

<template>
  <component :is="tag" ref="el" class="typewriter">
    {{ displayed }}<span v-if="!done" class="typewriter-cursor">|</span>
  </component>
</template>

<style scoped>
.typewriter-cursor {
  animation: blink 600ms step-end infinite;
  color: #238636;
  font-weight: 400;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
