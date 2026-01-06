<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <AlgorithmPageHeader cube-size="3x3" algorithm-type="PLL Algorithms"
            description="Permutation of Last Layer - 21 algoritma untuk memposisikan semua piece di layer teratas dengan benar."
            timer-cube-param="3x3" />

        <section class="py-12">
            <AlgorithmSectionHeader title="All PLL Cases" :algorithm-count="21" />

            <div class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in pllAlgorithms" :key="algo.name" :algorithm="algo" :icon-component="CubeIcon3x3"
                    algorithm-type="PLL" />
            </div>
        </section>
    </div>
</template>

<script setup>
import CubeIcon3x3 from '~/components/CubeIcon3x3.vue'
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
