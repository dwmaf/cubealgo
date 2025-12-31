<template>
    <div class="relative w-full h-full flex items-center justify-center p-1">
        <svg viewBox="0 0 120 120" class="w-full h-full">
            <g transform="translate(13, 13)">
                <!-- Top Stickers (4x4 Grid) -->
                <rect v-for="(color, i) in topStickers" :key="'top-' + i" :x="(i % 4) * 24" :y="Math.floor(i / 4) * 24"
                    width="22" height="22" rx="3" :fill="color" stroke="#0a0a0f" stroke-width="1.2" />

                <!-- Side Stickers Indicators (4 stickers per side) -->
                <!-- Top (Back) -->
                <g v-for="(color, i) in sideStickers.back" :key="'b' + i">
                    <rect v-if="color" :x="i * 24 + 1" y="-10" width="20" height="8" rx="2" :fill="color" />
                </g>

                <!-- Bottom (Front) -->
                <g v-for="(color, i) in sideStickers.front" :key="'f' + i">
                    <rect v-if="color" :x="i * 24 + 1" y="96" width="20" height="8" rx="2" :fill="color" />
                </g>

                <!-- Left -->
                <g v-for="(color, i) in sideStickers.left" :key="'l' + i">
                    <rect v-if="color" x="-10" :y="i * 24 + 1" width="8" height="20" rx="2" :fill="color" />
                </g>

                <!-- Right -->
                <g v-for="(color, i) in sideStickers.right" :key="'r' + i">
                    <rect v-if="color" x="96" :y="i * 24 + 1" width="8" height="20" rx="2" :fill="color" />
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
    red: '#d00000',
    orange: '#ee8800',
    blue: '#2040d0',
    green: '#11aa00',
    white: '#ffffff',
    blank: '#1e293b'
}

const topStickers = computed(() => {
    const y = colors.yellow
    const w = colors.white
    const r = colors.red
    const g = colors.green
    const b = colors.blue
    const o = colors.orange
    const _ = colors.blank
    const n = null

    if (props.type === 'OLL') {
        const ollMaps = {
            'H (FB)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'H (LR)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Pi (B)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Pi (F)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Pi (L)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Pi (R)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Antisune (BL)': [
                [y, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Antisune (FL)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, _]
            ],
            'Antisune (BR)': [
                [_, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Antisune (FR)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, y]
            ],
            'Sune (BL)': [
                [y, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Sune (BR)': [
                [_, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'Sune (FL)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, _]
            ],
            'Sune (FR)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, y]
            ],
            'L (BL)': [
                [y, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, y]
            ],
            'L (BR)': [
                [_, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, _]
            ],
            'L (FL)': [
                [y, y, y, _],
                [y, y, y, _],
                [y, y, y, _],
                [_, y, y, y]
            ],
            'L (FR)': [
                [_, y, y, y],
                [_, y, y, y],
                [_, y, y, y],
                [y, y, y, _]
            ],
            'T (B)': [
                [_, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, y]
            ],
            'T (F)': [
                [y, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'T (L)': [
                [_, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, y]
            ],
            'T (R)': [
                [_, _, _, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, y, y, y]
            ],
            'U (B)': [
                [y, _, _, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, y, y, _]
            ],
            'U (F)': [
                [y, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, _]
            ],
            'U (L)': [
                [_, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [_, _, _, y]
            ],
            'U (R)': [
                [y, y, y, _],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, _]
            ],
            'Solved': [
                [y, y, y, y],
                [y, y, y, y],
                [y, y, y, y],
                [y, _, _, y]
            ],
        }
        const resId = props.caseId ? props.caseId.toString() : ''
        const res = ollMaps[resId] || [
            [_, _, _, _], [_, _, _, _], [_, _, _, _], [_, _, _, _]
        ]
        return res.flat()
    }

    if (props.type === 'Notation') {
        const lasttoedge = [
            [_, _, _, _],
            [w, _, _, w],
            [y, _, _, y],
            [_, _, _, _],
        ]
        return lasttoedge.flat()
    }

    // Default untuk PLL (Semua Kuning)
    return Array(16).fill(y)
})

const sideStickers = computed(() => {
    const n = null
    const y = colors.yellow
    const r = colors.red
    const g = colors.green
    const b = colors.blue
    const o = colors.orange
    const w = colors.white

    const blank = { back: [n, n, n, n], front: [n, n, n, n], left: [n, n, n, n], right: [n, n, n, n] }

    if (props.type === 'OLL') {
        const maps = {
            'H (FB)': {
                front: [y, y, y, y],
                back: [y, n, n, y],
            },
            'H (LR)': {
                left: [y, n, n, y],
                right: [y, n, n, y],
                front: [n, y, y, n],
            },
            'Pi (B)': {
                left: [y, n, n, n],
                right: [y, n, n, n],
                front: [y, y, y, y],
            },
            'Pi (F)': {
                back: [y, n, n, y],
                right: [n, n, n, y],
                front: [n, y, y, n],
                left: [n, n, n, y],
            },
            // 'XYZ': { 
            //     back: [n, n, n, n],
            //     right: [n, n, n, n],
            //     front: [n, n, n, n],
            //     left: [n, n, n, n],
            // },
            'Pi (L)': {
                back: [y, n, n, n],
                right: [y, n, n, y],
                front: [y, y, y, n],
            },
            'Pi (R)': {
                back: [n, n, n, y],
                front: [n, y, y, y],
                left: [y, n, n, y],
            },
            'Antisune (BL)': {
                back: [n, n, n, y],
                right: [n, n, n, y],
                front: [y, y, y, n],
            },
            'Antisune (BR)': {
                right: [n, n, n, y],
                front: [y, y, y, n],
                left: [y, n, n, n],
            },
            'Antisune (FL)': {
                back: [n, n, n, y],
                right: [n, n, n, y],
                front: [n, y, y, n],
                left: [y, n, n, n],
            },
            'Antisune (FR)': {
                back: [n, n, n, y],
                front: [y, y, y, n],
                left: [y, n, n, n],
            },
            'Sune (BL)': {
                right: [y, n, n, n],
                front: [n, y, y, y],
                left: [n, n, n, y],
            },
            'Sune (BR)': {
                back: [y, n, n, n],
                front: [n, y, y, y],
                left: [n, n, n, y],
            },
            'Sune (FL)': {
                back: [y, n, n, n],
                right: [y, n, n, n],
                front: [n, y, y, y],
            },
            'Sune (FR)': {
                back: [y, n, n, n],
                right: [y, n, n, n],
                front: [n, y, y, n],
                left: [n, n, n, y],
            },
            'L (BL)': {
                back: [n, n, n, y],
                front: [n, y, y, n],
                left: [n, n, n, y],
            },
            'L (BR)': {
                back: [y, n, n, n],
                right: [n, n, n, y],
                front: [n, y, y, n],
            },
            'L (FL)': {
                right: [y, y, y, n],
                front: [y, n, n, n],
            },
            'L (FR)': {
                front: [n, n, n, y],
                left: [y, y, y, n],
            },
            'T (B)': {
                right: [y, n, n, n],
                front: [n, y, y, n],
                left: [y, n, n, n],
            },
            'T (F)': {
                right: [n, n, n, y],
                front: [n, y, y, n],
                left: [n, n, n, y],
            },
            'T (L)': {
                back: [y, n, n, n],
                front: [y, y, y, n],
            },
            'T (R)': {
                back: [y, y, y, n],
                front: [y, n, n, n],
            },
            'U (B)': {
                back: [n, y, y, n],
                front: [y, n, n, y],
            },
            'U (F)': {
                front: [y, y, y, y],
            },
            'U (L)': {
                front: [n, y, y, n],
                left: [y, n, n, y],
            },
            'U (R)': {
                right: [y, n, n, y],
                front: [n, y, y, n],
            },
            'Solved': {
                front: [n, y, y, n],
            },
        }
        const resId = props.caseId ? props.caseId.toString() : ''
        return maps[resId] || blank
    }

    if (props.type === 'PLL') {
        const maps = {
            'Pure-E': {
                front: [n, b, b, n],
                back: [n, b, b, n],
            },
            'Adj-C': {
                back: [r, r, r, b],
                right: [o, b, b, r],
                front: [o, o, o, b],
                left: [g, g, g, g],
            },
            'Adj-E': {
                back: [g, g, g, g],
                right: [r, b, b, r],
                front: [b, r, r, b],
                left: [o, o, o, o],
            },
            'Ba': {
                back: [g, o, o, g],
                right: [r, r, r, b],
                front: [r, g, g, o],
                left: [o, b, b, b],
            },
            'Bb': {
                back: [g, r, r, r],
                right: [b, o, o, g],
                front: [b, b, b, r],
                left: [o, g, g, o],
            },
            'Ca': {
                back: [g, o, o, r],
                right: [b, r, r, g],
                front: [b, g, g, r],
                left: [o, b, b, o],
            },
            'Cb': {
                back: [b, g, g, o],
                right: [g, r, r, g],
                front: [b, o, o, r],
                left: [r, b, b, o],
            },
            'Da': {
                back: [o, r, r, r],
                right: [b, o, o, o],
                front: [g, b, b, g],
                left: [b, g, g, r],
            },
            'Db': {
                back: [o, o, o, g],
                right: [r, r, r, o],
                front: [r, b, b, g],
                left: [b, g, g, b],
            },
            'Diag-C': {
                back: [b, g, g, g],
                right: [r, r, r, o],
                front: [b, b, b, g],
                left: [r, o, o, o],
            },
            'Ka': {
                back: [r, g, g, b],
                right: [o, o, o, r],
                front: [o, b, b, b],
                left: [g, r, r, g],
            },
            'Kb': {
                back: [o, r, r, g],
                right: [r, g, g, r],
                front: [o, o, o, b],
                left: [b, b, b, g],
            },
            'M': {
                back: [b, g, g, o],
                right: [g, r, r, b],
                front: [g, b, b, o],
                left: [r, o, o, r],
            },
            'O+': {
                back: [r, b, b, r],
                right: [b, o, o, b],
                front: [o, g, g, o],
                left: [g, r, r, g],
            },
            'O-': {
                back: [g, o, o, g],
                right: [r, g, g, r],
                front: [b, r, r, b],
                left: [o, b, b, o],
            },
            'Pa': {
                back: [b, g, g, o],
                right: [g, b, b, b],
                front: [g, o, o, o],
                left: [r, r, r, r],
            },
            'Pb': {
                back: [b, r, r, o],
                right: [g, g, g, g],
                front: [b, b, b, r],
                left: [r, o, o, o],
            },
            'Pure-E': {
                back: [b, g, g, b],
                right: [o, o, o, o],
                front: [g, b, b, g],
                left: [r, r, r, r],
            },
            // 'XYZ': { 
            //     back: [],
            //     right: [],
            //     front: [],
            //     left: [],
            // },
            'Q': {
                back: [b, o, o, g],
                right: [r, b, b, o],
                front: [b, r, r, g],
                left: [r, g, g, o],
            },
            'Sa': {
                back: [o, b, b, r],
                right: [b, g, g, g],
                front: [o, o, o, r],
                left: [b, r, r, g],
            },
            'Sb': {
                back: [g, r, r, b],
                right: [o, o, o, r],
                front: [g, b, b, b],
                left: [o, g, g, r],
            },
            'W': {
                back: [b, g, g, b],
                right: [o, r, r, o],
                front: [g, o, o, g],
                left: [r, b, b, r],
            },
            'X': {
                back: [r, g, g, o],
                right: [g, o, o, b],
                front: [r, b, b, o],
                left: [g, r, r, b],
            },
        }
        const resId = props.caseId ? props.caseId.toString() : ''
        return maps[resId] || blank
    }

    if (props.type === 'Notation') {
        const maps = {
            'Last Edge Pair': {
                left: [n, g, o, n],
                right: [n, g, o, n],
            }
        }
        const resId = props.caseId ? props.caseId.toString() : ''
        return maps[resId] || blank
    }

    return blank
})
</script>
