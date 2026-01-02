<template>
    <div class="w-full max-w-4xl mx-auto px-6 py-16">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-8">
            Privacy <span class="text-gradient">Policy</span>
        </h1>

        <div class="prose prose-invert max-w-none text-slate-400 space-y-8">
            <section>
                <h2 class="text-xl font-bold text-white mb-3">1. Pengumpulan Data</h2>
                <p class="leading-relaxed">
                    CubeAlgo adalah aplikasi sisi klien (**client-side application**). Kami tidak mengumpulkan,
                    menyimpan, atau memproses data pribadi apa pun dari pengguna kami. Semua interaksi Anda dengan
                    aplikasi terjadi secara lokal di browser Anda.
                </p>
            </section>

            <section>
                <h2 class="text-xl font-bold text-white mb-3">2. Service Workers & Offline Usage</h2>
                <p class="leading-relaxed">
                    Kami menggunakan Service Workers untuk memungkinkan penggunaan offline. Teknologi ini menyimpan aset
                    statis (seperti file CSS, JS, dan gambar ikon) di browser Anda. Tidak ada data identifikasi pribadi
                    yang disimpan dalam proses ini.
                </p>
            </section>

            <section>
                <h2 class="text-xl font-bold text-white mb-3">3. Link Pihak Ketiga</h2>
                <p class="leading-relaxed">
                    Aplikasi kami mungkin berisi link ke situs web lain (seperti CDN Google Fonts). Kami tidak
                    bertanggung jawab atas kebijakan privasi atau konten dari situs pihak ketiga tersebut.
                </p>
            </section>

            <section>
                <h2 class="text-xl font-bold text-white mb-3">4. Perubahan Kebijakan</h2>
                <p class="leading-relaxed">
                    Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Setiap perubahan akan segera
                    berlaku setelah diposting di halaman ini.
                </p>
            </section>

            <div class="pt-8 border-t border-slate-800">
                <p class="text-sm italic">Terakhir diperbarui: Januari 2026</p>
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Privacy Policy - CubeAlgo',
    description: 'Pelajari bagaimana CubeAlgo menjaga privasi Anda sebagai platform referensi algoritma Rubik.'
})
</script>
