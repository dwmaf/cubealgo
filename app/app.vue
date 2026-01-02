<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 py-4 bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-indigo-500/15">
      <div class="w-full max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between gap-8">
          <NuxtLink to="/" class="flex items-center text-2xl font-extrabold text-gradient">
            <div class="w-10 ">
              <CubeIcon3x3 caseId="logo" />
            </div>
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

    <footer class="mt-auto py-4 px-6 border-t border-indigo-500/15">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          <div class="space-y-4">
            <div class="flex items-center gap-2 text-xl font-extrabold text-gradient">
              <div class="w-8">
                <CubeIcon3x3 caseId="logo" />
              </div>
              <span>CubeAlgo</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
              Platform referensi algoritma Rubik tercepat dan terlengkap.
              Didesain untuk membantu cuber dari semua level menguasai
              setiap rotasi dengan mudah, kapan saja dan di mana saja.
            </p>
          </div>


          <div>
            <h4
              class="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6 border-b border-indigo-500/10 pb-2 inline-block">
              Algorithms
            </h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/2x2" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">2x2 Cases
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/3x3-oll" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">3x3 OLL
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/3x3-pll" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">3x3 PLL
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/4x4-oll" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">4x4 OLL
                  Parity</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/4x4-pll" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">4x4 PLL
                  Parity</NuxtLink>
              </li>
            </ul>
          </div>


          <div>
            <h4
              class="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6 border-b border-indigo-500/10 pb-2 inline-block">
              Information
            </h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/about" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy-policy" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Privacy
                  Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-of-service" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Terms of
                  Service</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-4 border-t border-indigo-500/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p class="text-xs tracking-widest font-black text-slate-500 ">
            &copy; {{ currentYear }} CubeAlgo. Crafted with ❤️ by Dawam AF
          </p>

          <div class="flex items-center gap-2 opacity-80">
            <span class="text-xs  tracking-widest font-black text-slate-500">Built
              with</span>
            <div class="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <img src="/logo-nuxt.ico" class="w-4 h-4" alt="Nuxt Logo" />
              <span class="text-xs font-bold text-slate-300 tracking-tight">Nuxt</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
const mobileNavOpen = ref(false)

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const route = useRoute()
watch(() => route.path, () => {
  mobileNavOpen.value = false
})
</script>
