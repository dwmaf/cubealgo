<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <!-- Hero Section -->
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                4x4 <span class="text-gradient">PLL Parity</span>
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Algoritma untuk mengatasi PLL parity yang unik di Rubik's Cube 4x4. Terjadi ketika dua edge piece yang
                perlu di-swap.
            </p>
        </section>

        <!-- PLL Parity Algorithms Grid -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    PLL Parity Cases</h2>
            </div>
            <div
                class="sticky top-[88px] z-40 my-8 mx-auto w-fit p-4 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-indigo-500/20 shadow-xl text-center font-mono text-sm sm:text-base text-indigo-400">
                <span class="text-slate-500 block sm:inline mb-1 sm:mb-0 sm:mr-2">Main PLL Parity [*] :</span>
                2R2 U2 2R2 Uw2 2R2 Uw2
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in pllParityAlgorithms" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="flex-shrink-0 relative w-[100px] h-[100px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 text-slate-500 pt-1">
                        <CubeIcon4x4 :caseId="algo.name" type="PLL" />
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
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Notasi Bantuan</h2>
            </div>

            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    class="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-indigo-500/15 hover:border-indigo-500/35 transition-all duration-300">
                    <!-- <div class="flex flex-col gap-2 flex-shrink-0">
                        <div
                            class="w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                            <img :src="`/movenotation/r.png`" alt="gambar belum ada"
                                class="w-full h-full object-contain" />
                        </div>
                    </div> -->
                    <div
                        class="flex-shrink-0 w-[90px] h-[90px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden text-slate-500">
                        <CubeIcon3D notation="2R" size="4" />
                    </div>
                    <div>
                        <h4 class="text-base font-semibold mb-1 text-white">2R
                        </h4>
                        <p class="text-xs text-slate-400">Putar layer kedua dari sisi kanan 90° searah jarum jam</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Understanding PLL Parity -->
        <section id="understanding" class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Memahami PLL Parity</h2>
            </div>

            <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Apa itu PLL Parity?</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">PLL Parity adalah kondisi di mana dua edge piece
                        yang bersebelahan perlu di-swap, yang tidak mungkin dilakukan dengan algoritma 3x3 standar.</p>
                </div>

                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Tanda-tanda PLL Parity</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">Anda memiliki PLL parity ketika semua corner sudah
                        benar posisinya, tapi ada dua edge yang perlu ditukar posisinya.</p>
                </div>

                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Tips Mengingat</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">Bayangkan algoritma sebagai "r2 U2" berulang
                        dengan variasi. Latih perlahan sampai muscle memory terbentuk.</p>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
useSeoMeta({
    title: '4x4 PLL Parity Algorithms - Cube Algorithm',
    description: 'Algoritma PLL Parity untuk Rubik\'s Cube 4x4. Pelajari cara mengatasi edge swap yang hanya terjadi di big cubes.'
})

const pllParityAlgorithms = [
    { name: 'Adj-C', image: 'Adj-C', algorithm: "R U R' U' R' F R2 U' R' U' R U R' F' U' [*]" },
    { name: 'Adj-E', image: 'Adj-E', algorithm: "R U R' U' [*] U' R U' R'" },
    { name: 'Ba', image: 'Ba', algorithm: "[*] U R U R' F' R U R' U' R' F R2 U' R'" },
    { name: 'Bb', image: 'Bb', algorithm: "R U R' U' R' F R2 U' R' [*] U R U R' F'" },
    { name: 'Ca', image: 'Ca', algorithm: "[*] U R' U2 R U2 R' F R U R' U' R' F' R2" },
    { name: 'Cb', image: 'Cb', algorithm: "[*] R U R' F' R U2 R' U2 R' F R U R U2 R'" },
    { name: 'Da', image: 'Da', algorithm: "R' U L' U2 R U' R' U2 R L U' [*]" },
    { name: 'Db', image: 'Db', algorithm: "R U R' F' R U R' U' R' F R2 U' R' [*]" },
    { name: 'Diag-C', image: 'Diag-C', algorithm: "F R U' R' U' R U R' F' U' [*] U' R U R' U' R' F R F'" },
    { name: 'Ka', image: 'Ka', algorithm: "[*] x R2 D2 R U R' D2 R U' R" },
    { name: 'Kb', image: 'Kb', algorithm: "[*] U x R' U R' D2 R U' R' D2 R2" },
    { name: 'M', image: 'M', algorithm: "R U R' U' R' F R2 U' R' U' R U R' F' [*]" },
    { name: 'O+', image: 'O+', algorithm: "M' U' M2 U' M2 U' M' U2 M2 [*]" },
    { name: 'O-', image: 'O-', algorithm: "M' U' M2 U' M2 U' M' U2 M2 U' [*]" },
    { name: 'Pa', image: 'Pa', algorithm: "R U R' F' R U R' U' R' F R2 U' R' U' [*]" },
    { name: 'Pb', image: 'Pb', algorithm: "[*] R U R' F' R U R' U' R' F R2 U' R'" },
    { name: 'Pure-E', image: 'Pure-E', algorithm: "[*]" },
    { name: 'Q', image: 'Q', algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D' x U [*]" },
    { name: 'Sa', image: 'Sa', algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F' U' [*]" },
    { name: 'Sb', image: 'Sb', algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F' [*]" },
    { name: 'W', image: 'W', algorithm: "R U' R U R U R U' R' U' R2 [*]" },
    { name: 'X', image: 'X', algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D' x [*]" },
]
</script>
