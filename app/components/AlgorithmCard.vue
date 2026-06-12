<template>
    <div
        class="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/15 overflow-hidden transition-all duration-300 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <div
            :class="`relative shrink-0 ${iconSize} flex items-center justify-center rounded-lg bg-slate-50 dark:bg-linear-to-br dark:from-bg-secondary dark:to-bg-tertiary border border-slate-100 dark:border-indigo-500/10`">
            <component :is="iconComponent" :caseId="id || algorithm.id || algorithm.name" :caseName="algorithm.name"
                :type="algorithmType" />
        </div>

        <div class="flex-1 space-y-2 min-w-0">
            <div class="flex items-center justify-between">
                <h4 class="text-lg font-bold text-slate-900 dark:text-white">{{ algorithm.name }}</h4>
            </div>

            <div v-if="algorithm.setup === 'Same as Algo'"
                class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 p-2 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
                <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 shrink-0">Setup</span>
                <span class="text-xs text-indigo-500/70 dark:text-indigo-200/70 italic">Same as Algorithm</span>
            </div>

            <div v-else-if="algorithm.setup"
                class="flex flex-col gap-1 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-200 dark:border-slate-700/50">
                <div class="flex items-center gap-2">
                    <span
                        class="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400/90 shrink-0">Setup</span>
                    <span v-if="algorithm.setup_name" class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">({{
                        algorithm.setup_name }})</span>
                </div>
                <code class="text-xs font-mono text-slate-600 dark:text-slate-300 break-all leading-tight">{{ algorithm.setup }}</code>
            </div>

            <div class="text-sm p-2 rounded-xl break-all leading-relaxed font-mono bg-slate-50 dark:bg-bg-primary text-slate-800 dark:text-indigo-100 border border-slate-200 dark:border-indigo-500/20 shadow-inner"
                :class="algorithmClass">
                {{ algorithm.algorithm }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

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
        default: 'OLL'
    },
    algorithmClass: {
        type: String,
        default: ''
    },
    iconSize: {
        type: String,
        default: 'w-[80px] h-[80px]'
    }
})
</script>
