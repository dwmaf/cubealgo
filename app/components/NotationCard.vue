<template>
    <div
        class="flex items-center gap-4 p-4 rounded-xl bg-card-gradient border border-indigo-500/15 hover:border-indigo-500/35 transition-all duration-300">
        <div
            :class="['flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#12121a] to-[#1a1a26] border border-indigo-500/10 overflow-hidden text-slate-500', iconSize]">
            <component :is="iconComponent" v-bind="iconProps" />
        </div>

        <div class="flex-1 min-w-0">
            <h4 class="text-base font-semibold mb-1 text-white truncate">{{ title }}</h4>
            <p v-if="description" class="text-xs text-slate-400 leading-relaxed">{{ description }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    iconComponent: { type: [Object, String], required: true },
    iconProps: { type: Object, default: () => ({}) },
    iconSize: { type: String, default: 'w-[90px] h-[90px]' }
})
</script>
