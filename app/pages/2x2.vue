<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <!-- Hero Section -->
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                2x2 <span class="text-gradient">OLL & PBL</span>
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Kumpulan algoritma lengkap untuk menyelesaikan Rubik's Cube 2x2 menggunakan metode Ortega.
            </p>
        </section>

        <!-- OLL Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    2x2 OLL Cases</h2>
                <span
                    class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">7
                    Algorithms</span>
            </div>

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in oll2x2" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                        <CubeIcon2x2 :caseName="algo.name" type="OLL" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-semibold text-white mb-1">{{ algo.name }}</h4>
                        <div
                            class="text-xs p-2 px-3 rounded-lg break-all leading-relaxed font-mono bg-[#0a0a0f] text-slate-400">
                            {{ algo.algorithm }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PBL Section -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    2x2 PBL Cases</h2>
                <span
                    class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">5
                    Algorithms</span>
            </div>

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in pbl2x2" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                        <CubeIcon2x2 :caseName="algo.name" type="PBL" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-semibold text-white mb-1">{{ algo.name }}</h4>
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
    title: '2x2 OLL & PBL Algorithms - Cube Algorithm',
    description: 'Kumpulan algoritma OLL dan PBL lengkap untuk Rubik\'s Cube 2x2. Tingkatkan kecepatan solve Anda dengan metode Ortega.'
})

const oll2x2 = [
    { name: 'Sune', algorithm: "R U R' U R U2 R'" },
    { name: 'Antisune', algorithm: "R U2 R' U' R U' R'" },
    { name: 'H', algorithm: "R2 U2 R U2 R2" },
    { name: 'Pi', algorithm: "R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'T', algorithm: "R U R' U' R' F R F'" },
    { name: 'U', algorithm: "F R U R' U' F'" },
    { name: 'L', algorithm: "F R' F' R U R U' R'" }
]

const pbl2x2 = [
    { name: 'Adj', algorithm: "R' F R' F2 R U' R' F2 R2" },
    { name: 'Opp', algorithm: "R U' R' U' F2 U' R U R' D R2" },
]
</script>
