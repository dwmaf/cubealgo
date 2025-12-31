<template>
    <div class="relative w-full h-full flex items-center justify-center p-1">
        <svg viewBox="0 0 124 124" class="w-full h-full">
            <g transform="translate(12, 12)">
                <!-- Top Stickers (3x3 Grid) -->
                <!-- Indices: 0-2 (top), 3-5 (mid), 6-8 (bottom) -->
                <rect v-for="(active, i) in topStickers" :key="i" :x="(i % 3) * 33" :y="Math.floor(i / 3) * 33"
                    width="30" height="30" rx="4" :fill="active ? '#ffff00' : '#1e293b'" stroke="#0a0a0f"
                    stroke-width="1.5" />

                <!-- Top (Back) -->
                <g v-for="(color, i) in sideStickers.back" :key="'b' + i">
                    <rect v-if="color" :x="i * 33 + 1" y="-12" width="28" height="10" rx="2" :fill="color" />
                </g>

                <!-- Bottom (Front) -->
                <g v-for="(color, i) in sideStickers.front" :key="'f' + i">
                    <rect v-if="color" :x="i * 33 + 1" y="99" width="28" height="10" rx="2" :fill="color" />
                </g>

                <!-- Left -->
                <g v-for="(color, i) in sideStickers.left" :key="'l' + i">
                    <rect v-if="color" x="-12" :y="i * 33 + 1" width="10" height="28" rx="2" :fill="color" />
                </g>

                <!-- Right -->
                <g v-for="(color, i) in sideStickers.right" :key="'r' + i">
                    <rect v-if="color" x="99" :y="i * 33 + 1" width="10" height="28" rx="2" :fill="color" />
                </g>
            </g>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    caseId: [String, Number],
    type: {
        type: String,
        default: 'OLL'
    }
})

const colors = {
    yellow: '#ffff00',
    red: '#ef4444',
    orange: '#f97316',
    blue: '#3b82f6',
    green: '#22c55e',
    blank: '#1e293b'
}

const topStickers = computed(() => {
    const y = true
    const _ = false

    if (props.type === 'OLL') {
        const ollMaps = {
            '1': [
                [_, _, _],
                [_, y, _],
                [_, _, _]
            ],
            '2': [
                [_, _, _],
                [_, y, _],
                [_, _, _]
            ],
            '3': [
                [_, _, _],
                [_, y, _],
                [y, _, _]
            ],
            '4': [
                [_, _, _],
                [_, y, _],
                [_, _, y]
            ],
            '5': [
                [_, _, _],
                [_, y, y],
                [_, y, y]
            ],
            '6': [
                [_, y, y],
                [_, y, y],
                [_, _, _]
            ],
            '7': [
                [_, y, _],
                [y, y, _],
                [y, _, _]
            ],
            '8': [
                [y, _, _],
                [y, y, _],
                [_, y, _]
            ],
            '9': [
                [_, y, _],
                [y, y, _],
                [_, _, y]
            ],
            '10': [
                [_, y, _],
                [_, y, y],
                [y, _, _]
            ],
            // '58': [
            //     [_, _, _],
            //     [_, _, _],
            //     [_, _, _]
            // ],
            '11': [
                [_, _, _],
                [_, y, y],
                [y, y, _]
            ],
            '12': [
                [y, y, _],
                [_, y, y],
                [_, _, _]
            ],
            '13': [
                [_, _, _],
                [y, y, y],
                [y, _, _]
            ],
            '14': [
                [_, _, _],
                [y, y, y],
                [_, _, y]
            ],
            '15': [
                [_, _, _],
                [y, y, y],
                [_, _, y]
            ],
            '16': [
                [_, _, y],
                [y, y, y],
                [_, _, _]
            ],
            '17': [
                [y, _, _],
                [_, y, _],
                [_, _, y]
            ],
            '18': [
                [y, _, y],
                [_, y, _],
                [_, _, _]
            ],
            '19': [
                [_, _, _],
                [_, y, _],
                [y, _, y]
            ],
            '20': [
                [y, _, y],
                [_, y, _],
                [y, _, y]
            ],
            '21': [
                [_, y, _],
                [y, y, y],
                [_, y, _]
            ],
            '22': [
                [_, y, _],
                [y, y, y],
                [_, y, _]
            ],
            '23': [
                [y, y, y],
                [y, y, y],
                [_, y, _]
            ],
            '24': [
                [_, y, y],
                [y, y, y],
                [_, y, y]
            ],
            '25': [
                [y, y, _],
                [y, y, y],
                [_, y, y]
            ],
            '26': [
                [_, y, y],
                [y, y, y],
                [_, y, _]
            ],
            '27': [
                [_, y, _],
                [y, y, y],
                [y, y, _]
            ],
            '28': [
                [y, y, y],
                [y, y, _],
                [y, _, y]
            ],
            '29': [
                [_, y, y],
                [y, y, _],
                [_, _, y]
            ],
            '30': [
                [_, y, _],
                [y, y, _],
                [y, _, y]
            ],
            '31': [
                [_, y, y],
                [_, y, y],
                [_, _, y]
            ],
            '32': [
                [y, y, _],
                [y, y, _],
                [y, _, _]
            ],
            '33': [
                [_, _, y],
                [y, y, y],
                [_, _, y]
            ],
            '34': [
                [_, _, _],
                [y, y, y],
                [y, _, y]
            ],
            '35': [
                [y, _, _],
                [_, y, y],
                [_, y, y]
            ],
            '36': [
                [y, _, _],
                [y, y, _],
                [_, y, y]
            ],
            '37': [
                [y, y, _],
                [y, y, _],
                [_, _, y]
            ],
            '38': [
                [_, y, y],
                [y, y, _],
                [y, _, _]
            ],
            '39': [
                [_, _, y],
                [y, y, y],
                [y, _, _]
            ],
            '40': [
                [y, _, _],
                [y, y, y],
                [_, _, y]
            ],
            '41': [
                [_, y, _],
                [y, y, _],
                [y, _, y]
            ],
            '42': [
                [y, _, y],
                [y, y, _],
                [_, y, _]
            ],
            '43': [
                [_, y, y],
                [_, y, y],
                [_, _, y]
            ],
            '44': [
                [y, y, _],
                [y, y, _],
                [y, _, _]
            ],
            '45': [
                [_, _, y],
                [y, y, y],
                [_, _, y]
            ],
            '46': [
                [y, y, _],
                [_, y, _],
                [y, y, _]
            ],
            '47': [
                [_, y, _],
                [_, y, y],
                [_, _, _]
            ],
            '48': [
                [_, y, _],
                [y, y, _],
                [_, _, _]
            ],
            '49': [
                [_, _, _],
                [y, y, _],
                [_, y, _]
            ],
            '50': [
                [_, _, _],
                [_, y, y],
                [_, y, _]
            ],
            '51': [
                [_, _, _],
                [y, y, y],
                [_, _, _]
            ],
            '52': [
                [_, y, _],
                [_, y, _],
                [_, y, _]
            ],
            '53': [
                [_, _, _],
                [y, y, _],
                [_, y, _]
            ],
            '54': [
                [_, y, _],
                [y, y, _],
                [_, _, _]
            ],
            '55': [
                [_, _, _],
                [y, y, y],
                [_, _, _]
            ],
            '56': [
                [_, _, _],
                [y, y, y],
                [_, _, _]
            ],
            '57': [
                [y, _, y],
                [y, y, y],
                [y, _, y]
            ],
        }
        const res = ollMaps[props.caseId.toString()] || [[_, _, _], [_, y, _], [_, _, _]]
        return res.flat()
    }

    // For PLL, top is always all yellow
    return [y, y, y, y, y, y, y, y, y]
})

const sideStickers = computed(() => {
    const n = null
    const blank = { back: [n, n, n], front: [n, n, n], left: [n, n, n], right: [n, n, n] }
    const y = colors.yellow

    if (props.type === 'OLL') {
        const maps = {
            '1': {
                front: [n, y, n],
                back: [n, y, n],
                left: [y, y, y],
                right: [y, y, y]
            },
            '2': {
                front: [n, y, n],
                back: [y, y, y],
                left: [n, y, y],
                right: [n, y, y]
            },
            '3': {
                back: [y, y, n],
                right: [y, y, n],
                front: [n, y, y],
                left: [n, y, n],
            },
            // '58': {
            //     back: [n, n, n],
            //     right: [n, n, n],
            //     front: [n, n, n],
            //     left: [n, n, n],
            // },
            '4': {
                back: [n, y, y],
                right: [n, y, n],
                front: [y, y, n],
                left: [y, y, n],
            },
            '5': {
                back: [y, y, n],
                right: [y, n, n],
                front: [n, n, n],
                left: [n, y, y],
            },
            '6': {
                back: [n, n, n],
                right: [n, n, y],
                front: [y, y, n],
                left: [y, y, n],
            },
            '7': {
                back: [y, n, n],
                right: [y, y, n],
                front: [n, y, y],
                left: [n, n, n],
            },
            '8': {
                back: [n, y, y],
                right: [n, y, y],
                front: [y, n, n],
                left: [n, n, n],
            },
            '9': {
                back: [n, n, y],
                right: [n, y, n],
                front: [y, y, n],
                left: [y, n, n],
            },
            '10': {
                back: [y, n, n],
                right: [y, n, n],
                front: [n, y, y],
                left: [n, y, n],
            },
            '11': {
                back: [y, y, n],
                right: [y, n, n],
                front: [n, n, y],
                left: [n, y, n],
            },
            '12': {
                back: [n, n, y],
                right: [n, n, y],
                front: [y, y, n],
                left: [n, y, n],
            },
            '13': {
                back: [y, y, n],
                right: [y, n, n],
                front: [n, y, y],
                left: [n, n, n],
            },
            '14': {
                back: [n, y, y],
                right: [n, n, n],
                front: [y, y, n],
                left: [y, n, n],
            },
            '15': {
                back: [y, y, n],
                right: [y, n, n],
                front: [n, y, n],
                left: [n, n, y],
            },
            '16': {
                back: [n, y, n],
                right: [n, n, y],
                front: [y, y, n],
                left: [y, n, n],
            },
            '26': { front: [n, n, y], right: [n, n, y], back: [y, n, n], left: [n, n, n] },
            '27': { front: [y, n, n], left: [y, n, n], back: [n, n, y], right: [n, n, n] }
        }
        return maps[props.caseId.toString()] || blank
    }

    if (props.type === 'PLL') {
        const r = colors.red
        const g = colors.green
        const b = colors.blue
        const o = colors.orange

        const maps = {
            'Ua': { front: [r, b, r], back: [o, o, o], left: [b, g, b], right: [g, r, g] },
            'Ub': { front: [r, g, r], back: [o, o, o], left: [b, r, b], right: [g, b, g] },
            'H': { front: [r, o, r], back: [o, r, o], left: [b, g, b], right: [g, b, g] },
            'Z': { front: [r, g, r], back: [o, b, o], left: [b, o, b], right: [g, r, g] },
            'Aa': { front: [r, r, b], back: [o, o, r], left: [b, b, o], right: [g, g, g] },
            'Ab': { front: [r, r, g], back: [o, o, b], left: [b, b, r], right: [g, g, o] },
            'T': { front: [r, b, r], back: [o, r, o], left: [b, b, b], right: [g, o, r] },
            'Y': { front: [r, b, r], back: [o, g, o], left: [b, o, b], right: [g, r, g] },
        }
        return maps[props.caseId.toString()] || blank
    }

    return blank
})
</script>
