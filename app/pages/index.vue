<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <section class="py-16 pb-12 text-center">

            <AlgorithmPageHeader cube-size="Master" algorithm-type="Rubik's Cube" suffix="Algorithms" description="Panduan lengkap notasi dan algoritma untuk menyelesaikan Rubik's Cube 3x3 dan 4x4. Pelajari OLL, PLL,
                dan teknik speedcubing lainnya." :show-timer-button="false" />

            <div
                class="mt-10 mx-auto max-w-2xl p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex flex-col sm:flex-row items-center gap-4 text-left">
                <div
                    class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                    📲
                </div>
                <div class="flex-1">
                    <p class="text-sm font-bold text-white mb-1">Eits, CubeAlgo Bisa Offline!</p>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Klik ikon <span class="text-indigo-400 font-bold italic">"Install App"</span> di browser Anda
                        untuk memasang CubeAlgo di HP/Laptop. Setelah terpasang, ratusan algoritma ini bisa diakses
                        <span class="text-slate-300 underline decoration-indigo-500/30">tanpa sinyal internet
                            sekalipun.</span>
                    </p>
                </div>
            </div>

        </section>

        <section class="py-8">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AppCard :is-link="true" to="/2x2" tag="2x2" tag-class="bg-emerald-500/15 text-emerald-500"
                    title="2x2 OLL & PBL"
                    description="Metode Ortega: 7 OLL dan 2 PBL untuk menyelesaikan 2x2 dengan cepat." hover
                    show-top-bar>
                    <template #footer>
                        <span>9 Algorithms</span>
                        <span>•</span>
                        <span>Beginner</span>
                    </template>
                </AppCard>

                <AppCard :is-link="true" to="/3x3-oll" tag="3x3" tag-class="bg-indigo-500/15 text-indigo-500"
                    title="3x3 OLL - Orientation of Last Layer"
                    description="Algoritma untuk mengorientasikan semua stiker kuning di layer teratas." hover
                    show-top-bar>
                    <template #footer>
                        <span>57 Algorithms</span>
                        <span>•</span>
                        <span>Intermediate</span>
                    </template>
                </AppCard>

                <AppCard :is-link="true" to="/3x3-pll" tag="3x3" tag-class="bg-indigo-500/15 text-indigo-500"
                    title="3x3 PLL - Permutation of Last Layer"
                    description="Algoritma untuk memposisikan semua piece di layer teratas dengan benar." hover
                    show-top-bar>
                    <template #footer>
                        <span>21 Algorithms</span>
                        <span>•</span>
                        <span>Intermediate</span>
                    </template>
                </AppCard>

                <AppCard :is-link="true" to="/4x4-oll" tag="4x4" tag-class="bg-violet-500/15 text-violet-500"
                    title="4x4 OLL Parity"
                    description="Algoritma khusus untuk mengatasi OLL parity yang hanya terjadi di 4x4." hover
                    show-top-bar>
                    <template #footer>
                        <span>27 Algorithms</span>
                        <span>•</span>
                        <span>Advanced</span>
                    </template>
                </AppCard>

                <AppCard :is-link="true" to="/4x4-pll" tag="4x4" tag-class="bg-violet-500/15 text-violet-500"
                    title="4x4 PLL Parity"
                    description="Algoritma untuk mengatasi PLL parity yang unik di Rubik's Cube 4x4." hover
                    show-top-bar>
                    <template #footer>
                        <span>22 Algorithms</span>
                        <span>•</span>
                        <span>Advanced</span>
                    </template>
                </AppCard>
            </div>
        </section>

        <section class="py-12">
            <AlgorithmSectionHeader title="Notasi Dasar 3x3" />
            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <NotationCard v-for="notation in basicNotations" :key="notation.symbol" :title="notation.symbol"
                    :description="notation.description" :icon-component="CubeIcon3D"
                    :icon-props="{ notation: notation.symbol }" />
            </div>
        </section>

        <section class="py-12">
            <AlgorithmSectionHeader title="Wide Moves (Gerakan Lebar)" />
            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <NotationCard v-for="notation in wideNotations" :key="notation.symbol" :title="notation.symbol"
                    :description="notation.description" :icon-component="CubeIcon3D"
                    :icon-props="{ notation: notation.symbol }" />
            </div>
        </section>

        <section class="py-12">
            <AlgorithmSectionHeader title="Cube Rotations & Middle Moves" />
            <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <NotationCard v-for="notation in rotationNotations" :key="notation.symbol" :title="notation.symbol"
                    :description="notation.description" :icon-component="CubeIcon3D"
                    :icon-props="{ notation: notation.symbol }" />
            </div>
        </section>

        <section class="py-12">
            <AlgorithmSectionHeader title="4x4 Last Two Edge Pairing" />
            <p class="text-slate-400 mb-6 max-w-3xl">
                Algoritma untuk menyelesaikan 2 edge terakhir saat edge pairing di 4x4. Gunakan saat tersisa 2 edge yang
                belum
                paired.
            </p>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <AlgorithmCard v-for="algo in lastTwoEdgeAlgorithms" :key="algo.name" :algorithm="algo"
                    :icon-component="CubeIcon4x4" algorithm-type="Notation" icon-size="w-[80px] h-[80px]" />
            </div>
        </section>

    </div>
</template>

<script setup>
import CubeIcon4x4 from '~/components/CubeIcon4x4.vue'
import CubeIcon3D from '~/components/CubeIcon3D.vue'

useSeoMeta({
    title: 'Cube Algorithm - Panduan Notasi Rubik\'s Cube',
    description: 'Panduan lengkap notasi dan algoritma untuk menyelesaikan Rubik\'s Cube 3x3 dan 4x4. Pelajari OLL, PLL, dan teknik speedcubing.'
})

const basicNotations = [
    { symbol: 'R', image: 'R', description: 'Putar sisi kanan 90° searah jarum jam' },
    { symbol: 'L', image: 'L', description: 'Putar sisi kiri 90° searah jarum jam' },
    { symbol: 'U', image: 'u', description: 'Putar sisi atas 90° searah jarum jam' },
    { symbol: 'D', image: 'D', description: 'Putar sisi bawah 90° searah jarum jam' },
    { symbol: 'F', image: 'F', description: 'Putar sisi depan 90° searah jarum jam' },
    { symbol: 'B', image: 'B', description: 'Putar sisi belakang 90° searah jarum jam' },
]

const wideNotations = [
    { symbol: 'Rw / r', image: 'Rw', description: 'Putar 2 layer kanan 90° searah jarum jam' },
    { symbol: 'Lw / l', image: 'Lw', description: 'Putar 2 layer kiri 90° searah jarum jam' },
    { symbol: 'Uw / u', image: 'Uw', description: 'Putar 2 layer atas 90° searah jarum jam' },
    { symbol: 'Dw / d', image: 'Dw', description: 'Putar 2 layer bawah 90° searah jarum jam' },
    { symbol: 'Fw / f', image: 'Fw', description: 'Putar 2 layer depan 90° searah jarum jam' },
    { symbol: 'Bw / b', image: 'Bw', description: 'Putar 2 layer belakang 90° searah jarum jam' },
]

const rotationNotations = [
    { symbol: 'x', image: 'x', description: 'Rotasi seluruh cube mengikuti arah R' },
    { symbol: 'y', image: 'y', description: 'Rotasi seluruh cube mengikuti arah U' },
    { symbol: 'z', image: 'z', description: 'Rotasi seluruh cube mengikuti arah F' },
    { symbol: 'M', image: 'M', description: 'Putar layer tengah (antara L dan R) mengikuti arah L' },
    { symbol: 'E', image: 'E', description: 'Putar layer tengah (antara U dan D) mengikuti arah D' },
    { symbol: 'S', image: 's', description: 'Putar layer tengah (antara F dan B) mengikuti arah F' },
]

const lastTwoEdgeAlgorithms = [
    { id: '1', image: "last2pair", name: 'Last Edge Pair', algorithm: "Uw' R U R' U y L' U' L Uw" },
]
</script>
