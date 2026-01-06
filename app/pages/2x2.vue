<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <AlgorithmPageHeader cube-size="2x2" algorithm-type="OLL & PBL Algorithms"
            description="Kumpulan algoritma lengkap untuk menyelesaikan Rubik's Cube 2x2 menggunakan metode Ortega."
            timer-cube-param="2x2" />

        <section class="py-12">
            <AlgorithmSectionHeader title="2x2 OLL Cases" :algorithm-count="7"/>

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in oll2x2" :key="algo.name" :algorithm="algo" :icon-component="CubeIcon2x2"
                    algorithm-type="OLL" />
            </div>
        </section>

        <section class="py-12">
            <AlgorithmSectionHeader title="2x2 PBL Cases" :algorithm-count="2" />

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in pbl2x2" :key="algo.name" :algorithm="algo" :icon-component="CubeIcon2x2"
                    algorithm-type="PBL" algorithm-class="p-3" />
            </div>
        </section>
    </div>
</template>

<script setup>
import CubeIcon2x2 from '~/components/CubeIcon2x2.vue'

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
    { name: 'Opp', setup: "Same as Algo", algorithm: "R U' R' U' F2 U' R U R' U F2" },
]
</script>
