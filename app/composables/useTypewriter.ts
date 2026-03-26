import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(text: string, speed = 50) {
  const displayed = ref('')
  const done = ref(false)
  let index = 0
  let timer: ReturnType<typeof setInterval> | null = null
  let observer: IntersectionObserver | null = null
  const el = ref<HTMLElement | null>(null)

  function start() {
    if (timer) return
    timer = setInterval(() => {
      if (index < text.length) {
        displayed.value = text.slice(0, index + 1)
        index++
      } else {
        done.value = true
        if (timer) clearInterval(timer)
      }
    }, speed)
  }

  onMounted(() => {
    if (!el.value) {
      start()
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          observer?.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
    observer?.disconnect()
  })

  return { displayed, done, el }
}
