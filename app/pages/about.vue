<template>
    <div class="w-full max-w-4xl mx-auto px-6 py-16">
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
                About <span class="text-gradient">CubeAlgo</span>
            </h1>
            <p class="text-lg text-slate-400 leading-relaxed">
                CubeAlgo adalah platform dedikasi untuk komunitas cubing, dirancang untuk memudahkan pembelajaran
                algoritma Rubik dengan antarmuka yang modern dan performa yang sangat cepat.
            </p>
        </section>

        <div class="grid gap-8">
            <div class="p-8 rounded-3xl bg-card-gradient border border-indigo-500/15">
                <h2 class="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                    <span class="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">🚀</span>
                    Misi Kami
                </h2>
                <p class="text-slate-400 leading-relaxed">
                    Misi kami adalah menyediakan referensi algoritma yang mudah diakses oleh siapa saja, di mana saja.
                    Dengan teknologi PWA (Progressive Web App), CubeAlgo dapat digunakan secara offline, menjadikannya
                    teman latihan yang sempurna bahkan tanpa koneksi internet.
                </p>
            </div>

            <div class="p-8 rounded-3xl bg-card-gradient border border-indigo-500/15">
                <h2 class="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                    <span class="p-2 rounded-lg bg-violet-500/10 text-violet-400">👨‍💻</span>
                    Dibuat Oleh
                </h2>
                <p class="text-slate-400 leading-relaxed mb-4">
                    Website ini dikembangkan dengan penuh semangat oleh <span class="text-white font-semibold">Dawam
                        AF</span>. Sebagai seorang penggemar teknologi dan cubing, saya menyadari pentingnya memiliki
                    referensi yang bersih, cepat, dan intuitif.
                </p>
                <!-- <div class="flex gap-4 opacity-75">
                    <a href="#" class="text-sm font-medium hover:text-indigo-400 transition-colors">GitHub</a>
                    <a href="#" class="text-sm font-medium hover:text-indigo-400 transition-colors">Instagram</a>
                </div> -->
            </div>

            <div class="p-8 rounded-3xl bg-card-gradient border border-indigo-500/15">
                <h2 class="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                    <span class="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">🎨</span>
                    Grafis Vektor (SVG-Drawn)
                </h2>
                <p class="text-slate-400 leading-relaxed">
                    Semua ilustrasi Rubik di CubeAlgo digambar langsung menggunakan kode <strong class="text-white">SVG
                        (Scalable Vector Graphics)</strong>, bukan file gambar statis (seperti PNG/JPG). Kelebihannya:
                </p>
                <ul class="mt-4 space-y-2 text-sm text-slate-500">
                    <li class="flex items-start gap-2">
                        <span class="text-emerald-500">✓</span>
                        <span><strong class="text-slate-300">Resolusi Sempurna:</strong> Gambar tidak akan pecah meski
                            diperbesar di layar 4K sekalipun.</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-emerald-500">✓</span>
                        <span><strong class="text-slate-300">Super Ringan:</strong> Karena berbasis kode, beban loading
                            dan penyimpanan hampir nol, membuat aplikasi tetap gegas.</span>
                    </li>
                </ul>
            </div>

            <div class="p-8 rounded-3xl border border-indigo-500/10 bg-indigo-500/5 backdrop-blur-sm">
                <h3 class="text-xl font-bold mb-3 text-white">Teknologi yang Digunakan</h3>
                <ul class="flex flex-wrap gap-3">
                    <li v-for="tech in ['Nuxt 3', 'Vue.js', 'Tailwind CSS', 'Vite PWA']" :key="tech"
                        class="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        {{ tech }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'About Us - CubeAlgo',
    description: 'Kenali lebih dekat dengan CubeAlgo dan siapa di balik platform referensi algoritma Rubik yang modern ini.'
})
</script>
