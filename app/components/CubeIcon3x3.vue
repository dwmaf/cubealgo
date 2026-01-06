<template>
    <div class="relative w-full h-full flex items-center justify-center p-1">
        <svg viewBox="0 0 124 124" class="w-full h-full">
            <g transform="translate(12, 12)">
                <!-- Top Stickers (3x3 Grid) -->
                <!-- Indices: 0-2 (top), 3-5 (mid), 6-8 (bottom) -->
                <rect v-for="(val, i) in topStickers" :key="i" :x="(i % 3) * 33" :y="Math.floor(i / 3) * 33" width="30"
                    height="30" rx="4" :fill="typeof val === 'string' ? val : (val ? colors.yellow : colors.blank)"
                    stroke="#0a0a0f" stroke-width="1.5" />

                <g v-for="(color, i) in sideStickers.back" :key="'b' + i">
                    <rect v-if="color" :x="i * 33 + 1" y="-12" width="28" height="10" rx="2" :fill="color" />
                </g>

                <g v-for="(color, i) in sideStickers.front" :key="'f' + i">
                    <rect v-if="color" :x="i * 33 + 1" y="99" width="28" height="10" rx="2" :fill="color" />
                </g>

                <g v-for="(color, i) in sideStickers.left" :key="'l' + i">
                    <rect v-if="color" x="-12" :y="i * 33 + 1" width="10" height="28" rx="2" :fill="color" />
                </g>

                <g v-for="(color, i) in sideStickers.right" :key="'r' + i">
                    <rect v-if="color" x="99" :y="i * 33 + 1" width="10" height="28" rx="2" :fill="color" />
                </g>

                <g v-if="arrows && arrows.length > 0">
                    <line v-for="(arrow, i) in arrows" :key="'arr' + i" :x1="arrow.from.x" :y1="arrow.from.y"
                        :x2="arrow.to.x" :y2="arrow.to.y" stroke="#000000" stroke-width="4"
                        :marker-start="arrow.twoWay ? 'url(#arrowhead3x3-start-' + props.caseId + ')' : ''"
                        :marker-end="'url(#arrowhead3x3-end-' + props.caseId + ')'" />
                </g>
            </g>

            <defs>
                <marker :id="'arrowhead3x3-end-' + props.caseId" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3"
                    markerHeight="3" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
                </marker>
                <marker :id="'arrowhead3x3-start-' + props.caseId" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3"
                    markerHeight="3" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
                </marker>
            </defs>
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
    blank: '#1e293b'
}

const topStickers = computed(() => {
    if (props.caseId === 'logo') {
        return [
            colors.green, colors.orange, colors.blue,
            colors.green, colors.yellow, colors.blue,
            colors.red, colors.red, colors.red
        ]
    }

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
                [y, _, _],
                [y, y, _],
                [y, y, _]
            ],
            '44': [
                [_, _, y],
                [_, y, y],
                [_, y, y]
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
                [_, y, y],
                [_, y, _]
            ],
            '54': [
                [_, y, _],
                [_, y, y],
                [_, _, _]
            ],
            '55': [
                [_, y, _],
                [_, y, _],
                [_, y, _]
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

    if (props.caseId === 'logo') {
        return blank
    }

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
            '17': {
                back: [n, y, n],
                right: [y, y, n],
                front: [y, y, n],
                left: [n, y, n],
            },
            '18': {
                back: [n, y, n],
                right: [n, y, n],
                front: [y, y, y],
                left: [n, y, n],
            },
            '19': {
                back: [n, y, n],
                right: [y, y, n],
                front: [n, y, n],
                left: [y, y, n],
            },
            '20': {
                back: [n, y, n],
                right: [n, y, n],
                front: [n, y, n],
                left: [n, y, n],
            },
            '21': {
                back: [y, n, y],
                right: [n, n, n],
                front: [y, n, y],
                left: [n, n, n],
            },
            '22': {
                back: [n, n, y],
                right: [n, n, n],
                front: [n, n, y],
                left: [y, n, y],
            },
            '23': {
                back: [n, n, n],
                right: [n, n, n],
                front: [y, n, y],
                left: [n, n, n],
            },
            '24': {
                back: [y, n, n],
                right: [n, n, n],
                front: [y, n, n],
                left: [n, n, n],
            },
            '25': {
                back: [n, n, n],
                right: [y, n, n],
                front: [y, n, n],
                left: [n, n, n],
            },
            '26': {
                back: [n, n, n],
                right: [n, n, y],
                front: [y, n, n],
                left: [y, n, n],
            },
            '27': {
                back: [y, n, n],
                right: [y, n, n],
                front: [n, n, y],
                left: [n, n, n],
            },
            '28': {
                back: [n, n, n],
                right: [n, y, n],
                front: [n, y, n],
                left: [n, n, n],
            },
            '29': {
                back: [y, n, n],
                right: [n, y, n],
                front: [y, y, n],
                left: [n, n, n],
            },
            '30': {
                back: [n, n, n],
                right: [y, y, n],
                front: [n, y, n],
                left: [y, n, n],
            },
            '31': {
                back: [y, n, n],
                right: [n, n, n],
                front: [y, y, n],
                left: [n, y, n],
            },
            '32': {
                back: [n, n, y],
                right: [n, y, n],
                front: [n, y, y],
                left: [n, n, n],
            },
            '33': {
                back: [y, y, n],
                right: [n, n, n],
                front: [y, y, n],
                left: [n, n, n],
            },
            '34': {
                back: [n, y, n],
                right: [y, n, n],
                front: [n, y, n],
                left: [y, n, n],
            },
            '35': {
                back: [n, y, n],
                right: [y, n, n],
                front: [y, n, n],
                left: [n, y, n],
            },
            '36': {
                back: [n, y, n],
                right: [y, y, n],
                front: [y, n, n],
                left: [n, n, n],
            },
            '37': {
                back: [n, n, n],
                right: [y, y, n],
                front: [y, y, n],
                left: [n, n, n],
            },
            '38': {
                back: [y, n, n],
                right: [n, y, y],
                front: [n, y, n],
                left: [n, n, n],
            },
            '39': {
                back: [y, y, n],
                right: [n, n, y],
                front: [n, y, n],
                left: [n, n, n],
            },
            '40': {
                back: [n, y, y],
                right: [n, n, n],
                front: [n, y, n],
                left: [n, n, y],
            },
            '41': {
                back: [y, n, y],
                right: [n, y, n],
                front: [n, y, n],
                left: [n, n, n],
            },
            '42': {
                back: [n, y, n],
                right: [n, y, n],
                front: [y, n, y],
                left: [n, n, n],
            },
            '43': {
                back: [n, y, n],
                right: [y, y, y],
                front: [n, n, n],
                left: [n, n, n],
            },
            '44': {
                back: [n, y, n],
                right: [n, n, n],
                front: [n, n, n],
                left: [y, y, y],
            },
            '45': {
                back: [n, y, n],
                right: [n, n, n],
                front: [n, y, n],
                left: [y, n, y],
            },
            '46': {
                back: [n, n, n],
                right: [y, y, y],
                front: [n, n, n],
                left: [n, y, n],
            },
            '47': {
                back: [y, n, n],
                right: [y, n, y],
                front: [y, y, n],
                left: [n, y, n],
            },
            '48': {
                back: [n, n, y],
                right: [n, y, n],
                front: [n, y, y],
                left: [y, n, y],
            },
            '49': {
                back: [y, y, n],
                right: [y, y, y],
                front: [y, n, n],
                left: [n, n, n],
            },
            '50': {
                back: [n, y, y],
                right: [n, n, n],
                front: [n, n, y],
                left: [y, y, y],
            },
            '51': {
                back: [n, y, y],
                right: [n, n, n],
                front: [n, y, y],
                left: [y, n, y],
            },
            '52': {
                back: [y, n, n],
                right: [y, y, y],
                front: [y, n, n],
                left: [n, y, n],
            },
            '53': {
                back: [n, y, n],
                right: [y, n, y],
                front: [n, n, n],
                left: [y, y, y],
            },
            '54': {
                back: [n, n, n],
                right: [y, n, y],
                front: [n, y, n],
                left: [y, y, y],
            },
            '55': {
                back: [n, n, n],
                right: [y, y, y],
                front: [n, n, n],
                left: [y, y, y],
            },
            '56': {
                back: [n, y, n],
                right: [y, n, y],
                front: [n, y, n],
                left: [y, n, y],
            },
            '57': {
                back: [n, y, n],
                right: [n, n, n],
                front: [n, y, n],
                left: [n, n, n],
            },
        }
        return maps[props.caseId.toString()] || blank
    }

    if (props.type === 'PLL') {
        const r = colors.red
        const g = colors.green
        const b = colors.blue
        const o = colors.orange

        const maps = {
            'Ua': {
                back: [g, g, g],
                right: [r, o, r],
                front: [b, r, b],
                left: [o, b, o],
            },
            'Ub': {
                back: [g, g, g],
                right: [r, b, r],
                front: [b, o, b],
                left: [o, r, o],
            },
            'H': { front: [r, o, r], back: [o, r, o], left: [b, g, b], right: [g, b, g] },
            // 'XYZ': { 
            //     back: [r, r, r], 
            //     right: [g, g, g],
            //     front: [o, o, o], 
            //     left: [b, b, b], 
            // },
            'Z': {
                back: [b, o, b],
                right: [o, b, o],
                front: [g, r, g],
                left: [r, g, r],
            },
            'Aa': {
                back: [r, g, r],
                right: [b, r, o],
                front: [b, b, g],
                left: [g, o, o],
            },
            'Ab': {
                back: [b, g, o],
                right: [g, r, g],
                front: [b, b, r],
                left: [r, o, o],
            },
            'E': {
                back: [o, g, r],
                right: [b, r, g],
                front: [o, b, r],
                left: [b, o, g],
            },
            'Ra': {
                back: [r, g, b],
                right: [o, b, r],
                front: [o, o, b],
                left: [g, r, g],
            },
            'Rb': {
                back: [b, r, g],
                right: [r, o, b],
                front: [o, b, o],
                left: [r, g, g],
            },
            'Ja': {
                back: [g, r, r],
                right: [b, g, g],
                front: [b, b, r],
                left: [o, o, o],
            },
            'Jb': {
                back: [g, g, r],
                right: [b, b, g],
                front: [b, r, r],
                left: [o, o, o],
            },
            'T': {
                back: [g, g, r],
                right: [b, o, g],
                front: [b, b, r],
                left: [o, r, o],
            },
            'F': {
                back: [r, g, o],
                right: [g, o, r],
                front: [b, b, b],
                left: [g, r, o],
            },
            'V': {
                back: [b, r, g],
                right: [r, g, o],
                front: [b, b, g],
                left: [r, o, o],
            },
            'Y': {
                back: [b, o, g],
                right: [r, r, o],
                front: [b, b, g],
                left: [r, g, o],
            },
            'Na': {
                back: [g, g, b],
                right: [o, o, r],
                front: [g, b, b],
                left: [o, r, r],
            },
            'Nb': {
                back: [b, g, g],
                right: [r, o, o],
                front: [b, b, g],
                left: [r, r, o],
            },
            'Ga': {
                back: [g, b, r],
                right: [b, o, g],
                front: [b, r, r],
                left: [o, g, o],
            },
            'Gb': {
                back: [g, o, r],
                right: [b, b, g],
                front: [b, g, r],
                left: [o, r, o],
            },
            'Gc': {
                back: [g, r, r],
                right: [b, o, g],
                front: [b, g, r],
                left: [o, b, o],
            },
            'Gd': {
                back: [g, b, r],
                right: [b, g, g],
                front: [b, o, r],
                left: [o, r, o],
            },
        }
        const resId = props.caseId ? props.caseId.toString() : ''
        return maps[resId] || blank
    }

    return blank
})

const arrows = computed(() => {
    if (props.type !== 'PLL' || !props.caseId) return []

    const name = props.caseId.toString()
    const p = (r, c, ox = 0, oy = 0) => ({
        x: c * 33 + 15 + ox,
        y: r * 33 + 15 + oy
    })
    // 0,0  0,1  0,2
    // 1,0  1,1  1,2
    // 2,0  2,1  2,2
    // geser ke kanan kiri itu pakai x
    // geser ke atas bawah itu pakai y
    const pllManualArrows = {
        'Ua': [
            { from: p(2, 1, 4), to: p(1, 2, 5) },
            { from: p(1, 2, 0, -4), to: p(1, 0, 0, -4) },
            { from: p(1, 0, -4), to: p(2, 1) }
        ],
        'Ub': [
            { from: p(1, 0, 0, -4), to: p(1, 2, 0, -4) },
            { from: p(1, 2, 4, 0), to: p(2, 1) },
            { from: p(2, 1, -4), to: p(1, 0, -4) }
        ],
        'H': [
            { from: p(0, 1, 0, -4), to: p(2, 1, 0, 4), twoWay: true },
            { from: p(1, 0, -4), to: p(1, 2, 4), twoWay: true }
        ],
        'Z': [
            { from: p(0, 1, -4, -4), to: p(1, 2, 4, 4), twoWay: true },
            { from: p(1, 0, -4, -4), to: p(2, 1, 4, 4), twoWay: true }
        ],
        // 'XYZ': [
        //     { from: p(0, 0, ), to: p(0, 2, 4) },
        //     { from: p(1, 2), to: p(2, 1) },
        //     { from: p(2, 1), to: p(1, 0) }
        // ],
        'Aa': [
            { from: p(0, 0, 0, -4), to: p(0, 2, 4, -4) },
            { from: p(0, 2), to: p(2, 2, 0, 4) },
            { from: p(2, 2, -4, 4), to: p(0, 0, -8) }
        ],
        'Ab': [
            { from: p(0, 2, 0, -4), to: p(0, 0, -4, -4) },
            { from: p(2, 2), to: p(0, 2, 0, -4) },
            { from: p(0, 0, -4, 4), to: p(2, 2, 0, 8) }
        ],
        'E': [
            { from: p(0, 0, 0, -4), to: p(2, 0, 0, 4), twoWay: true },
            { from: p(0, 2, 0, -4), to: p(2, 2, 0, 4), twoWay: true },
        ],
        'Ra': [
            { from: p(0, 1, 4, -4), to: p(1, 0, -4, 4), twoWay: true },
            { from: p(0, 2, 0, -4), to: p(2, 2, 0, 4), twoWay: true },
        ],
        'Rb': [
            { from: p(0, 0, -4), to: p(0, 2, 4), twoWay: true },
            { from: p(1, 2, 4, -4), to: p(2, 1, -4, 4), twoWay: true },
        ],
        'Ja': [
            { from: p(0, 1, -4, -4), to: p(1, 2, 2, 4), twoWay: true },
            { from: p(0, 2, 6, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
        'Jb': [
            { from: p(1, 2, 2, -4), to: p(2, 1, -4, 4), twoWay: true },
            { from: p(0, 2, 6, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
        'T': [
            { from: p(1, 2, 2), to: p(1, 0, -4), twoWay: true },
            { from: p(0, 2, 6, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
        'F': [
            { from: p(0, 0, -4), to: p(0, 2, 4), twoWay: true },
            { from: p(1, 2, 4), to: p(1, 0, -4), twoWay: true },
        ],
        'V': [
            { from: p(0, 1, -4, -4), to: p(1, 2, 2, 4), twoWay: true },
            { from: p(0, 0, -4, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
        'Y': [
            { from: p(0, 1, 4, -4), to: p(1, 0, -4, 4), twoWay: true },
            { from: p(0, 0, -4, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
        'Na': [
            { from: p(1, 2, 4), to: p(1, 0, -4), twoWay: true },
            { from: p(0, 2, 4, -4), to: p(2, 0, -4, 4), twoWay: true },
        ],
        'Nb': [
            { from: p(1, 2, 4), to: p(1, 0, -4), twoWay: true },
            { from: p(0, 0, -4, -4), to: p(2, 2, 6, 4), twoWay: true },
        ],
    }

    const rawArrows = pllManualArrows[name] || []
    const shrink = 5

    return rawArrows.map(arrow => {
        const dx = arrow.to.x - arrow.from.x
        const dy = arrow.to.y - arrow.from.y
        const len = Math.sqrt(dx * dx + dy * dy)

        // Jika dua arah, potong kedua ujung sama besar
        const startShrink = arrow.twoWay ? shrink : (shrink * 0.6)

        return {
            twoWay: arrow.twoWay,
            from: {
                x: arrow.from.x + (dx / len) * startShrink,
                y: arrow.from.y + (dy / len) * startShrink
            },
            to: {
                x: arrow.to.x - (dx / len) * shrink,
                y: arrow.to.y - (dy / len) * shrink
            }
        }
    })
})
</script>
