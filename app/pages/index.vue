<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                Master <span class="text-gradient">Rubik's Cube</span> Algorithms
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Panduan lengkap notasi dan algoritma untuk menyelesaikan Rubik's Cube 3x3 dan 4x4. Pelajari OLL, PLL,
                dan teknik speedcubing lainnya.
            </p>
        </section>

        <section class="py-8">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <!-- 2x2 OLL & PBL Card -->
                <NuxtLink to="/2x2"
                    class="relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group">
                    <div
                        class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span
                        class="inline-block py-1 px-3 mb-3 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500">2x2</span>
                    <h3 class="text-xl font-bold mb-3 text-white">2x2 OLL & PBL</h3>
                    <p class="text-sm text-slate-400 mb-4">Metode Ortega: 7 OLL dan 5 PBL untuk menyelesaikan 2x2 dengan
                        cepat.</p>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <span>12 Algorithms</span>
                        <span>•</span>
                        <span>Beginner</span>
                    </div>
                </NuxtLink>
                <!-- 3x3 OLL Card -->
                <NuxtLink to="/3x3-oll"
                    class="relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group">
                    <div
                        class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span
                        class="inline-block py-1 px-3 mb-3 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-500">3x3</span>
                    <h3 class="text-xl font-bold mb-3 text-white">OLL - Orientation of Last Layer</h3>
                    <p class="text-sm text-slate-400 mb-4">Algoritma untuk mengorientasikan semua stiker kuning di
                        layer teratas.</p>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <span>57 Algorithms</span>
                        <span>•</span>
                        <span>Intermediate</span>
                    </div>
                </NuxtLink>

                <!-- 3x3 PLL Card -->
                <NuxtLink to="/3x3-pll"
                    class="relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group">
                    <div
                        class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span
                        class="inline-block py-1 px-3 mb-3 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-500">3x3</span>
                    <h3 class="text-xl font-bold mb-3 text-white">PLL - Permutation of Last Layer</h3>
                    <p class="text-sm text-slate-400 mb-4">Algoritma untuk memposisikan semua piece di layer teratas
                        dengan benar.</p>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <span>21 Algorithms</span>
                        <span>•</span>
                        <span>Intermediate</span>
                    </div>
                </NuxtLink>

                <!-- 4x4 OLL Card -->
                <NuxtLink to="/4x4-oll"
                    class="relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group">
                    <div
                        class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span
                        class="inline-block py-1 px-3 mb-3 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-500">4x4</span>
                    <h3 class="text-xl font-bold mb-3 text-white">4x4 OLL Parity</h3>
                    <p class="text-sm text-slate-400 mb-4">Algoritma khusus untuk mengatasi OLL parity yang hanya
                        terjadi di 4x4.</p>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <span>27 Algorithms</span>
                        <span>•</span>
                        <span>Advanced</span>
                    </div>
                </NuxtLink>

                <!-- 4x4 PLL Card -->
                <NuxtLink to="/4x4-pll"
                    class="relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group">
                    <div
                        class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>
                    <span
                        class="inline-block py-1 px-3 mb-3 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-500">4x4</span>
                    <h3 class="text-xl font-bold mb-3 text-white">4x4 PLL Parity</h3>
                    <p class="text-sm text-slate-400 mb-4">Algoritma untuk mengatasi PLL parity yang unik di Rubik's
                        Cube 4x4.</p>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <span>22 Algorithms</span>
                        <span>•</span>
                        <span>Advanced</span>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <!-- Basic Notation Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Notasi Dasar 3x3</h2>
            </div>

            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="notation in basicNotations" :key="notation.symbol"
                    class="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-indigo-500/15 hover:border-indigo-500/35 transition-all duration-300">
                    <div
                        class="min-w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                        <img :src="`/movenotation/${notation.image}.png`" :alt="notation.symbol"
                            class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 class="text-base font-semibold mb-1 text-white">{{ notation.symbol }}
                        </h4>
                        <p class="text-xs text-slate-400">{{ notation.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Wide Moves Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Wide Moves (Gerakan Lebar)</h2>
            </div>

            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="notation in wideNotations" :key="notation.symbol"
                    class="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-indigo-500/15 hover:border-indigo-500/35 transition-all duration-300">
                    <div
                        class="min-w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                        <img :src="`/movenotation/${notation.image}.png`" :alt="notation.symbol"
                            class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 class="text-base font-semibold mb-1 text-white">{{ notation.symbol }}
                        </h4>
                        <p class="text-xs text-slate-400">{{ notation.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Rotation & Middle Moves Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Cube Rotations & Middle Moves</h2>
            </div>

            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="notation in rotationNotations" :key="notation.symbol"
                    class="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-indigo-500/15 hover:border-indigo-500/35 transition-all duration-300">
                    <div
                        class="min-w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                        <img :src="`/movenotation/${notation.image}.png`" :alt="notation.symbol"
                            class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 class="text-base font-semibold mb-1 text-white">{{ notation.symbol }}
                        </h4>
                        <p class="text-xs text-slate-400">{{ notation.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4x4 Last Two Edge Pairing Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    4x4 Last Two Edge Pairing</h2>
                <span class="py-1 px-3 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-500">4x4</span>
            </div>

            <p class="text-slate-400 mb-6 max-w-3xl">
                Algoritma untuk menyelesaikan 2 edge terakhir saat edge pairing di 4x4. Gunakan saat tersisa 2 edge yang
                belum paired.
            </p>

            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in lastTwoEdgeAlgorithms" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                        <img :src="`/movenotation/${algo.image}.png`" :alt="algo.name"
                            class="w-full h-full object-contain" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-semibold mb-2 text-white">{{ algo.name }}</h4>
                        <div
                            class="text-xs p-2 px-3 rounded-lg break-all leading-relaxed font-mono bg-[#0a0a0f] text-slate-400">
                            {{ algo.algorithm }}</div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Cube Algorithm - Panduan Notasi Rubik\'s Cube',
    description: 'Panduan lengkap notasi dan algoritma untuk menyelesaikan Rubik\'s Cube 3x3 dan 4x4. Pelajari OLL, PLL, dan teknik speedcubing.'
})

const basicNotations = [
    { symbol: 'R', image: 'R', description: 'Putar sisi kanan 90° searah jarum jam' },
    { symbol: 'L', image: 'L', description: 'Putar sisi kiri 90° searah jarum jam' },
    { symbol: 'U', image: 'u', description: 'Putar sisi atas 90° searah jarum jam' },
    { symbol: 'D', image: 'D', description: 'Putar sisi bawah 90° searah jarum jam' },
    { symbol: 'F', image: 'F', description: 'Putar sisi depan 90° searah jarum jam' },
    { symbol: 'B', image: 'B', description: 'Putar sisi belakang 90° searah jarum jam' },
]

const wideNotations = [
    { symbol: 'Rw / r', image: 'Rw', description: 'Putar 2 layer kanan 90° searah jarum jam' },
    { symbol: 'Lw / l', image: 'Lw', description: 'Putar 2 layer kiri 90° searah jarum jam' },
    { symbol: 'Uw / u', image: 'Uw', description: 'Putar 2 layer atas 90° searah jarum jam' },
    { symbol: 'Dw / d', image: 'Dw', description: 'Putar 2 layer bawah 90° searah jarum jam' },
    { symbol: 'Fw / f', image: 'Fw', description: 'Putar 2 layer depan 90° searah jarum jam' },
    { symbol: 'Bw / b', image: 'Bw', description: 'Putar 2 layer belakang 90° searah jarum jam' },
]

const rotationNotations = [
    { symbol: 'x', image: 'x', description: 'Rotasi seluruh cube mengikuti arah R' },
    { symbol: 'y', image: 'y', description: 'Rotasi seluruh cube mengikuti arah U' },
    { symbol: 'z', image: 'z', description: 'Rotasi seluruh cube mengikuti arah F' },
    { symbol: 'M', image: 'M', description: 'Putar layer tengah (antara L dan R) mengikuti arah L' },
    { symbol: 'E', image: 'E', description: 'Putar layer tengah (antara U dan D) mengikuti arah D' },
    { symbol: 'S', image: 's', description: 'Putar layer tengah (antara F dan B) mengikuti arah F' },
]

const lastTwoEdgeAlgorithms = [
    { id: '1', image: "last2pair", name: 'Last Edge Pair', algorithm: "Uw R U R' U y L' U' L Uw" },
]
</script>
