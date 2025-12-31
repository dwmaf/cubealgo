<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 py-4 bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-indigo-500/15">
      <div class="w-full max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between gap-8">
          <NuxtLink to="/" class="flex items-center text-2xl font-extrabold text-gradient">
            <span>CubeAlgo</span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-2">
            <NuxtLink to="/"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              Home</NuxtLink>
            <NuxtLink to="/2x2"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              2x2</NuxtLink>
            <NuxtLink to="/3x3-oll"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              3x3 OLL</NuxtLink>
            
            <NuxtLink to="/3x3-pll"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              3x3 PLL</NuxtLink>
            <NuxtLink to="/4x4-oll"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              4x4 OLL</NuxtLink>
            <NuxtLink to="/4x4-pll"
              class="py-2.5 px-5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
              exact-active-class="!text-white !bg-indigo-500/25 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              4x4 PLL</NuxtLink>
          </nav>

          <button
            class="md:hidden flex items-center justify-center w-10 h-10 bg-transparent border border-indigo-500/15 rounded-lg text-white cursor-pointer"
            @click="toggleMobileNav" aria-label="Toggle navigation">
            <span v-if="!mobileNavOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>

        <nav v-if="mobileNavOpen" class="flex flex-col gap-2 py-4 mt-4 border-t border-indigo-500/15">
          <NuxtLink to="/"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">Home</NuxtLink>
          <NuxtLink to="/2x2"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">2x2</NuxtLink>
          <NuxtLink to="/3x3-oll"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">3x3 OLL</NuxtLink>
          <NuxtLink to="/3x3-pll"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">3x3 PLL</NuxtLink>
          <NuxtLink to="/4x4-oll"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">4x4 OLL</NuxtLink>
          <NuxtLink to="/4x4-pll"
            class="py-3 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">4x4 PLL</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer class="mt-auto py-8 border-t border-indigo-500/15 text-center">
      <div class="w-full max-w-7xl mx-auto px-6">
        <p class="text-sm text-slate-500">
          Built with ❤️ by Dawam AF • <a href="https://nuxt.com" target="_blank" rel="noopener"
            class="text-indigo-500 hover:text-violet-500">Powered by Nuxt</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileNavOpen = ref(false)

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const route = useRoute()
watch(() => route.path, () => {
  mobileNavOpen.value = false
})
</script>
