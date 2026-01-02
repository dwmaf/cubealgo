<template>
    <div class="w-full max-w-7xl mx-auto px-2">
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
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4 ml-4">
                <h2
                    class="relative text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    2x2 OLL Cases</h2>
                <span
                    class=" text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">7
                    Algorithms</span>
            </div>

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in oll2x2" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                        <CubeIcon2x2 :caseName="algo.name" type="OLL" />
                    </div>
                    <div class="flex-1 space-y-2 min-w-0">
                        <div class="flex items-center justify-between">
                            <h4 class="text-base font-bold text-white">{{ algo.name }}</h4>
                        </div>

                        <div v-if="algo.setup === 'Same as Algo'"
                            class="flex items-center gap-2 bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
                            <span
                                class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 shrink-0">Setup</span>
                            <span class="text-xs text-indigo-200/70 italic">Same as Algorithm</span>
                        </div>

                        <div v-else-if="algo.setup"
                            class="flex flex-col gap-1 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                            <div class="flex items-center gap-2">
                                <span
                                    class="text-[10px] font-bold uppercase tracking-wider text-orange-400/90 shrink-0">Setup</span>
                                <span v-if="algo.setup_name" class="text-[10px] text-slate-400 font-medium">({{
                                    algo.setup_name }})</span>
                            </div>
                            <code
                                class="text-xs font-mono text-slate-300 break-all leading-tight">{{ algo.setup }}</code>
                        </div>

                        <div
                            class="text-sm p-2 rounded-xl break-all leading-relaxed font-mono bg-[#0a0a0f] text-indigo-100 border border-indigo-500/20 shadow-inner">
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
                    class="ml-4 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">2
                    Algorithms</span>
            </div>

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in pbl2x2" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[80px] h-[80px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                        <CubeIcon2x2 :caseName="algo.name" type="PBL" />
                    </div>
                    <div class="flex-1 space-y-2 min-w-0">
                        <div class="flex items-center justify-between">
                            <h4 class="text-base font-bold text-white">{{ algo.name }}</h4>
                        </div>

                        <div v-if="algo.setup === 'Same as Algo'"
                            class="flex items-center gap-2 bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
                            <span
                                class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 shrink-0">Setup</span>
                            <span class="text-xs text-indigo-200/70 italic">Same as Algorithm</span>
                        </div>

                        <div v-else-if="algo.setup"
                            class="flex flex-col gap-1 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                            <div class="flex items-center gap-2">
                                <span
                                    class="text-[10px] font-bold uppercase tracking-wider text-orange-400/90 shrink-0">Setup</span>
                                <span v-if="algo.setup_name" class="text-[10px] text-slate-400 font-medium">({{
                                    algo.setup_name }})</span>
                            </div>
                            <code
                                class="text-xs font-mono text-slate-300 break-all leading-tight">{{ algo.setup }}</code>
                        </div>

                        <div
                            class="text-sm p-3 rounded-xl break-all leading-relaxed font-mono bg-[#0a0a0f] text-indigo-100 border border-indigo-500/20 shadow-inner">
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
    { name: 'Sune', setup_name: "Antisune", setup: "R U2 R' U' R U' R'", algorithm: "R U R' U R U2 R'" },
    { name: 'Antisune', setup_name: "Sune", setup: "R U R' U R U2 R'", algorithm: "R U2 R' U' R U' R'" },
    { name: 'H', setup: "Same as Algo", algorithm: "R2 U2 R U2 R2" },
    { name: 'Pi', setup: "Same as Algo", algorithm: "R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'T', setup_name: "L", setup: "F R' F' R U R U' R'", algorithm: "R U R' U' R' F R F'" },
    { name: 'U', setup: "Same as Algo", algorithm: "F R U R' U' F'" },
    { name: 'L', setup_name: "T", setup: "R U R' U' R' F R F'", algorithm: "F R' F' R U R U' R'" }
]

const pbl2x2 = [
    { name: 'Adj', setup: "Same as Algo", algorithm: "R' F R' F2 R U' R' F2 R2" },
    { name: 'Opp', setup: "Same as Algo", algorithm: "R U' R' U' F2 U' R U R' D R2" },
]
</script>
