<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <AlgorithmPageHeader cube-size="3x3" algorithm-type="OLL Algorithms"
            description="Orientation of Last Layer - 57 algoritma untuk mengorientasikan semua stiker kuning di layer teratas."
            timer-cube-param="3x3" />

        <section class="py-12">
            <AlgorithmSectionHeader :title="sortBy === 'number' ? 'All OLL Cases' : 'Grouped by Shape'"
                :algorithm-count="57">
                <div class="flex bg-slate-800/50 ml-4 p-1 rounded-xl border border-slate-700/50">
                    <button @click="sortBy = 'number'"
                        :class="[sortBy === 'number' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white']"
                        class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                        By Number
                    </button>
                    <button @click="sortBy = 'shape'"
                        :class="[sortBy === 'shape' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white']"
                        class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                        By Shape
                    </button>
                </div>
            </AlgorithmSectionHeader>

            <div v-if="sortBy === 'number'" class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="oll in ollAlgorithms" :key="oll.id" :algorithm="{ ...oll, name: `OLL ${oll.id}` }"
                    :icon-component="CubeIcon3x3" algorithm-type="OLL" />
            </div>

            <!-- Grouped List (By Shape) -->
            <div v-else class="space-y-12 py-4">
                <div v-for="group in sortShape" :key="group.sub_title_name" class="space-y-6">
                    <h3 class="text-xl font-bold text-white flex items-center gap-3">
                        <span class="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></span>
                        <span
                            class="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm tracking-widest uppercase">
                            {{ group.sub_title_name }}
                        </span>
                        <span class="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent"></span>
                    </h3>
                    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <template v-for="id in group.list" :key="id">
                            <AlgorithmCard v-if="getOllById(id)" :algorithm="{ ...getOllById(id), name: `OLL ${id}` }"
                                :icon-component="CubeIcon3x3" algorithm-type="OLL" />
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import CubeIcon3x3 from '~/components/CubeIcon3x3.vue'

useSeoMeta({
    title: '3x3 OLL Algorithms - Cube Algorithm',
    description: '57 algoritma OLL (Orientation of Last Layer) untuk Rubik\'s Cube 3x3. Pelajari semua case dengan gambar dan notasi.'
})

const ollAlgorithms = [
    { id: 1, setup: "F R' F' R U2' F R' F' R2' U2' R'", algorithm: "R U2 R2 F R F' U2 R' F R F'" },
    { id: 2, setup: "Same as Algo", algorithm: "r U r' U2 r U2 R' U2 R U' r'" },
    { id: 3, setup_name: "OLL 4", setup: "r' R U' r U2 r' U' R U' R2 r", algorithm: "r' R2 U R' U r U2 r' U R' r" },
    { id: 4, setup_name: "OLL 3", setup: "r' R2 U R' U r U2 r' U R' r", algorithm: "r' R U' r U2 r' U' R U' R2 r" },
    { id: 5, setup_name: "OLL 8", setup: "r' U' R U' R' U2 r", algorithm: "r' U2 R U R' U r" },
    { id: 6, setup_name: "OLL 7", setup: "r U R' U R U2 r'", algorithm: "r U2 R' U' R U' r'" },
    { id: 7, setup_name: "OLL 6", setup: "r U2 R' U' R U' r'", algorithm: "r U R' U R U2 r'" },
    { id: 8, setup_name: "OLL 5", setup: "r' U2 R U R' U r", algorithm: "r' U' R U' R' U2 r" },
    { id: 9, setup_name: "OLL 13", setup: "F U R U' R2 F' R U R U' R'", algorithm: "R U R' U' R' F R2 U R' U' F'" },
    { id: 10, setup_name: "OLL 14", setup: "R' F R U R' F' R y' R U' R'", algorithm: "r U R' U R U' R' U' r' R U R U' R'" },
    { id: 11, setup: "M U' R U2 R' U' R U' R2' r", algorithm: "M (R U R' U R U2 R') U M'" },
    { id: 12, setup: "M' U R' U2 R U R' U R2 r'", algorithm: "M' (R' U' R U' R' U2 R) U' M" },
    { id: 13, setup_name: "OLL 9", setup: "R U R' U' R' F R2 U R' U' F'", algorithm: "F U R U' R2 F' R U R U' R'" },
    { id: 14, setup: "F U F' R' F R U' R' F' R", algorithm: "R' F R U R' F' R y' R U' R'" },
    { id: 15, setup_name: "OLL 16", setup: "R' F R U R' U' F' R U' R' U2 R", algorithm: "y2 R' F' R L' U' L U R' F R" },
    { id: 16, setup: "r U r' U R U' M' U' r'", algorithm: "y2 R' F R U R' U' F' R U' R' U2 R" },
    { id: 17, setup_name: "OLL 19", setup: "R' U2 F (R U R' U') F2 U2 F R", algorithm: "y2 (R U R' U) (R' F R F') U2 (R' F R F')" },
    { id: 18, setup_name: "OLL 17", setup: "(R U R' U) (R' F R F') U2 (R' F R F')", algorithm: "r U R' U R U2 r' U2 R U2 R' U2 R' F R F'" },
    { id: 19, setup_name: "OLL 18", setup: "r U R' U R U2 r' U2 R U2 R' U2 R' F R F'", algorithm: "y2 R' U2 F (R U R' U') F2 U2 F R" },
    { id: 20, setup: "(r U R' U') M2 (U R U' R' U') M'", algorithm: "(r U R' U') M2 (U R U' R' U') M'" },
    { id: 21, setup: "Same as Algo", algorithm: "R U2 R' U' R U R' U' R U' R'" },
    { id: 22, setup: "Same as Algo", algorithm: "R U2 R2 U' R2 U' R2 U2 R" },
    { id: 23, setup: "R U2' R D R' U2' R D' R2'", algorithm: "R2 D (R' U2 R) D' (R' U2 R')" },
    { id: 24, setup_name: "OLL 25", setup: "F R' F' r U R U' r'", algorithm: "r U R' U' r' F R F'" },
    { id: 25, setup_name: "OLL 24", setup: "r U R' U' r' F R F'", algorithm: "F R' F' r U R U' r'" },
    { id: 26, setup_name: "Sune", setup: "R U R' U R U2 R'", algorithm: "R U2 R' U' R U' R'" },
    { id: 27, setup_name: "Antisune", setup: "R U2 R' U' R U' R'", algorithm: "R U R' U R U2 R'" },
    { id: 28, setup_name: "OLL 57", setup: "(R U R' U') M' (U R U' r')", algorithm: "r U R' U' r' R U R U' R'" },
    { id: 29, setup: "M F R' F' R U R U' R' U' M'", algorithm: "R U (R' U' R U' R') F' U' F R U R'" },
    { id: 30, setup: "F (U R U2' R') (U R U2' R') U' F'", algorithm: "F U (R U2 R' U') (R U2 R' U') F'" },
    { id: 31, setup_name: "OLL 40", setup: "R' F R U R' U' F' U R", algorithm: "R' U' F U R U' R' F' R" },
    { id: 32, setup_name: "OLL 39", setup: "r U' r' U' r y R U R' f'", algorithm: "L U F' U' L' U L F L'" },
    { id: 33, setup_name: "OLL 37", setup: "F R U' R' U' R U R' F'", algorithm: "R U R' U' R' F R F'" },
    { id: 34, setup: "F U R' U' R' F' R U R2' U' R'", algorithm: "R U R2 U' R' F R U R U' F'" },
    { id: 35, setup: "R U2' R' F R' F' R2' U2' R'", algorithm: "R U2 R2 F R F' R U2 R'" },
    { id: 36, setup: "F' L F (L' U' L' U') (L U L' U L) y2'", algorithm: "y2 (L' U' L U' L') U L U L (F' L' F)" },
    { id: 37, setup_name: "OLL 33", setup: "R U R' U' R' F R F'", algorithm: "F (R U' R' U' R) U R' F'" },
    { id: 38, setup: "F R' F' R U R U R' U' R U' R'", algorithm: "(R U R' U R) (U' R' U' R') (F R F')" },
    { id: 39, setup_name: "OLL 32", setup: "L U F' U' L' U L F L'", algorithm: "r U' r' U' r y R U R' f'" },
    { id: 40, setup_name: "OLL 31", setup: "R' U' F U R U' R' F' R", algorithm: "R' F R U R' U' F' U R" },
    { id: 41, setup: "F U R U' R' F' R U2' R' U' R U' R' y2'", algorithm: "R U R' U R U2 R' F R U R' U' F'" },
    { id: 42, setup: "F U R U' R' F' R' U2' R U R' U R", algorithm: "(R' U' R U') (R' U2 R) F (R U R' U') F'" },
    { id: 43, setup_name: "OLL 46", setup: "R' U' R' F R F' U R", algorithm: "f' L' U' L U f" },
    { id: 44, setup: "f U R U' R' f'", algorithm: "f (R U R' U') f'" },
    { id: 45, setup_name: "OLL 44", setup: "F U R U' R' F'", algorithm: "F R U R' U' F'" },
    { id: 46, setup: "R' U' F R' F' R U R", algorithm: "R' U' R' F R F' U R" },
    { id: 47, setup: "F' U' L' U L U' L' U L F", algorithm: "F' (L' U' L U) (L' U' L U) F" },
    { id: 48, setup_name: "OLL 51", setup: "f (R U R' U') (R U R' U') f'", algorithm: "F (R U R' U') (R U R' U') F'" },
    { id: 49, setup_name: "OLL 50", setup: "r' U (r2 U') (r2 U') (r2) U r'", algorithm: "y2 r U' (r2 U) (r2 U) (r2) U' r" },
    { id: 50, setup: "r U' r2' U r2' U r2' U' r", algorithm: "r' U (r2 U') (r2 U') (r2) U r'" },
    { id: 51, setup_name: "OLL 48", setup: "F (R U R' U') (R U R' U') F'", algorithm: "f (R U R' U') (R U R' U') f'" },
    { id: 52, setup: "Same as Algo", algorithm: "R U R' U R U' y R U' R' F'" },
    { id: 53, setup: "Same as Algo", algorithm: "(r' U' R U') (R' U R U') (R' U2 r)" },
    { id: 54, setup: "Same as Algo", algorithm: "(r U R' U) (R U' R' U) (R U2 r')" },
    { id: 55, setup: "F R' F' U2' R U R' U R2' U2' R'", algorithm: "R U2 R2 (U' R U' R') U2 (F R F')" },
    { id: 56, setup: "r U r' R U R' U' R U R' U' r U' r'", algorithm: "(r U r') (U R U' R') (U R U' R') (r U' r')" },
    { id: 57, setup_name: "OLL 28", setup: "r U R' U' r' R U R U' R'", algorithm: "(R U R' U') M' (U R U' r')" },
]
const sortBy = ref('number')

const getOllById = (id) => {
    return ollAlgorithms.find(oll => oll.id === id)
}

const sortShape = [
    { sub_title_name: "Dot", list: [1, 2, 3, 4, 17, 18, 19, 20] },
    { sub_title_name: "Box", list: [5, 6, 35, 37] },
    { sub_title_name: "Thunder", list: [7, 8, 11, 12, 29, 30, 41, 42] },
    { sub_title_name: "Big Thunder", list: [39, 40] },
    { sub_title_name: "W", list: [36, 38] },
    { sub_title_name: "Big L", list: [13, 14, 15, 16] },
    { sub_title_name: "Small L", list: [47, 48, 49, 50, 53, 54] },
    { sub_title_name: "Fish", list: [9, 10, 28] },
    { sub_title_name: "Chair", list: [31, 32, 43, 44] },
    { sub_title_name: "Awkward", list: [21, 22, 23, 24, 25, 26, 27] },
    { sub_title_name: "Line", list: [33, 34, 51, 52, 55, 56, 57, 45, 46] },
]

</script>
