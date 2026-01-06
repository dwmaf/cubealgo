<template>
    <NuxtLink v-if="isLink" :to="to" :class="[
        'relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 group cursor-pointer block',
        hover ? 'hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]' : ''
    ]">
        <div v-if="showTopBar"
            class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient transition-opacity duration-300"
            :class="hover ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'">
        </div>

        <div v-if="tag" class="mb-3">
            <span
                :class="['inline-block py-1 px-3 rounded-full text-xs font-semibold', tagClass || 'bg-indigo-500/15 text-indigo-500']">
                {{ tag }}
            </span>
        </div>

        <h3 v-if="title" :class="['font-bold mb-3', titleClass || 'text-xl text-white']">
            {{ title }}
        </h3>

        <div :class="['text-sm text-slate-400', descriptionClass || 'mb-4']">
            <slot>{{ description }}</slot>
        </div>

        <div v-if="$slots.footer"
            class="mt-4 flex items-center gap-4 text-sm text-slate-500 border-t border-slate-800/50 pt-4">
            <slot name="footer"></slot>
        </div>
    </NuxtLink>

    <div v-else :class="[
        'relative p-6 rounded-2xl bg-card-gradient border border-indigo-500/15 overflow-hidden transition-all duration-300 group',
        hover ? 'hover:-translate-y-1 hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]' : ''
    ]">
        <div v-if="showTopBar"
            class="absolute top-0 left-0 right-0 h-1 bg-accent-gradient transition-opacity duration-300"
            :class="hover ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'">
        </div>

        <div v-if="tag" class="mb-3">
            <span
                :class="['inline-block py-1 px-3 rounded-full text-xs font-semibold', tagClass || 'bg-indigo-500/15 text-indigo-500']">
                {{ tag }}
            </span>
        </div>

        <h3 v-if="title" :class="['font-bold mb-3', titleClass || 'text-lg text-indigo-500']">
            {{ title }}
        </h3>

        <div :class="['text-sm text-slate-400 leading-relaxed', descriptionClass || '']">
            <slot>{{ description }}</slot>
        </div>

        <div v-if="$slots.footer"
            class="mt-4 flex items-center gap-4 text-sm text-slate-500 border-t border-slate-800/50 pt-4">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    to: { type: String, default: null },
    isLink: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    showTopBar: { type: Boolean, default: false },
    tag: { type: String, default: null },
    tagClass: { type: String, default: null },
    title: { type: String, default: null },
    titleClass: { type: String, default: null },
    description: { type: String, default: null },
    descriptionClass: { type: String, default: null }
})
</script>
