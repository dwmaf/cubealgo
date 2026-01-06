<template>
    <div class="flex items-center justify-between mb-8 flex-wrap gap-4" :class="containerClass">
        <div v-if="hasSlot" class="flex flex-col gap-4 ml-4">
            <h2
                class="relative text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
                {{ title }}
            </h2>
            <span v-if="algorithmCount"
                class="w-fit text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                {{ algorithmCount }} {{ algorithmCount === 1 ? 'Algorithm' : 'Algorithms' }}
            </span>
        </div>
        <h2 v-else
            class="relative pl-4 text-2xl md:text-3xl font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3/5 before:rounded before:bg-accent-gradient">
            {{ title }}
        </h2>
        <span v-if="algorithmCount && !hasSlot"
            class="ml-4 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {{ algorithmCount }} {{ algorithmCount === 1 ? 'Algorithm' : 'Algorithms' }}
        </span>

        <slot></slot>
    </div>
</template>

<script setup>
import { useSlots, computed } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    algorithmCount: {
        type: Number,
        default: null
    },
    containerClass: {
        type: String,
        default: ''
    }
})

const slots = useSlots()
const hasSlot = computed(() => !!slots.default)
</script>
