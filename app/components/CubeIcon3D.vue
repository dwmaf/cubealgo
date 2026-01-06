<template>
    <div class="relative w-full h-full flex items-center justify-center p-1">
        <svg viewBox="0 0 120 120" class="w-full h-full overflow-visible">
            <defs>
                <marker :id="'arrowhead3d-' + uid" markerWidth="4" markerHeight="4" refX="1" refY="2" orient="auto">
                    <path d="M 0 0 L 4 2 L 0 4 Z" fill="#000000" />
                </marker>
            </defs>
            <g>
                <path v-for="(s, i) in topStickers" :key="'t' + i" :d="s.path" :fill="s.color" stroke="#000"
                    stroke-width="0.5" />
            </g>
            <g>
                <path v-for="(s, i) in leftStickers" :key="'l' + i" :d="s.path" :fill="s.color" stroke="#000"
                    stroke-width="0.5" />
            </g>
            <g>
                <path v-for="(s, i) in rightStickers" :key="'r' + i" :d="s.path" :fill="s.color" stroke="#000"
                    stroke-width="0.5" />
            </g>
            <g v-for="(arrow, i) in arrows" :key="'a' + i">
                <path :d="arrow.d" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round"
                    :marker-end="'url(#arrowhead3d-' + uid + ')'" />
            </g>
        </svg>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    notation: String,
    size: {
        type: [Number, String],
        default: 3
    }
})

// Generate a truly unique and stable ID for this instance to avoid SVG marker conflicts and nuxt hydration mismatches
const uid = useId()

const colors = {
    yellow: '#ffff00',
    red: '#d00000',
    orange: '#ee8800',
    blue: '#2040d0',
    green: '#11aa00',
    white: '#ffffff',
    blank: '#334155',
    border: '#0f172a'
}

const computedColors = computed(() => {
    const n = props.notation || ''
    const s = parseInt(props.size)
    const total = s * s

    const y = colors.yellow
    const r = colors.red
    const o = colors.orange
    const b = colors.blue
    const g = colors.green
    const w = colors.white
    const _ = colors.blank

    const res = {
        top: Array(total).fill(_),
        left: Array(total).fill(_),
        right: Array(total).fill(_)
    }

    if (!n) {
        return {
            top: Array(total).fill(y),
            left: Array(total).fill(g),
            right: Array(total).fill(r)
        }
    }

    if (s === 3) {
        if (n.includes('R') && !n.includes('RW') && !n.includes('Rw')) {
            res.left = [b, b, w, b, b, w, b, b, w]
            res.top = [y, y, b, y, y, b, y, y, b]
        }
        if (n.includes('L')) {
            res.left = [y, b, b, y, b, b, y, b, b]
            res.top = [g, y, y, g, y, y, g, y, y]
        }
        if (n.includes('U') && !n.includes('Uw')) {
            res.left = [r, r, r, b, b, b, b, b, b]
            res.right = [g, g, g, r, r, r, r, r, r]
        }
        if (n.includes('D') && !n.includes('Dw')) {
            res.left = [b, b, b, b, b, b, o, o, o]
            res.right = [r, r, r, r, r, r, b, b, b]
        }
        if (n.includes('F') && !n.includes('Fw')) {
            res.top = [y, y, y, y, y, y, o, o, o]
            res.right = [y, r, r, y, r, r, y, r, r]
        }
        if (n.includes('B') && !n.includes('Bw')) {
            res.top = [r, r, r, y, y, y, y, y, y]
            res.right = [r, r, w, r, r, w, r, r, w]
        }
        if (n.includes('Rw')) {
            res.top = [
                y, b, b,
                y, b, b,
                y, b, b,
            ]
            res.left = [b, w, w, b, w, w, b, w, w]
        }
        if (n.includes('Lw')) {
            res.top = [
                g, g, y,
                g, g, y,
                g, g, y,
            ]
            res.left = [
                y, y, b,
                y, y, b,
                y, y, b,
            ]
        }
        if (n.includes('Uw')) {
            res.left = [r, r, r, r, r, r, b, b, b]
            res.right = [g, g, g, g, g, g, r, r, r]
        }
        if (n.includes('Dw')) {
            res.left = [b, b, b, o, o, o, o, o, o]
            res.right = [r, r, r, b, b, b, b, b, b]
        }
        if (n.includes('Fw')) {
            res.top = [y, y, y, o, o, o, o, o, o]
            res.right = [y, y, r, y, y, r, y, y, r]
        }
        if (n.includes('Bw')) {
            res.top = [
                r, r, r,
                r, r, r,
                y, y, y,
            ]
            res.right = [
                r, w, w,
                r, w, w,
                r, w, w,
            ]
        }
        if (n.includes('M')) {
            res.top = [y, g, y, y, g, y, y, g, y]
            res.left = [b, y, b, b, y, b, b, y, b]
        }
        if (n.includes('E')) {
            res.left = [b, b, b, o, o, o, b, b, b]
            res.right = [r, r, r, b, b, b, r, r, r]
        }
        if (n.includes('S')) {
            res.top = [y, y, y, o, o, o, y, y, y]
            res.right = [r, y, r, r, y, r, r, y, r]
        }

        const h = (face, color) => Array(9).fill(color)
        if (n.startsWith('R')) res.right = h('right', r)
        if (n.startsWith('L')) res.right = h('right', r)
        if (n.startsWith('U')) res.top = h('top', y)
        if (n.startsWith('D')) res.top = h('top', y)
        if (n.startsWith('F')) res.left = h('left', b)
        if (n.startsWith('B')) res.left = h('left', b)

        if (n.includes('x')) {
            res.top = h('top', b); res.left = h('left', w); res.right = h('right', r)
        }
        if (n.includes('y')) {
            res.top = h('top', y); res.left = h('left', r); res.right = h('right', g)
        }
        if (n.includes('z')) {
            res.top = h('top', o); res.left = h('left', b); res.right = h('right', y)
        }
        if (n.startsWith('M')) res.right = h('right', r)
        if (n.startsWith('E')) res.top = h('top', y)
        if (n.startsWith('S')) res.left = h('left', b)
    }

    
    if (s === 4) {
        if (n === '3Rw') {
            res.right = Array(16).fill(r)
            res.top = [
                y, b, b, b,
                y, b, b, b,
                y, b, b, b,
                y, b, b, b,
            ]
            res.left = [
                b, w, w, w,
                b, w, w, w,
                b, w, w, w,
                b, w, w, w,
            ]
        }
        if (n === '2R') {
            res.right = Array(16).fill(r)
            res.left = [
                b, b, w, b,
                b, b, w, b,
                b, b, w, b,
                b, b, w, b,
            ]
            res.top = [
                y, y, b, y,
                y, y, b, y,
                y, y, b, y,
                y, y, b, y,
            ]
        }

    }

    return res
})

//      A
// D         B
//      C
// E         G
//      F
const arrows = computed(() => {
    const n = props.notation || ''
    const s = parseInt(props.size)
    const res = []

    if (s === 4) {
        if (n === '3Rw') {
            const pStart = interp(interp(D, C, 0.65), interp(E, F, 0.65), 0.9)
            const pEnd = interp(interp(A, B, 0.6), interp(D, C, 0.6), 0.4)
            const control = { x: 30, y: 35 }
            res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
        }
        if (n === '2R') {
            const pStart = interp(interp(D, C, 0.62), interp(E, F, 0.62), 0.9)
            const pEnd = interp(interp(A, B, 0.62), interp(D, C, 0.62), 0.4)
            const control = { x: 30, y: 35 }
            res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
        }
    }

    if (n === 'R') {
        const pStart = interp(interp(D, C, 0.85), interp(E, F, 0.85), 0.9)
        const pEnd = interp(interp(A, B, 0.8), interp(D, C, 0.8), 0.5)
        const control = { x: 40, y: 40 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n === 'Rw / r') {
        const pStart = interp(interp(D, C, 0.85), interp(E, F, 0.85), 0.9)
        const pEnd = interp(interp(A, B, 0.8), interp(D, C, 0.8), 0.5)
        const control = { x: 40, y: 40 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('L')) {
        const pStart = interp(interp(D, C, 0.15), interp(A, B, 0.15), 0.9)
        const pEnd = interp(interp(D, C, 0.15), interp(E, F, 0.15), 0.5)
        const control = { x: 10, y: 20 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('U')) {
        const pStart = interp(interp(F, C, 0.85), interp(G, B, 0.85), 0.9)
        const pEnd = interp(interp(F, C, 0.85), interp(E, D, 0.85), 0.5)
        const control = { x: 70, y: 75 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('D')) {
        const pStart = interp(interp(D, C, 0.15), interp(E, F, 0.15), 0.85)
        const pEnd = interp(interp(C, F, 0.85), interp(B, G, 0.85), 0.5)
        const control = { x: 60, y: 125 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('F')) {
        const pStart = interp(interp(A, D, 0.85), interp(B, C, 0.85), 0.15)
        const pEnd = interp(interp(B, C, 0.85), interp(G, F, 0.85), 0.5)
        const control = { x: 80, y: 40 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('B')) {
        const pStart = interp(interp(F, G, 0.85), interp(C, B, 0.85), 0.15)
        const pEnd = interp(interp(C, B, 0.85), interp(D, A, 0.85), 0.5)
        const control = { x: 120, y: 30 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('x')) {
        const pStart = interp(interp(C, F, 0.5), interp(D, E, 0.5), 0.5)
        const pEnd = interp(interp(C, B, 0.5), interp(D, A, 0.5), 0.5)
        const control = { x: 25, y: 30 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('y')) {
        const pStart = interp(interp(B, C, 0.5), interp(G, F, 0.5), 0.5)
        const pEnd = interp(interp(D, C, 0.5), interp(E, F, 0.5), 0.5)
        const control = { x: 60, y: 95 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('z')) {
        const pStart = interp(interp(A, B, 0.5), interp(D, C, 0.5), 0.5)
        const pEnd = interp(interp(B, C, 0.5), interp(F, G, 0.5), 0.5)
        const control = { x: 95, y: 35 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('M')) {
        const pEnd = interp(interp(C, F, 0.5), interp(D, E, 0.5), 0.5)
        const pStart = interp(interp(C, B, 0.5), interp(D, A, 0.5), 0.5)
        const control = { x: 25, y: 30 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('E')) {
        const pEnd = interp(interp(B, C, 0.5), interp(G, F, 0.5), 0.5)
        const pStart = interp(interp(D, C, 0.5), interp(E, F, 0.5), 0.5)
        const control = { x: 60, y: 95 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    if (n.startsWith('S')) {
        const pStart = interp(interp(A, B, 0.5), interp(D, C, 0.5), 0.5)
        const pEnd = interp(interp(B, C, 0.5), interp(F, G, 0.5), 0.5)
        const control = { x: 95, y: 35 }

        res.push({
            d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}`
        })
    }
    return res
})


// Koordinat untuk 7 titik utama rubik isometriknya
const A = { x: 60, y: 5 }
const B = { x: 115, y: 30 }
const C = { x: 60, y: 55 }
const D = { x: 5, y: 30 }
const E = { x: 5, y: 100 }
const F = { x: 60, y: 125 }
const G = { x: 115, y: 100 }

const interp = (p1, p2, r) => ({
    x: p1.x + (p2.x - p1.x) * r,
    y: p1.y + (p2.y - p1.y) * r
})

const getQuad = (p1, p2, p3, p4) => `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`

const gap = 0.02 // Jarak antar blok (0.0 - 0.1)

const topStickers = computed(() => {
    const res = []
    const s = parseInt(props.size)
    for (let i = 0; i < s; i++) {
        for (let j = 0; j < s; j++) {
            const r1 = i / s + gap
            const r2 = (i + 1) / s - gap
            const c1 = j / s + gap
            const c2 = (j + 1) / s - gap

            // p1: top-left, p2: top-right, p3: bottom-right, p4: bottom-left
            const p1 = interp(interp(A, B, c1), interp(D, C, c1), r1)
            const p2 = interp(interp(A, B, c2), interp(D, C, c2), r1)
            const p3 = interp(interp(A, B, c2), interp(D, C, c2), r2)
            const p4 = interp(interp(A, B, c1), interp(D, C, c1), r2)
            res.push({ path: getQuad(p1, p2, p3, p4), color: computedColors.value.top[i * s + j] })
        }
    }
    return res
})

const leftStickers = computed(() => {
    const res = []
    const s = parseInt(props.size)
    for (let i = 0; i < s; i++) {
        for (let j = 0; j < s; j++) {
            const r1 = i / s + gap
            const r2 = (i + 1) / s - gap
            const c1 = j / s + gap
            const c2 = (j + 1) / s - gap

            const p1 = interp(interp(D, C, c1), interp(E, F, c1), r1)
            const p2 = interp(interp(D, C, c2), interp(E, F, c2), r1)
            const p3 = interp(interp(D, C, c2), interp(E, F, c2), r2)
            const p4 = interp(interp(D, C, c1), interp(E, F, c1), r2)
            res.push({ path: getQuad(p1, p2, p3, p4), color: computedColors.value.left[i * s + j] })
        }
    }
    return res
})

const rightStickers = computed(() => {
    const res = []
    const s = parseInt(props.size)
    for (let i = 0; i < s; i++) {
        for (let j = 0; j < s; j++) {
            const r1 = i / s + gap
            const r2 = (i + 1) / s - gap
            const c1 = j / s + gap
            const c2 = (j + 1) / s - gap

            const p1 = interp(interp(C, B, c1), interp(F, G, c1), r1)
            const p2 = interp(interp(C, B, c2), interp(F, G, c2), r1)
            const p3 = interp(interp(C, B, c2), interp(F, G, c2), r2)
            const p4 = interp(interp(C, B, c1), interp(F, G, c1), r2)
            res.push({ path: getQuad(p1, p2, p3, p4), color: computedColors.value.right[i * s + j] })
        }
    }
    return res
})
</script>
