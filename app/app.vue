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

            <!-- 3x3 Dropdown -->
            <div class="relative group">
              <button @click="toggle3x3"
                class="flex items-center gap-1 py-2.5 px-5 rounded-xl font-medium text-sm transition-all duration-300 group-hover:bg-indigo-500/10 cursor-pointer"
                :class="dropdown3x3Open || $route.path.includes('3x3') ? 'text-white bg-indigo-500/15' : 'text-slate-400 hover:text-white'">
                <span>3x3</span>
                <span class="text-[10px] transition-transform duration-300"
                  :class="{ 'rotate-180': dropdown3x3Open }">▼</span>
              </button>

            <div v-if="dropdown3x3Open"
                class="absolute top-full left-0 mt-2 w-48 py-2 bg-[#10101a]/95 backdrop-blur-2xl border border-indigo-500/15 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <NuxtLink to="/3x3-f2l"
                  class="block px-5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                  active-class="!text-white bg-indigo-500/10 shadow-inner">
                  F2L Algorithms
                </NuxtLink>
                <NuxtLink to="/3x3-oll"
                  class="block px-5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                  active-class="!text-white bg-indigo-500/10">
                  OLL Algorithms
                </NuxtLink>
                <NuxtLink to="/3x3-pll"
                  class="block px-5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                  active-class="!text-white bg-indigo-500/10">
                  PLL Algorithms
                </NuxtLink>
              </div>
            </div>

            <!-- 4x4 Dropdown -->
            <div class="relative group">
              <button @click="toggle4x4"
                class="flex items-center gap-1 py-2.5 px-5 rounded-xl font-medium text-sm transition-all duration-300 group-hover:bg-indigo-500/10 cursor-pointer"
                :class="dropdown4x4Open || $route.path.includes('4x4') ? 'text-white bg-indigo-500/15' : 'text-slate-400 hover:text-white'">
                <span>4x4</span>
                <span class="text-[10px] transition-transform duration-300"
                  :class="{ 'rotate-180': dropdown4x4Open }">▼</span>
              </button>

              <div v-if="dropdown4x4Open"
                class="absolute top-full left-0 mt-2 w-48 py-2 bg-[#10101a]/95 backdrop-blur-2xl border border-indigo-500/15 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <NuxtLink to="/4x4-oll"
                  class="block px-5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                  active-class="!text-white bg-indigo-500/10">
                  OLL Parity
                </NuxtLink>
                <NuxtLink to="/4x4-pll"
                  class="block px-5 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                  active-class="!text-white bg-indigo-500/10">
                  PLL Parity
                </NuxtLink>
              </div>
            </div>
          </nav>

          <button
            class="md:hidden flex items-center justify-center w-10 h-10 bg-transparent border border-indigo-500/15 rounded-lg text-white cursor-pointer"
            @click="toggleMobileNav" aria-label="Toggle navigation">
            <span v-if="!mobileNavOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>

        <nav v-if="mobileNavOpen" class="flex flex-col gap-1 py-4 mt-4 border-t border-indigo-500/15">
          <NuxtLink to="/"
            class="py-2.5 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">Home</NuxtLink>
          <NuxtLink to="/2x2"
            class="py-2.5 px-4 rounded-xl font-medium text-slate-400 hover:text-white hover:bg-indigo-500/15 transition-all duration-300"
            exact-active-class="!text-white !bg-indigo-500/25" @click="mobileNavOpen = false">2x2</NuxtLink>

          <!-- 3x3 Mobile -->
          <div class="space-y-1">
            <button @click="toggle3x3"
              class="w-full flex items-center justify-between py-2.5 px-4 rounded-xl font-medium text-left transition-all duration-300"
              :class="dropdown3x3Open || $route.path.includes('3x3') ? 'text-white bg-indigo-500/15' : 'text-slate-400'">
              <span>3x3 Algorithms</span>
              <span class="text-[10px] transition-transform duration-300"
                :class="{ 'rotate-180': dropdown3x3Open }">▼</span>
            </button>
            <div v-if="dropdown3x3Open" class="pl-4 space-y-1 animate-in fade-in slide-in-from-top-1">
              <NuxtLink to="/3x3-f2l"
                class="block py-2 px-4 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                active-class="!text-white bg-indigo-500/10">F2L Case</NuxtLink>
              <NuxtLink to="/3x3-oll"
                class="block py-2 px-4 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                active-class="!text-white bg-indigo-500/10">OLL Case</NuxtLink>
              <NuxtLink to="/3x3-pll"
                class="block py-2 px-4 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                active-class="!text-white bg-indigo-500/10">PLL Case</NuxtLink>
            </div>
          </div>

          <!-- 4x4 Mobile -->
          <div class="space-y-1">
            <button @click="toggle4x4"
              class="w-full flex items-center justify-between py-2.5 px-4 rounded-xl font-medium text-left transition-all duration-300"
              :class="dropdown4x4Open || $route.path.includes('4x4') ? 'text-white bg-indigo-500/15' : 'text-slate-400'">
              <span>4x4 Parity</span>
              <span class="text-[10px] transition-transform duration-300"
                :class="{ 'rotate-180': dropdown4x4Open }">▼</span>
            </button>
            <div v-if="dropdown4x4Open" class="pl-4 space-y-1 animate-in fade-in slide-in-from-top-1">
              <NuxtLink to="/4x4-oll"
                class="block py-2 px-4 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                active-class="!text-white bg-indigo-500/10">OLL Parity</NuxtLink>
              <NuxtLink to="/4x4-pll"
                class="block py-2 px-4 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
                active-class="!text-white bg-indigo-500/10">PLL Parity</NuxtLink>
            </div>
          </div>
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
                <NuxtLink to="/3x3-f2l" class="text-sm text-slate-400 hover:text-indigo-400 transition-colors">3x3 F2L
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
const dropdown3x3Open = ref(false)
const dropdown4x4Open = ref(false)

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const toggle3x3 = (e) => {
  e.stopPropagation()
  dropdown3x3Open.value = !dropdown3x3Open.value
  dropdown4x4Open.value = false
}

const toggle4x4 = (e) => {
  e.stopPropagation()
  dropdown4x4Open.value = !dropdown4x4Open.value
  dropdown3x3Open.value = false
}

const closeDropdowns = () => {
  dropdown3x3Open.value = false
  dropdown4x4Open.value = false
}

const route = useRoute()
watch(() => route.path, () => {
  mobileNavOpen.value = false
  closeDropdowns()
})

onMounted(() => {
  window.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdowns)
})
</script>
