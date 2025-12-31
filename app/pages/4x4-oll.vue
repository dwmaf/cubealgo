<template>
    <div class="w-full max-w-7xl mx-auto px-6">
        <!-- Hero Section -->
        <section class="py-16 pb-12 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                4x4 <span class="text-gradient">OLL Parity</span>
            </h1>
            <p class="text-lg text-slate-400 max-w-xl mx-auto">
                Algoritma khusus untuk mengatasi OLL parity yang hanya terjadi di Rubik's Cube 4x4. Parity terjadi
                karena reduksi center dan edge pairing.
            </p>
        </section>

        <!-- OLL Parity Algorithms Grid -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    OLL Parity Cases</h2>
            </div>
            <div
                class="sticky top-[88px] z-40 my-8 mx-auto w-fit p-4 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-indigo-500/20 shadow-xl text-center font-mono text-sm sm:text-base text-indigo-400">
                <span class="text-slate-500 block sm:inline mb-1 sm:mb-0 sm:mr-2">Main OLL Parity [*] :</span>
                Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'
            </div>

            <div class="grid gap-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="algo in ollParityAlgorithms" :key="algo.name"
                    class="flex items-center gap-4 p-3 rounded-xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div
                        class="relative flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10">
                        <img :src="`/4x4oll/${algo.image}.png`" :alt="`4x4 OLL ${algo.name}`"
                            class="w-full h-full object-contain p-2" loading="lazy" />
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
                    <div
                        class="min-w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden">
                        <img :src="`/movenotation/r.png`" alt="gambar belum ada"
                            class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 class="text-base font-semibold mb-1 text-white">3Rw
                        </h4>
                        <p class="text-xs text-slate-400">Putar ketiga layer dari sisi kanan 90° searah jarum jam sekaligus</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Understanding OLL Parity -->
        <section class="py-12">
            <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2
                    class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                    Memahami OLL Parity</h2>
            </div>

            <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Apa itu OLL Parity?</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">OLL Parity adalah kondisi di mana satu edge di
                        layer teratas memiliki orientasi yang salah (flipped), yang tidak mungkin terjadi pada cube 3x3
                        standar.</p>
                </div>

                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Mengapa Terjadi?</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">Parity terjadi karena proses reduksi (menyatukan
                        center dan edge) pada 4x4 bisa menghasilkan state yang "impossible" jika dilihat sebagai 3x3.
                    </p>
                </div>

                <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                    <h3 class="text-lg font-bold mb-3 text-indigo-500">Kapan Menggunakan?</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">Gunakan algoritma ini ketika Anda sampai pada
                        langkah OLL dan menemukan satu edge yang flipped secara individual.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useSeoMeta({
    title: '4x4 OLL Parity Algorithms - Cube Algorithm',
    description: 'Algoritma OLL Parity untuk Rubik\'s Cube 4x4. Pelajari cara mengatasi edge flip yang hanya terjadi di big cubes.'
})

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
