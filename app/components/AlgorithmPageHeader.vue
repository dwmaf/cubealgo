<template>
    <section class="py-16 pb-12 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            <span v-if="cubeSize" class="mr-1 md:mr-2">{{ cubeSize }}</span><span class="text-gradient">{{ algorithmType
                }}</span><span v-if="suffix" class="ml-2">{{ suffix }}</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-xl mx-auto">
            {{ description }}
        </p>

        <div v-if="showTimerButton" class="mt-8">
            <NuxtLink :to="`/timer?cube=${timerCubeParam}`"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105">
                <span>⏱️</span>
                <span>Practice with Timer</span>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
defineProps({
    cubeSize: {
        type: String,
        default: ''
    },
    algorithmType: {
        type: String,
        required: true
    },
    suffix: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true
    },
    timerCubeParam: {
        type: String,
        default: '3x3'
    },
    showTimerButton: {
        type: Boolean,
        default: true
    }
})
</script>
