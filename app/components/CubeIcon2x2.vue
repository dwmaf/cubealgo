<template>
    <div class="relative w-full h-full flex items-center justify-center p-2">
        <svg viewBox="0 0 120 120" class="w-full h-full">
            <g transform="translate(20, 20)">
                <rect v-for="(active, i) in topStickers" :key="i" :x="(i % 2) * 42" :y="Math.floor(i / 2) * 42"
                    width="38" height="38" rx="6" :fill="active ? '#ffff00' : '#1e293b'" stroke="#0a0a0f"
                    stroke-width="2" />

                <!-- Each side can have 2 stickers -->
                <!-- Top (Back) -->
                <rect v-if="sideStickers.back[0]" x="4" y="-10" width="30" height="8" rx="2"
                    :fill="sideStickers.back[0]" />
                <rect v-if="sideStickers.back[1]" x="46" y="-10" width="30" height="8" rx="2"
                    :fill="sideStickers.back[1]" />

                <!-- Bottom (Front) -->
                <rect v-if="sideStickers.front[0]" x="4" y="82" width="30" height="8" rx="2"
                    :fill="sideStickers.front[0]" />
                <rect v-if="sideStickers.front[1]" x="46" y="82" width="30" height="8" rx="2"
                    :fill="sideStickers.front[1]" />

                <!-- Left -->
                <rect v-if="sideStickers.left[0]" x="-10" y="4" width="8" height="30" rx="2"
                    :fill="sideStickers.left[0]" />
                <rect v-if="sideStickers.left[1]" x="-10" y="46" width="8" height="30" rx="2"
                    :fill="sideStickers.left[1]" />

                <!-- Right -->
                <rect v-if="sideStickers.right[0]" x="82" y="4" width="8" height="30" rx="2"
                    :fill="sideStickers.right[0]" />
                <rect v-if="sideStickers.right[1]" x="82" y="46" width="8" height="30" rx="2"
                    :fill="sideStickers.right[1]" />
            </g>

        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    caseName: String,
    type: {
        type: String,
        default: 'OLL'
    }
})

const isPBL = computed(() => props.type === 'PBL')

const colors = {
    yellow: '#ffff00',
    red: '#ef4444',
    orange: '#f97316',
    blue: '#3b82f6',
    green: '#22c55e',
    blank: '#1e293b'
}

const topStickers = computed(() => {
    // OLL Cases (TL, TR, BL, BR)
    const ollMaps = {
        'Sune': [false, false, true, false],
        'Antisune': [false, true, false, false],
        'H': [false, false, false, false],
        'Pi': [false, false, false, false],
        'T': [true, true, false, false],
        'U': [false, false, true, true],
        'L': [true, false, false, true]
    }

    if (props.type === 'OLL' && ollMaps[props.caseName]) {
        return ollMaps[props.caseName]
    }

    return [true, true, true, true]
})

const sideStickers = computed(() => {
    const n = null
    const blank = { back: [n, n], front: [n, n], left: [n, n], right: [n, n] }

    if (props.type === 'OLL') {
        const y = colors.yellow
        const maps = {
            'Sune': { front: [n, y], right: [n, y], back: [y, n], left: [n, n] },
            'Antisune': { front: [y, n], right: [y, n], back: [n, y], left: [n, n] },
            'H': { front: [y, y], back: [y, y], left: [n, n], right: [n, n] },
            'Pi': { back: [y, y], left: [y, n], right: [y, n], front: [n, n] },
            'T': { left: [n, y], right: [n, y], back: [n, n], front: [n, n] },
            'U': { front: [y, y], back: [n, n], left: [n, n], right: [n, n] },
            'L': { front: [n, y], right: [y, n], back: [n, n], left: [n, n] }
        }
        return maps[props.caseName] || blank
    }

    if (props.type === 'PBL') {
        const r = colors.red
        const o = colors.orange
        const b = colors.blue
        const g = colors.green

        const pblMaps = {
            'Adj': { front: [g, b], back: [o, o], left: [b, r], right: [g, r] },
            'Opp': { front: [g, b], back: [g, b], left: [o, r], right: [o, r] },
        }
        return pblMaps[props.caseName] || blank
    }

    return blank
})


</script>
