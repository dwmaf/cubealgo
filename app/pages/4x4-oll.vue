<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <AlgorithmPageHeader cube-size="4x4" algorithm-type="OLL Parity" description="Algoritma khusus untuk mengatasi OLL parity yang hanya terjadi di Rubik's Cube 4x4. Parity terjadi
                karena reduksi center dan edge pairing." :show-timer-button="false" />

        <section class="py-12">
            <AlgorithmSectionHeader title="OLL Parity Cases" :algorithm-count="27" />
            <div
                class="sticky top-[88px] z-40 my-8 mx-auto w-fit p-4 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-indigo-500/20 shadow-xl text-center font-mono text-sm sm:text-base text-indigo-400">
                <span class="text-slate-500 block sm:inline mb-1 sm:mb-0 sm:mr-2">Main OLL Parity [*] :</span>
                Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in ollParityAlgorithms" :key="algo.name" :algorithm="algo"
                    :icon-component="CubeIcon4x4" algorithm-type="OLL" icon-size="w-[100px] h-[100px]" />
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

        <section class="py-12">
            <AlgorithmSectionHeader title="Memahami OLL Parity" />

            <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
                <AppCard title="Apa itu OLL Parity?" title-class="text-lg text-indigo-500"
                    description="OLL Parity adalah kondisi di mana satu edge di layer teratas memiliki orientasi yang salah (flipped), yang tidak mungkin terjadi pada cube 3x3 standar." />

                <AppCard title="Mengapa Terjadi?" title-class="text-lg text-indigo-500"
                    description="Parity terjadi karena proses reduksi (menyatukan center dan edge) pada 4x4 bisa menghasilkan state yang 'impossible' jika dilihat sebagai 3x3." />

                <AppCard title="Kapan Menggunakan?" title-class="text-lg text-indigo-500"
                    description="Gunakan algoritma ini ketika Anda sampai pada langkah OLL dan menemukan satu edge yang flipped secara individual." />
            </div>
        </section>
    </div>
</template>

<script setup>
import CubeIcon4x4 from '~/components/CubeIcon4x4.vue'
import CubeIcon3D from '~/components/CubeIcon3D.vue'
useSeoMeta({
    title: '4x4 OLL Parity Algorithms - Cube Algorithm',
    description: 'Algoritma OLL Parity untuk Rubik\'s Cube 4x4. Pelajari cara mengatasi edge flip yang hanya terjadi di big cubes.'
})
const helperNotations = [
    { symbol: '3Rw', image: '3Rw', size:4, description: 'Putar ketiga layer dari sisi kanan 90° searah jarum jam sekaligus' },
]
const ollParityAlgorithms = [
    { name: 'H (FB)', image: 'H (FB)', algorithm: "[*] R2 D' R U2 R' D R U2 R" },
    { name: 'H (LR)', image: 'H (LR)', algorithm: "[*] R U R' U R U' R' U R U2 R'" },

    { name: 'Pi (B)', image: 'Pi (B)', algorithm: "[*] U' 3Rw U R' U' 3Rw' F R F'" },
    { name: 'Pi (F)', image: 'Pi (F)', algorithm: "[*] U' R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'Pi (L)', image: 'Pi (L)', algorithm: "[*] R' U2 R U R' U R" },
    { name: 'Pi (R)', image: 'Pi (R)', algorithm: "[*] U R' U' R U' R' U2 R" },

    { name: 'Antisune (BL)', image: 'Antisune (BL)', algorithm: "R' F R F' [*] R U' R'" },
    { name: 'Antisune (BR)', image: 'Antisune (BR)', algorithm: "F R U R' U' F' [*]" },
    { name: 'Antisune (FL)', image: 'Antisune (FL)', algorithm: "[*] R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'Antisune (FR)', image: 'Antisune (FR)', algorithm: "[*] U' R U2 R' U' R U' R'" },

    { name: 'Sune (BL)', image: 'Sune (BL)', algorithm: "F' L' U' L U F [*]" },
    { name: 'Sune (BR)', image: 'Sune (BR)', algorithm: "L F' L' F [*] L' U L" },
    { name: 'Sune (FL)', image: 'Sune (FL)', algorithm: "[*] R U R' U R U2 R'" },
    { name: 'Sune (FR)', image: 'Sune (FR)', algorithm: "M' U R U' 3Rw' [*] U R U2 R'" },

    { name: 'L (BL)', image: 'L (BL)', algorithm: "[*] R' U' R U' R' U2 R" },
    { name: 'L (BR)', image: 'L (BR)', algorithm: "[*] U R' U2 R U R' U R" },
    { name: 'L (FL)', image: 'L (FL)', algorithm: "L U L' [*] L U' L'" },
    { name: 'L (FR)', image: 'L (FR)', algorithm: "R' U' R [*] R' U R" },

    { name: 'T (B)', image: 'T (B)', algorithm: "[*] U R U2 R2 U' R2 U' R2 U2 R" },
    { name: 'T (F)', image: 'T (F)', algorithm: "R U R' U' R [*] R' U R U' R'" },
    { name: 'T (L)', image: 'T (L)', algorithm: "F R U' R' U' R U R' F' [*]" },
    { name: 'T (R)', image: 'T (R)', algorithm: "[*] R U R' U' R' F R F'" },

    { name: 'U (B)', image: 'U (B)', algorithm: "M [*] M'" },
    { name: 'U (F)', image: 'U (F)', algorithm: "[*]" },
    { name: 'U (L)', image: 'U (L)', algorithm: "[*] R U2 R' U' R U' R'" },
    { name: 'U (R)', image: 'U (R)', algorithm: "[*] U' R U R' U R U2 R'" },

    { name: 'Solved', image: 'Solved', algorithm: "R U2 R' U' [*] F R' F' R" },
]
</script>
