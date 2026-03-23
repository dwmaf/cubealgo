<template>
    <div class="w-full max-w-7xl mx-auto px-2">
        <AlgorithmPageHeader cube-size="3x3" algorithm-type="F2L Algorithms"
            description="First Two Layer - 41 cases dasar untuk menyelesaikan layer pertama dan kedua secara bersamaan."
            timer-cube-param="3x3" />

        <section class="py-12">
            <AlgorithmSectionHeader :title="sortBy === 'number' ? 'All F2L Cases' : 'Grouped by Categories'"
                :algorithm-count="41">
                <!-- Sort Buttons -->
                <div class="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700/50 ml-4">
                    <button @click="sortBy = 'number'"
                        :class="[sortBy === 'number' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white']"
                        class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                        By Number
                    </button>
                    <button @click="sortBy = 'category'"
                        :class="[sortBy === 'category' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white']"
                        class="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300">
                        By Categories
                    </button>
                </div>
            </AlgorithmSectionHeader>

            <!-- Flat List (By Number) -->
            <div v-if="sortBy === 'number'" class="grid gap-6 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md mx-auto md:max-w-none md:mx-0">
                <AlgorithmF2LCard v-for="f2l in f2lAlgorithms" :key="f2l.id"
                    :algorithm="{ ...f2l, name: `F2L ${f2l.id}` }" :icon-component="CubeIcon3D" algorithm-type="F2L" />
            </div>

            <!-- Grouped List (By Category) -->
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
                    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md mx-auto md:max-w-none md:mx-0">
                        <template v-for="id in group.list" :key="id">
                            <AlgorithmF2LCard v-if="getf2lById(id)"
                                :algorithm="{ ...getf2lById(id), name: `F2L ${id}` }" :icon-component="CubeIcon3D"
                                algorithm-type="F2L" />
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import CubeIcon3D from '~/components/CubeIcon3D.vue'
import AlgorithmF2LCard from '~/components/AlgorithmF2LCard.vue'

useSeoMeta({
    title: '3x3 F2L Algorithms - Cube Algorithm',
    description: '41 algoritma dasar F2L (First Two Layer) untuk Rubik\'s Cube 3x3. Pelajari semua case dari 4 sudut berbeda (FR, FL, BL, BR).'
})

const f2lAlgorithms = [
    {
        id: 1,
        setup: "L F' L' F",
        fr: ["U R U' R'"],
        fl: ["F' L F L'"],
        bl: ["U L U' L'"],
        br: ["B' R B R'"],
    },
    {
        id: 2,
        setup: "R' F R F'",
        fr: ["F R' F' R"],
        fl: ["L F' L' F"],
        bl: ["B L' B' L"],
        br: ["U' R' U R"],
    },
    {
        id: 3,
        setup: "L' U L",
        fr: ["U R U2 R' F R' F' R"],
        fl: ["L' U' L"],
        bl: ["f' L' f"],
        br: ["R' U' R"],
    },
    {
        id: 4,
        setup: "R U' R'",
        fr: ["R U R'"],
        fl: ["U' L' U2 L F' L F L'"],
        bl: ["L U L'"],
        br: ["f R f'"],
    },
    {
        id: 5,
        setup: "R U R' U2' R U' R' U",
        fr: ["U' R U R' U2 R U' R"],
        fl: ["U l' U L U' L' U' l"],
        bl: ["U' L U L' U2 L U' L'"],
        br: ["U r' U R U' R' U' r"],
    },
    {
        id: 6,
        setup: "L' U' L U2 L' U L U'",
        fr: ["U' r U' R' U R U r'"],
        fl: ["U L' U' L U2 L' U L"],
        bl: ["U' l U' L' U L U l'"],
        br: ["U R' U' R U2 R' U R"],
    },
    {
        id: 7,
        setup: "R U R' U2' R U2' R' U",
        fr: ["U' R U2 R' U' R U2 R'"],
        fl: ["d' L U2 L' U2 L U' L'"],
        bl: ["U' L U2 L' U2 L U' L'"],
        br: ["d' R' U2 R' U' R U2 R'"],
    },
    {
        id: 8,
        setup: "L' U' L U2 L' U2 L U'",
        fr: ["d R' U2 R U R' U2 R"],
        fl: ["U L' U2 L U L' U2 L"],
        bl: ["d L' U2 L U2 L' U L"],
        br: ["U R' U2 R U R' U2 R"],
    },
    {
        id: 9,
        setup: "R' U R U R' U R U'",
        fr: ["d R' U' R U' R' U' R"],
        fl: ["U L' U' L U' L' U' L"],
        bl: ["d L' U' L U' L' U' L"],
        br: ["U R' U' R U' R' U' R"],
    },
    {
        id: 10,
        setup: "L U' L' U' L U' L' U",
        fr: ["U' R U R' U R U R'"],
        fl: ["d' L U L' U L U L'"],
        bl: ["U' L U L' U L U L'"],
        br: ["d' R U R' U R U R'"],
    },
    {   id: 11, 
        setup: "F' U F U' R U2' R' U", 
        fr: ["R U2 R' U' r U' r' U2 r U r'"], 
        fl: ["L' U L U' L' U L U2 L' U L"], 
        bl: ["L U2 L' U' l U' l' U2 l U l'"], 
        br: ["R' U R U' R' U R U2 R' U R"] },
    // {
    //     id: x,
    //     setup: "",
    //     fr: [],
    //     fl: [],
    //     bl: [],
    //     br: [],
    // },
    {
        id: 12,
        setup: "R U' R' U F' U2 F U'",
        fr: ["R U' R' U R U' R' U2 R U' R'"],
        fl: ["L' U2 L U l' U l U2 l' U' l"],
        bl: ["L U' L' U L U' L' U2 L U' L'"],
        br: ["R' U2 R U r' U r U2 r' U' r"],
    },
    {
        id: 13, 
        setup: "L' U L U L' U' L U'", 
        fr: ["d R' U R U' R' U' R", "R' F R F' U' R' F R F' R U R'"], 
        fl: ["U L' U L U' L' U' L"], 
        bl: ["d L' U L U' L' U' L"], 
        br: ["U R' U R U' R' U' R"],
    },
    {
        id: 14,
        setup: "R U' R' U' R U R' U",
        fr: ["U' R U' R' U R U R'"],
        fl: ["d' L U' L' U L U L'", "L F' L' F U L F' L' F L' U' L"],
        bl: ["U' L U' L' U L U L'"],
        br: ["d' R U' R' U R U R'"],
    },
    {
        id: 15,
        setup: "R U' R' U2 F' U' F",
        fr: ["U R' F R F' U R U R'"],
        fl: ["L' U L U' d' L U L'"],
        bl: ["L U F' L F L' U2 L'"],
        br: ["R' U R U' d' R U R'"],
    },
    {
        id: 16,
        setup: "F' U F U2' R U R'",
        fr: ["R U' R' U d R' U' R"],
        fl: ["U' L F' L' F U' L' U' L"],
        bl: ["L U' L' U' d' R' U' R"],
        br: ["R' U' F R' F' R U2 R"],
    },
    {
        id: 17,
        setup: "R U' R' U R U2' R'",
        fr: ["R U2 R' U' R U R'"],
        fl: ["L F' L' F L' U L U' L' U L"],
        bl: ["L U2 L' U' L U L'"],
        br: ["R' U2 F R U R' U' F' R"],
    },
    {
        id: 18,
        setup: "L' U L U' L' U2 L",
        fr: ["R' F R F' R U' R' U R U' R'"],
        fl: ["L' U2 L U L' U' L"],
        bl: ["L U2 F' L' U' L U F L'"],
        br: ["R' U2 R U R' U' R"],
    },
    {
        id: 19,
        setup: "R U R' U' R U2' R' U'",
        fr: ["U R U2 R' U R U' R'"],
        fl: ["d R U2 R' U R U' R'"],
        bl: ["U L U2 L' U L U' L'"],
        br: ["d L U2 L' U L U' L'"],
    },
    {
        id: 20,
        setup: "L' U' L U L' U2 L U",
        fr: ["d' L' U2 L U' L' U L"],
        fl: ["U' L' U2 L U' L' U L"],
        bl: ["d' R' U2 R U' R' U R"],
        br: ["U' R' U2 R U' R' U R"],
    },
    {
        id: 21,
        setup: "R U' R' U2' R U R'",
        fr: ["R U' R' U2 R U R'"],
        fl: ["l' U l U2 l' U' l"],
        bl: ["L U' L' U2 L U L'"],
        br: ["r' U r U2 r' U' r"],
    },
    {
        id: 22,
        setup: "L' U L U2 L' U' L",
        fr: ["r U' r' U2 r U r'"],
        fl: ["L' U L U2 L' U' L"],
        bl: ["l U' l' U2 l U l'"],
        br: ["R' U R U2 R' U' R"],
    },
    {
        id: 23,
        setup: "L' U' L F' L' U' L U F",
        fr: ["R U R' U2 R U R' U' R U R'"],
        fl: [" l' U' l U' L' U' L U l' U' l"],
        bl: ["L U L' U2 L U L' U' L U L'"],
        br: ["r' U' r U' R' U' R U r' U' r"],
    },
    {
        id: 24,
        setup: "R U R' F R U R' U' F'",
        fr: ["r U r' U R U R' U' r U r'"],
        fl: ["L' U' L U2 L' U' L U L' U' L"],
        bl: ["l U l' U L U L' U' l U l'"],
        br: ["R' U' R U2 R' U' R U R' U' R"],
    },
    {
        id: 25,
        setup: "F' R U R' U' R' F R",
        fr: ["U' R' F R F' R U R'"],
        fl: ["U' L' U L F' r U r'"],
        bl: ["U' f' L' f U L U L'", "L' U' L' U' L' U L U L"],
        br: ["d' R' F R F' R U R'"],
    },
    {
        id: 26,
        setup: "F L' U' L U L F' L'",
        fr: ["U R U' R' F R' F' R"],
        fl: ["U L F' L' F L' U' L"],
        bl: ["d L F' L' F L' U' L"],
        br: ["U f R f' U' R' U' R", "R U R U R U' R' U' R'"],
    },
    {
        id: 27,
        setup: "R U R' U' R U R'",
        fr: ["R U' R' U R U' R'"],
        fl: ["L' U' L U F' r U r'"],
        bl: ["L U' L' U L U' L'"],
        br: ["R' U2 R' F R F' R"],
    },
    {
        id: 28,
        setup: "L' U' L U L' U' L",
        fr: ["R U R' U' F R' F' R"],
        fl: ["L' U L U' L' U L"],
        bl: ["L U2 L F' L' F L'"],
        br: ["R' U R U' R' U R"],
    },
    {
        id: 29,
        setup: "L' U L U' L' U L",
        fr: ["l' U l F' l' U l F'"],
        fl: ["L' U' L U L' U' L"],
        bl: ["U2 L U' L' f' L' f"],
        br: ["R' U' R U R' U' R"],
    },
    {
        id: 30,
        setup: "R U' R' U R U' R'",
        fr: ["R U R' U' R U R'"],
        fl: ["r U' r' F r U' r' F"],
        bl: ["L U L' U' L U L'"],
        br: ["U2 R' U R f R f'"],
    },
    {
        id: 31,
        setup: "R U R' F R' F' R U",
        fr: ["R U' R' U2 F R' F' R"],
        fl: ["L' U L U2 F' r U r'"],
        bl: ["L U' L F' L' F L'"],
        br: ["R' U R' F R F' R"],
    },
    {
        id: 32,
        setup: "R U' R' U R U' R' U R U' R'",
        fr: ["U R U' R' U R U' R' U R U' R'", "R U R' U' R U R' U' R U R'"],
        fl: ["U' L' U L U' L' U L U' L' U L", "L' U' L U L' U' L U L' U' L"],
        bl: ["U L U' L' U L U' L' U L U' L'", "L U L' U' L U L' U' L U L'"],
        br: ["U' R' U R U' R' U R U' R' U R", "R' U' R U R' U' R U R' U' R"],
    },
    {
        id: 33,
        setup: "R U R' U2' R U R' U",
        fr: ["U' R U' R' U2 R U' R'"],
        fl: ["U L' U2 L U' L' U' L"],
        bl: ["U' L U' L' U2 L U' L'"],
        br: ["U R' U2 R U' R' U' R"],
    },
    {
        id: 34,
        setup: "L' U' L U2 L' U' L U'",
        fr: ["U' R U2 R' U R U R'"],
        fl: ["U L' U L U2 L' U L"],
        bl: ["U' L U2 L' U L U L'"],
        br: ["U R' U R U2 R' U R"],
    },
    {
        id: 35,
        setup: "R' F R F' R U' R' U2",
        fr: ["U2 R U R' F R' F' R"],
        fl: ["U2 L F' L' F U2 L' U' L"],
        bl: ["U' L F' L F L' U L'"],
        br: ["R' F R' F' R U R U' R' U' R"],
    },
    {
        id: 36,
        setup: "L F' L' F L' U L U2",
        fr: ["U2 R' F R F' U2 R U R'"],
        fl: ["U2 L' U' L F' L F L'"],
        bl: ["L F' L F L' U' L' U L U L'"],
        br: ["U R' F R' F' R U' R"],
    },
    {
        id: 37,
        setup: "R' U R d' R U2 R' U2 R U' R'",
        fr: ["R' F R F' (R U' R' U R U' R' U2 R U' R')", "R U' R' d R' U2 R U2 R' U R", "R U R' U2 R U2 R' d R' U' R"],
        fl: ["L F' L' F (L' U L U' L' U L U2 L' U L)", "L' U2 L U' L' U2 L d' L U L'", "L' U L d' L U2 L' U2 L U' L'"],
        bl: ["L U L' U' (L U2 L' U' l U' l' U2 l U l')", "L U' L' d L' U2 L U2 L' U L", "L U2 L' U L U2 L' (U f' L' f / d L' U' L)"],
        br: ["R' U' R U (R' U2 R U r' U r U2 r' U' r)", "R' U R d' R U2 R' U2 R U' R'", "R' U' R U2 R' U2 R (d' R U R' / U' f R f')"],
    },
    {
        id: 38,
        setup: "R U' R' U R U2' R' U R U' R'",
        fr: ["R U' R' U' R U R' U2 R U' R'", "R U R' U' R U2 R' U' R U R'", "F R' F' R2 U2 R' U' R U R'"],
        fl: ["L' U L U' L' U2 L U' L' U L", "L' U' L U2 L' U L U' L' U' L"],
        bl: ["L U L' U' L U2 L' U' L U L'", "L U' L' U' L U L' U2 L U' L'"],
        br: ["R' U R U' R' U2 R U' R' U R", "R' U' R U2 R' U R U' R' U' R"],
    },
    {
        id: 39,
        setup: "R U' R' U' R U R' U2' R U' R'",
        fr: ["R U' R' U R U2 R' U R U' R'", "R U R' U2 R U' R' U R U R'"],
        fl: ["L' U' L U L' U2 L U L' U' L", "L' U L U L' U' L U2 L' U L"],
        bl: ["L U' L' U L U2 L' U L U' L'", "L U2 L U L' U L U2 L2"],
        br: ["R' U' R U R' U2 R U R' U' R", "R' U R U R' U' R U2 R' U R", "R2 U2 R U R' U R U2 R"],
    },
    {
        id: 40,
        setup: "R U' R' F' L' U2 L F",
        fr: ["r U' r' U2 r U r' R U R'", "F' L' U2 L F R U R'"],
        fl: ["L' U L F R U2 R' F'", "L' U L l' U l U2 l' U' l"],
        bl: ["l U' l' U2 l U l' L U L'"],
        br: ["R' U R r' U r U2 r' U' r"],
    },
    {
        id: 41,
        setup: "F' L' U2 L F R U R'",
        fr: ["R U' R' r U' r' U2 r U r'", "R U' R' F' L' U2 L F"],
        fl: ["F R U2 R' F' L' U' L", "l' U l U2 l' U' l L' U' L"],
        bl: ["f' L f U' L U L' U L U L'", "L U' L' d' U' R' U' R U' R' U R", "L U' L' l U' l' U2 l U l'"],
        br: ["R' U R U R' U R d' R U R'", "r' U r U2 r' U' r R' U' R"],
    },
]

const sortBy = ref('number')

const getf2lById = (id) => {
    return f2lAlgorithms.find(f2l => f2l.id === id)
}

const sortShape = [
    { sub_title_name: "Free Pairs", list: [1, 2, 3, 4] },
    { sub_title_name: "Connected Pairs", list: [11, 12, 13, 14, 15, 16, 17, 18, 23, 24] },
    { sub_title_name: "Disconnected Pairs", list: [5, 6, 7, 8, 9, 10, 19, 20, 21, 22] },
    { sub_title_name: "Corner in Slots", list: [25, 26, 27, 28, 29, 30] },
    { sub_title_name: "Edge in Slot", list: [31, 32, 33, 34, 35, 36] },
    { sub_title_name: "Edge in Slot", list: [37, 38, 39, 40, 41] },
]

</script>
