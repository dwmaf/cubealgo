<template>
    <div
        class="group flex flex-col p-4 rounded-2xl bg-card-gradient border border-indigo-500/10 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">

        <!-- Header: Icon & Metadata -->
        <div class="flex items-start gap-4 mb-4">
            <div
                :class="`relative shrink-0 ${iconSize} flex items-center justify-center rounded-xl bg-linear-to-br from-bg-secondary to-bg-tertiary border border-indigo-500/10 overflow-hidden shadow-inner text-slate-500`">
                <component :is="iconComponent" :caseId="id || algorithm.id || algorithm.name" :caseName="algorithm.name"
                    :type="algorithmType" />
            </div>

            <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <h4 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {{ algorithm.name || ('F2L ' + (id || algorithm.id)) }}
                    </h4>
                </div>

                <!-- Setup Info -->
                <div v-if="algorithm.setup"
                    class="flex items-center gap-2 bg-slate-800/40 px-2 py-1.5 rounded-lg border border-slate-700/50">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-orange-400 shrink-0">Setup</span>
                    <code class="text-xs font-mono text-slate-300">{{ algorithm.setup }}</code>
                </div>
            </div>
        </div>

        <!-- Slot Switcher Tabs (Segmented Control style) -->
        <div class="flex justify-center mb-6">
            <div
                class="inline-flex p-1 bg-slate-950/80 backdrop-blur-md rounded-full border border-indigo-500/10 shadow-xl shadow-black/20">
                <button v-for="slot in slots" :key="slot.key" @click="activeSlot = slot.key" :class="[
                    activeSlot === slot.key
                        ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-110 z-10'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                ]"
                    class="w-12 h-8 flex items-center justify-center rounded-full text-xs font-black transition-all duration-300 transform-gpu">
                    {{ slot.label }}
                </button>
            </div>
        </div>

        <!-- Algorithms Area -->
        <div class="space-y-3 min-h-20">
            <div v-if="currentAlgos.length > 0" class="space-y-3">
                <div v-for="(algo, index) in currentAlgos" :key="index" class="relative">
                    <!-- Algorithm Index Label (if multiple) -->
                    <div v-if="currentAlgos.length > 1"
                        class="absolute -top-2 left-3 px-1.5 py-0.5 bg-slate-900 text-[8px] font-bold text-indigo-400 rounded border border-indigo-500/20 z-10 uppercase tracking-widest">
                        Option {{ index + 1 }}
                    </div>

                    <div class="group/algo relative">
                        <div
                            class="text-sm p-3 pt-4 rounded-xl break-all leading-relaxed font-mono bg-bg-primary text-indigo-100 border border-indigo-500/20 shadow-inner group-hover/algo:border-indigo-500/40 transition-colors">
                            {{ algo }}
                        </div>

                        <!-- Mini Copy Button (Optional Future Feature Decorator) -->
                        <div class="absolute top-2 right-2 opacity-0 group-hover/algo:opacity-100 transition-opacity">
                            <div class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else
                class="flex items-center justify-center p-6 border-2 border-dashed border-slate-800/50 rounded-xl">
                <span class="text-xs text-slate-600 font-medium italic">No algorithms for this slot</span>
            </div>
        </div>

        <!-- Footer Decoration -->
        <div class="mt-4 pt-3 border-t border-slate-800/50 flex justify-between items-center">
            <div class="flex gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-500/30"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-500/20"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-500/10"></div>
            </div>
            <span class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{{slots.find(s => s.key ===
                activeSlot)?.fullName}} SLOT</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    algorithm: {
        type: Object,
        required: true
    },
    id: {
        type: [String, Number],
        default: null
    },
    iconComponent: {
        type: [Object, String],
        required: true
    },
    algorithmType: {
        type: String,
        default: 'F2L'
    },
    iconSize: {
        type: String,
        default: 'w-[90px] h-[90px]'
    }
})

const activeSlot = ref('fr')

const slots = [
    { key: 'fr', label: 'FR', fullName: 'Front Right' },
    { key: 'fl', label: 'FL', fullName: 'Front Left' },
    { key: 'bl', label: 'BL', fullName: 'Back Left' },
    { key: 'br', label: 'BR', fullName: 'Back Right' }
]

const currentAlgos = computed(() => {
    const data = props.algorithm[activeSlot.value]
    if (!data) return []

    // Convert to array if it's a string
    if (typeof data === 'string') {
        return [data]
    }

    // If it's an object (as the user showed in example), try to get values
    // But ideally they should pass an array
    if (Array.isArray(data)) {
        return data
    }

    // Fallback for their example structure {"algo1", "algo2"} which might be an object in JS
    return Object.values(data)
})
</script>

<style scoped>
.bg-card-gradient {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%);
}
</style>
