<template>
    <div class="w-full max-w-7xl mx-auto px-2">

        <AlgorithmPageHeader cube-size="4x4" algorithm-type="PLL Parity"
            description="Algoritma untuk mengatasi PLL parity yang unik di Rubik's Cube 4x4. Terjadi ketika dua edge piece yang perlu di-swap."
            :show-timer-button="false" />

        <section class="py-12">
            <AlgorithmSectionHeader title="PLL Parity Cases" :algorithm-count="22" />

            <div
                class="sticky top-[88px] z-40 my-8 mx-auto w-fit p-4 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-indigo-500/20 shadow-xl text-center font-mono text-sm sm:text-base text-indigo-400">
                <span class="text-slate-500 block sm:inline mb-1 sm:mb-0 sm:mr-2">Main PLL Parity [*] :</span>
                2R2 U2 2R2 Uw2 2R2 Uw2
            </div>


            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in pllParityAlgorithms" :key="algo.name" :algorithm="algo"
                    :icon-component="CubeIcon4x4" algorithm-type="PLL" icon-size="w-[100px] h-[100px]" />
            </div>
        </section>
        <section class="py-12">
            <AlgorithmSectionHeader title="Notasi Bantuan" />
            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <NotationCard v-for="notation in helperNotations" :key="notation.symbol" :title="notation.symbol"
                    :description="notation.description" :icon-component="CubeIcon3D"
                    :icon-props="{ notation: notation.symbol, size: notation.size }" />
            </div>
        </section>

        <section id="understanding" class="py-12">

            <AlgorithmSectionHeader title="Memahami PLL Parity" />
            <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
                <AppCard title="Apa itu PLL Parity?" title-class="text-lg text-indigo-500"
                    description="PLL Parity adalah kondisi di mana dua edge piece yang bersebelahan perlu di-swap, yang tidak mungkin dilakukan dengan algoritma 3x3 standar." />

                <AppCard title="Tanda-tanda PLL Parity" title-class="text-lg text-indigo-500"
                    description="Anda memiliki PLL parity ketika semua corner sudah benar posisinya, tapi ada dua edge yang perlu ditukar posisinya." />

                <AppCard title="Tips Mengingat" title-class="text-lg text-indigo-500"
                    description='Bayangkan algoritma sebagai "r2 U2" berulang dengan variasi. Latih perlahan sampai muscle memory terbentuk.' />
            </div>
        </section>

    </div>
</template>

<script setup>
import CubeIcon4x4 from '~/components/CubeIcon4x4.vue'
import CubeIcon3D from '~/components/CubeIcon3D.vue'
useSeoMeta({
    title: '4x4 PLL Parity Algorithms - Cube Algorithm',
    description: 'Algoritma PLL Parity untuk Rubik\'s Cube 4x4. Pelajari cara mengatasi edge swap yang hanya terjadi di big cubes.'
})

const helperNotations = [
    { symbol: '2R', image: '2R', size:4, description: 'Putar layer kedua dari sisi kanan 90° searah jarum jam' },
]

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
