<script setup>
import { useWindowScroll, useWindowSize, useResizeObserver } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'

const { y } = useWindowScroll()
const { height: windowHeight } = useWindowSize()
const scrollHeight = ref(0)

onMounted(() => {
  scrollHeight.value = document.documentElement.scrollHeight
  useResizeObserver(document.body, () => {
    scrollHeight.value = document.documentElement.scrollHeight
  })
})

const scrollProgress = computed(() => {
  const totalScrollable = scrollHeight.value - windowHeight.value
  if (totalScrollable <= 0) return 0
  const progress = (y.value / totalScrollable) * 100
  return Math.min(100, Math.max(0, progress))
})
</script>

<template>
  <div class="fixed right-2 top-1/2 -translate-y-1/2 h-30 w-2 bg-slate-200/50 dark:bg-slate-800/50 rounded-full z-50 backdrop-blur-sm border border-white/10 dark:border-indigo-500/10">
     <div class="bg-linear-to-b from-accent via-accent-secondary to-accent-tertiary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-150 ease-out"
      :style="{ 
        height: scrollProgress + '%',
        width: '100%' 
      }">
     </div>
  </div>
</template>