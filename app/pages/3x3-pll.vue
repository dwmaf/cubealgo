<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                3x3 <span class="text-gradient">PLL</span> Algorithms
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Permutation of Last Layer - 21 algoritma untuk memposisikan semua piece di layer teratas dengan benar.
            </p>
        </section>

        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap ml-4 gap-4">
                <h2
                    class="relative  text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    All PLL Cases</h2>
                <span
                    class=" text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">21
                    Algorithms</span>
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="pll in pllAlgorithms" :key="pll.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="flex-shrink-0 relative w-[98px] h-[98px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 text-slate-500 pt-1">
                        <CubeIcon3x3 :caseId="pll.name" type="PLL" />
                    </div>

                    <div class="flex-1 space-y-2 min-w-0">
                        <h4 class="text-sm font-semibold text-white">{{ pll.name }} Perm</h4>
                        <div v-if="pll.setup === 'Same as Algo'"
                            class="flex items-center gap-2 bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
                            <span
                                class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 shrink-0">Setup</span>
                            <span class="text-xs text-indigo-200/70 italic">Same as Algorithm</span>
                        </div>

                        <div v-else-if="pll.setup"
                            class="flex flex-col gap-1 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                            <div class="flex items-center gap-2">
                                <span
                                    class="text-[10px] font-bold uppercase tracking-wider text-orange-400/90 shrink-0">Setup</span>
                                <span v-if="pll.setup_name" class="text-[10px] text-slate-400 font-medium">({{
                                    pll.setup_name }})</span>
                            </div>
                            <code
                                class="text-xs font-mono text-slate-300 break-all leading-tight">{{ pll.setup }}</code>
                        </div>
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
    { name: 'Ua', setup_name: "PLL Ub", setup: "L' U L' U' L' U' L' U L U L2", algorithm: "R U' R U R U R U' R' U' R2" },
    { name: 'Ub', setup_name: "PLL Ua", setup: "R U' R U R U R U' R' U' R2", algorithm: "L' U L' U' L' U' L' U L U L2" },
    { name: 'H', setup: "Same as Algo", algorithm: "M2 U M2 U2 M2 U M2" },
    { name: 'Z', setup: "Same as Algo", algorithm: "M' U M2 U M2 U M' U2 M2" },
    { name: 'Aa', setup_name: "PLL Ab", setup: "x R2 D2 R U R' D2 R U' R", algorithm: "x R' U R' D2 R U' R' D2 R2" },
    { name: 'Ab', setup_name: "PLL Aa", setup: "x R' U R' D2 R U' R' D2 R2", algorithm: "x R2 D2 R U R' D2 R U' R" },
    { name: 'E', setup: "Same as Algo", algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D'" },
    { name: 'Ra', setup: "Same as Algo", algorithm: "y' L U2 L' U2 L F' L' U' L U L F L2 U" },
    { name: 'Rb', setup: "Same as Algo", algorithm: "R' U2 R U2 R' F (R U R' U') R' F' R2 U'" },
    { name: 'Ja', setup: "Same as Algo", algorithm: "R' U2 R U R' U2 L U' R U L'" },
    { name: 'Jb', setup: "Same as Algo", algorithm: "R U2 R' U' R U2 L' U R' U' L" },
    { name: 'T', setup_name: "OLL 33 + OLL 37", setup: "(R U R' U' R' F R F') (F R U' R' U' R U R' F')", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    { name: 'F', setup: "Same as Algo", algorithm: "y (R' U' F') (R U R' U') R' F R2 (U' R' U') (R U R' U) R" },
    { name: 'V', setup: "Same as Algo", algorithm: "(R' U R' U') y (R' F' R2 U') (R' U R' F R F)" },
    { name: 'Y', setup_name: "OLL 37 + OLL 33", setup: "(F (R U' R' U' R) U R' F') (R U R' U' R' F R F')", algorithm: "(F (R U' R' U' R) U R' F') (R U R' U' R' F R F')" },
    { name: 'Na', setup: "Same as Algo", algorithm: "(l' D' l U2) (l' D' l U2) (l' D' l U2) (l' D' l U2) (l' D' l U2)" },
    { name: 'Nb', setup: "Same as Algo", algorithm: "(r D r' U2) (r D r' U2) (r D r' U2) (r D r' U2) (r D r' U2)" },
    { name: 'Ga', setup: "Same as Algo", algorithm: "R2 U R' U R' U' R U' R2 U' D R' U R D'" },
    { name: 'Gb', setup: "Same as Algo", algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D" },
    { name: 'Gc', setup: "Same as Algo", algorithm: "R2 U' R U' R U R' U R2 U D' R U' R' D" },
    { name: 'Gd', setup: "Same as Algo", algorithm: "R U R' U' D R2 U' R U' R' U R' U R2 D'" },
]

</script>
