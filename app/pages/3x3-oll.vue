<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <LazyAlgorithmPageHeader cube-size="3x3" algorithm-type="OLL Algorithms"
            description="Orientation of Last Layer - 57 algoritma untuk mengorientasikan semua stiker kuning di layer teratas."
            timer-cube-param="3x3" />

        <section class="py-12">
            <LazyAlgorithmSectionHeader
                :title="sortBy === 'number' ? 'All OLL Cases' : sortBy === 'preference' ? 'My Preference Order' : 'Grouped by Shape'"
                :algorithm-count="57">
                <div class="flex items-center gap-3 flex-wrap">
                    <div class="flex bg-slate-100 dark:bg-slate-800/50 ml-4 p-1 rounded-xl border border-slate-200 dark:border-slate-700/50">
                        <button @click="sortBy = 'number'"
                            :class="[sortBy === 'number' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white']"
                            class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                            By Number
                        </button>
                        <button @click="sortBy = 'shape'"
                            :class="[sortBy === 'shape' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white']"
                            class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                            By Shape
                        </button>
                        <button @click="sortBy = 'preference'"
                            :class="[sortBy === 'preference' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white']"
                            class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                            By Preference
                        </button>
                    </div>

                    <!-- Hide Solution Toggle -->
                    <button @click="hideSolution = !hideSolution"
                        :class="[hideSolution ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 border-indigo-500' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700/50']"
                        class="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 bg-slate-100 dark:bg-slate-800/50 border">
                        {{ hideSolution ? 'Solution Hidden' : 'Hide Solution' }}
                    </button>
                </div>
            </LazyAlgorithmSectionHeader>

            <div v-if="sortBy === 'number'" class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <LazyAlgorithmCard v-for="oll in ollAlgorithms" :key="oll.id" :algorithm="{ ...oll, name: `OLL ${oll.id}` }"
                    :icon-component="CubeIcon3x3" algorithm-type="OLL" :hide-solution="hideSolution" />
            </div>

            <!-- Preference List (My Order) -->
            <div v-else-if="sortBy === 'preference'" class="grid gap-4 py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <LazyAlgorithmCard v-for="oll in preferenceOrdered" :key="oll.id"
                    :algorithm="{ ...oll, name: `OLL ${oll.id}` }" :icon-component="CubeIcon3x3" algorithm-type="OLL"
                    :hide-solution="hideSolution" />
            </div>

            <!-- Grouped List (By Shape) -->
            <div v-else class="space-y-12 py-4">
                <div v-for="group in sortShape" :key="group.sub_title_name" class="space-y-6">
                    <h3 class="text-xl font-bold text-white flex items-center gap-3">
                        <span class="h-px flex-1 bg-linear-to-r from-indigo-500/50 to-transparent"></span>
                        <span
                            class="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm tracking-widest uppercase font-black">
                            {{ group.sub_title_name }}
                        </span>
                        <span class="h-px flex-1 bg-linear-to-l from-indigo-500/50 to-transparent"></span>
                    </h3>
                    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <template v-for="id in group.list" :key="id">
                            <LazyAlgorithmCard v-if="getOllById(id)" :algorithm="{ ...getOllById(id), name: `OLL ${id}` }"
                                :icon-component="CubeIcon3x3" algorithm-type="OLL" :hide-solution="hideSolution" />
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
    { id: 2, setup: "Same as Algo", algorithm: "F R U R' U' S R U R' U' f'" },
    { id: 3, setup_name: "OLL 4", setup: "r' (R U' r U2 r' U' R) U' R2 r", algorithm: "r' R2 U (R' U r U2 r' U R') r" },
    { id: 4, setup_name: "OLL 3", setup: "r' R2 U (R' U r U2 r' U R') r", algorithm: "r' (R U' r U2 r' U' R) U' R2 r" },
    { id: 5, setup_name: "OLL 8", setup: "r' U' R U' R' U2 r", algorithm: "r' U2 R U R' U r" },
    { id: 6, setup_name: "OLL 7", setup: "r U R' U R U2 r'", algorithm: "r U2 R' U' R U' r'" },
    { id: 7, setup_name: "OLL 6", setup: "r U2 R' U' R U' r'", algorithm: "r U R' U R U2 r'" },
    { id: 8, setup_name: "OLL 5", setup: "r' U2 R U R' U r", algorithm: "r' U' R U' R' U2 r" },
    { id: 9, setup_name: "OLL 13", setup: "(r U' r') U' (r U r') (F' U F)", algorithm: "R U R' U' R' F R2 U R' U' F'" },
    { id: 10, setup_name: "OLL 14", setup: "(l' U l) U (l' U' l) (F U' F')", algorithm: "L' U' L U L F' L2  U' L U F" },
    { id: 11, setup: "r U2 R' F R' F' R U' R U' r'", algorithm: "r U R' U R' F R F' R U2 r'" },
    { id: 12, setup: "l' U2 L F' L F L' U L' U l", algorithm: "l' U' L U' L F' L' F L' U2 l" },
    { id: 13, setup_name: "OLL 9", setup: "R U R' U' R' F R2 U R' U' F'", algorithm: "(r U' r') U' (r U r') (F' U F)" },
    { id: 14, setup_name: "OLL 10", setup: "L' U' L U L F' L2  U' L U F", algorithm: "(l' U l) U (l' U' l) F U' F'" },
    { id: 15, setup: "(l' U' l) (U' L' U L) (l' U l)", algorithm: "(l' U' l) (L' U' L U) (l' U l)" },
    { id: 16, setup: "(r U r') (U R U' R') (r U' r')", algorithm: "(r U r') (R U R' U') (r U' r')" },
    { id: 17, setup_name: "OLL 19", setup: "R' U2 F (R U R' U') F2 U2 F R", algorithm: "(R U R' U R') (F R F') U2 R' (F R F')" },
    { id: 18, setup_name: "OLL 17", setup: "(R U R' U R') (F R F') U2 R' (F R F')", algorithm: "y R U2 R2 F R F' U2 M' U R U' r'" },
    { id: 19, setup: "R' F' U2 F2 U R U' R' F' U2 R", algorithm: "R' U2 F (R U R' U') F2 U2 F R" },
    { id: 20, setup: "r U R' U' M2' U R U' R' U' M'", algorithm: "(r U R' U') M2 (U R U' R') U' M'" },
    { id: 21, setup: "Same as Algo", algorithm: "R U2 R' U' R U R' U' R U' R'" },
    { id: 22, setup: "R U2 (R2' U') (R2 U') R2' U2 R", algorithm: "R U R' U F' R U2 R' U2 R' F R" },
    { id: 23, setup: "R U2' R D R' U2' R D' R2'", algorithm: "R2 D (R' U2 R) D' (R' U2 R')" },
    { id: 24, setup_name: "OLL 25", setup: "F R' F' r U R U' r'", algorithm: "r U R' U' r' F R F'" },
    { id: 25, setup_name: "OLL 24", setup: "r U R' U' r' F R F'", algorithm: "F R' F' r U R U' r'" },
    { id: 26, setup_name: "Sune", setup: "R U R' U R U2 R'", algorithm: "R U2 R' U' R U' R'" },
    { id: 27, setup_name: "Antisune", setup: "R U2 R' U' R U' R'", algorithm: "R U R' U R U2 R'" },
    { id: 28, setup_name: "OLL 57", setup: "(R U R' U') M' (U R U' r')", algorithm: "r U R' U' M U R U' R'" },
    { id: 29, setup: "F' (U' L' U2 L) (U' L' U2 L) U F", algorithm: "F' U' (L' U2 L U) (L' U2 L U) F" },
    { id: 30, setup: "F (U R U2' R') (U R U2' R') U' F'", algorithm: "F U (R U2 R' U') (R U2 R' U') F'" },
    { id: 31, setup_name: "OLL 40", setup: "R' F R U R' U' F' U R", algorithm: "R' U' F U R U' R' F' R" },
    { id: 32, setup_name: "OLL 39", setup: "L F' L' U' L U F U' L'", algorithm: "L U F' U' L' U L F L'" },
    { id: 33, setup_name: "OLL 37", setup: "F R U' R' U' R U R' F'", algorithm: "R U R' U' R' F R F'" },
    { id: 34, setup: "r U R' U' r' F R U R U' R' F'", algorithm: "F R U R' U' R' F' r U R U' r'" },
    { id: 35, setup: "R U2' R' F R' F' R2' U2' R'", algorithm: "R U2 R2 F R F' R U2 R'" },
    { id: 36, setup: "F' L F L' U' (L' U' L) U (L' U L)", algorithm: "(L' U' L) U' (L' U L) U L F' L' F" },
    { id: 37, setup_name: "OLL 33", setup: "R U R' U' R' F R F'", algorithm: "F (R U' R' U' R) U R' F'" },
    { id: 38, setup: "F R' F' R U (R U R') U' (R U' R')", algorithm: "(R U R') U (R U' R') U' R' F R F'" },
    { id: 39, setup_name: "OLL 32", setup: "L U F' U' L' U L F L'", algorithm: "L F' L' U' L U F U' L'" },
    { id: 40, setup_name: "OLL 31", setup: "R' U' F U R U' R' F' R", algorithm: "R' F R U R' U' F' U R" },
    { id: 41, setup: "F U R U' R' F' (R U2' R' U' R U' R')", algorithm: "(R U R' U R U2 R') F R U R' U' F'" },
    { id: 42, setup: "F' U' L' U L F (L' U2 L U L' U L)", algorithm: "(L' U' L U' L' U2 L) F' L' U' L U F" },
    { id: 43, setup: "F' L' U' L U F", algorithm: "f' (L' U' L U) f" },
    { id: 44, setup: "F R U R' U' F", algorithm: "f (R U R' U') f'" },
    { id: 45, setup: "F U R U' R' F'", algorithm: "F R U R' U' F'" },
    { id: 46, setup: "R' U' F R' F' R U R", algorithm: "R' U' R' F R F' U R" },
    { id: 47, setup: "f' (L' U' L U) (L' U' L U) f", algorithm: "F' (L' U' L U) (L' U' L U) F" },
    { id: 48, setup_name: "OLL 51", setup: "f (R U R' U') (R U R' U') f'", algorithm: "F (R U R' U') (R U R' U') F'" },
    { id: 49, setup_name: "OLL 50", setup: "F' L F2 L' U2 L' U2 L F'", algorithm: "F R' F2 R U2 R U2 R' F" },
    { id: 50, setup_name: "OLL 49", setup: "F R' F2 R U2 R U2 R' F", algorithm: "F' L F2 L' U2 L' U2 L F'" },
    { id: 51, setup_name: "OLL 48", setup: "F (R U R' U') (R U R' U') F'", algorithm: "f (R U R' U') (R U R' U') f'" },
    { id: 52, setup: "R U R' U R d' R U' R' F'", algorithm: "R U R' U R d' R U' R' F'" },
    { id: 53, setup: "Same as Algo", algorithm: "r' U' (R U' R') U (R U' R') U2 r" },
    { id: 54, setup: "Same as Algo", algorithm: "l U (L' U L) U' (L' U L) U2 l'" },
    { id: 55, setup: "F R' F' U2' R U R' U R2' U2' R'", algorithm: "R U2 R2 (U' R U' R') U2 (F R F')" },
    { id: 56, setup: "r U r' (R U R' U') (R U R' U') r U' r'", algorithm: "(r U r') (U R U' R') (U R U' R') (r U' r')" },
    { id: 57, setup_name: "OLL 28", setup: "r U R' U' M U R U' R'", algorithm: "(R U R' U') M' (U R U' r')" },
]
const sortBy = ref('number')
const hideSolution = ref(false)

const getOllById = (id) => {
    return ollAlgorithms.find(oll => oll.id === id)
}

const preferenceOrdered = computed(() => {
    return myPreferences.map(id => getOllById(id)).filter(Boolean)
})

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

const ReverseSetup = [
    { sub_title_name: "First Reverse", list: [3, 4] },
    { sub_title_name: "Second Reverse", list: [17, 18, 19] },
    { sub_title_name: "Third Reverse", list: [5, 6, 7, 8] },
    { sub_title_name: "Fourth Reverse", list: [31, 32, 39, 40] },
    { sub_title_name: "Fifth Reverse", list: [48, 49, 50, 51] },
    { sub_title_name: "Same as Algorithm", list: [2, 21, 22, 52, 53, 54] },
]

const myPreferences = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 57, 29,30, 41, 42, 31,32,39,40, 43,44,47,48,49,50,53,54,51,52, 55,56, 33, 37, 35, 45, 36,  38, 34, 46]

</script>
