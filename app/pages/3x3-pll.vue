<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                3x3 <span class="text-gradient">PLL</span> Algorithms
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Permutation of Last Layer - 21 algoritma untuk memposisikan semua piece di layer teratas dengan benar.
            </p>
        </section>

        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    All PLL Cases</h2>
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="pll in pllAlgorithms" :key="pll.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="flex-shrink-0 relative w-[98px] h-[98px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 text-slate-500 pt-1">
                        <CubeIcon3x3 :caseId="pll.name" type="PLL" />
                    </div>
                    <!-- <div class="">
                        <div
                            class="relative w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                            <img :src="`/3x3pll/${pll.name}.png`" :alt="`PLL ${pll.name}`"
                                class="w-full h-full object-contain p-2" loading="lazy" />
                        </div>
                    </div> -->
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-semibold text-white mb-2">{{ pll.name }} Perm</h4>
                        <div
                            class="text-xs p-2 px-3 rounded-lg break-all leading-relaxed font-mono bg-[#0a0a0f] text-slate-400">
                            {{ pll.algorithm }}</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useSeoMeta({
    title: '3x3 PLL Algorithms - Cube Algorithm',
    description: '21 algoritma PLL (Permutation of Last Layer) untuk Rubik\'s Cube 3x3. Pelajari semua case dengan gambar dan notasi.'
})

const pllAlgorithms = [
    // Edge Only
    { name: 'Ua', algorithm: "R U' R U R U R U' R' U' R2" },
    { name: 'Ub', algorithm: "L' U L' U' L' U' L' U L U L2" },
    { name: 'H', algorithm: "M2 U M2 U2 M2 U M2" },
    { name: 'Z', algorithm: "M' U M2 U M2 U M' U2 M2" },

    // Corner Only
    { name: 'Aa', algorithm: "x R' U R' D2 R U' R' D2 R2" },
    { name: 'Ab', algorithm: "x R2 D2 R U R' D2 R U' R" },
    { name: 'E', algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D'" },

    // Swap One Corner and One Edge
    { name: 'Ra', algorithm: "R U' R' U' R U R D R' U' R D' R' U2 R'" },
    { name: 'Rb', algorithm: "R' U2 R' D' R U' R' D R U R U' R' U' R" },
    { name: 'Ja', algorithm: "R' U2 R U R' U2 L U' R U L'" },
    { name: 'Jb', algorithm: "R U2 R' U' R U2 L' U R' U' r" },
    { name: 'T', algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    { name: 'F', algorithm: "R U R' U' R' U R U2 R' L' U R U' L U' R U' R'" },

    // Swap Two Corners and Two Edges
    { name: 'V', algorithm: "R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U'" },
    { name: 'Y', algorithm: "R2 U' R' U R U' x' U' z' U' R U' R' U' r B" },
    { name: 'Na', algorithm: "R U R' U R U2 R' U' R U2 L' U R' U' L U' R U' R'" },
    { name: 'Nb', algorithm: "R' U' R U' R' U2 R U R' U2 L U' R U L' U R' U R" },

    // G Perms (Adjacent Corner and Edge Swap)
    { name: 'Ga', algorithm: "R2 U R' U R' U' R U' R2 U' D R' U R D'" },
    { name: 'Gb', algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D" },
    { name: 'Gc', algorithm: "R2 U' R U' R U R' U R2 U D' R U' R' D" },
    { name: 'Gd', algorithm: "R U R' U' D R2 U' R U' R' U R' U R2 D'" },
]
</script>
