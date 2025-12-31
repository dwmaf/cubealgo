<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                3x3 <span class="text-gradient">OLL</span> Algorithms
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Orientation of Last Layer - 57 algoritma untuk mengorientasikan semua stiker kuning di layer teratas.
            </p>
        </section>


        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    All OLL Cases</h2>
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="oll in ollAlgorithms" :key="oll.id"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div class="flex flex-col gap-2 flex-shrink-0">
                        <div
                            class="relative w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                            <img :src="`/3x3oll/${oll.id}.png`" :alt="`OLL Case ${oll.id}`"
                                class="w-full h-full object-contain p-2" loading="lazy" />
                        </div>
                        <div
                            class="relative w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 text-[10px] text-slate-500 pt-1 flex-col">
                            <CubeIcon3x3 :caseId="oll.id" type="OLL" />
                            
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-semibold text-white mb-2">OLL {{ oll.id }}</h4>
                        <div
                            class="text-xs p-2 px-3 rounded-lg break-all leading-relaxed font-mono bg-[#0a0a0f] text-slate-400">
                            {{ oll.algorithm }}</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useSeoMeta({
    title: '3x3 OLL Algorithms - Cube Algorithm',
    description: '57 algoritma OLL (Orientation of Last Layer) untuk Rubik\'s Cube 3x3. Pelajari semua case dengan gambar dan notasi.'
})

const ollAlgorithms = [
    { id: 1, algorithm: "R U2 R2 F R F' U2 R' F R F'" },
    { id: 2, algorithm: "r U r' U2 r U2 R' U2 R U' r'" },
    { id: 3, algorithm: "r' R2 U R' U r U2 r' U R' r" },
    { id: 4, algorithm: "r' R U' r U2 r' U' R U' R2 r" },
    { id: 5, algorithm: "r' U2 R U R' U r" },
    { id: 6, algorithm: "r U2 R' U' R U' r'" },
    { id: 7, algorithm: "r U R' U R U2 r'" },
    { id: 8, algorithm: "r' U' R U' R' U2 r" },
    { id: 9, algorithm: "R U R' U' R' F R2 U R' U' F'" },
    { id: 10, algorithm: "r U R' U R U' R' U' r' R U R U' R'" },
    { id: 11, algorithm: "r' R2 U R' U R U2 R' U R' r" },
    { id: 12, algorithm: "r R2 U' R U' R' U2 R U' r' R" },
    { id: 13, algorithm: "F U R U' R2 F' R U R U' R'" },
    { id: 14, algorithm: "R' F R U R' F' R y' R U' R'" },
    { id: 15, algorithm: "r' U' R' r U' R U r' U r" },
    { id: 16, algorithm: "r U r' R U R' U' r U' r'" },
    { id: 17, algorithm: "F R' F' R2 r' U R U' R' U' R' r" },
    { id: 18, algorithm: "r U R' U R U2 r2 U' R U' R' U2 r" },
    { id: 19, algorithm: "r U2 R' U' R U' r2 U2 R U R' U r" },
    { id: 20, algorithm: "r U R' U' r2 R2 U R U' R' U' R' r" },
    { id: 21, algorithm: "R U2 R' U' R U R' U' R U' R'" },
    { id: 22, algorithm: "R U2 R2 U' R2 U' R2 U2 R" },
    { id: 23, algorithm: "R U R' U R U2 R2 U' R U' R' U2 R" },
    { id: 24, algorithm: "r U R' U' r' F R F'" },
    { id: 25, algorithm: "F R' F' r U R U' r'" },
    { id: 26, algorithm: "R U2 R' U' R U' R'" },
    { id: 27, algorithm: "R U R' U R U2 R'" },
    { id: 28, algorithm: "r U R' U' r' R U R U' R'" },
    { id: 29, algorithm: "R U R' U' R U' R' F' U' F R U R'" },
    { id: 30, algorithm: "F U R U2 R' U' R U2 R' U' F'" },
    { id: 31, algorithm: "R' U' F U R U' R' F' R" },
    { id: 32, algorithm: "L U F' U' L' U L F L'" },
    { id: 33, algorithm: "R U R' U' R' F R F'" },
    { id: 34, algorithm: "R U R2 U' R' F R U R U' F'" },
    { id: 35, algorithm: "R U2 R2 F R F' R U2 R'" },
    { id: 36, algorithm: "R' U' R U' R' U R U x' R U' R' U" },
    { id: 37, algorithm: "F R U' R' U' R U R' F'" },
    { id: 38, algorithm: "R U R' U R U' R' U' R' F R F'" },
    { id: 39, algorithm: "r U' r' U' r y R U R' f'" },
    { id: 40, algorithm: "R' F R U R' U' F' U R" },
    { id: 41, algorithm: "R U R' U R U2 R' F R U R' U' F'" },
    { id: 42, algorithm: "R' U' R U' R' U2 R F R U R' U' F'" },
    { id: 43, algorithm: "F' U' L' U L F" },
    { id: 44, algorithm: "F U R U' R' F'" },
    { id: 45, algorithm: "F R U R' U' F'" },
    { id: 46, algorithm: "R' U' R' F R F' U R" },
    { id: 47, algorithm: "R' U' x R' U R U' R' U R U' x' U R" },
    { id: 48, algorithm: "F R U R' U' R U R' U' F'" },
    { id: 49, algorithm: "R x' U' z u2 R u2 R u2 R' u" },
    { id: 50, algorithm: "r' U r2 U' r2 U' r2 U r'" },
    { id: 51, algorithm: "F U R U' R' U R U' R' F'" },
    { id: 52, algorithm: "R U R' U R U' y R U' R' F'" },
    { id: 53, algorithm: "r' U2 R U R' U' R U R' U r" },
    { id: 54, algorithm: "r U2 R' U' R U R' U' R U' r'" },
    { id: 55, algorithm: "R U2 R2 U' R U' R' U2 F R F'" },
    { id: 56, algorithm: "r U r' U R U' R' U R U' R' r U' r'" },
    { id: 57, algorithm: "R U R' U' R' r U R U' r'" },
]
</script>
