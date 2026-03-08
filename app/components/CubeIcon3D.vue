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
    notation: String, // Keep for backward compatibility
    caseId: [String, Number],
    type: {
        type: String,
        default: 'Notation' // or 'OLL', 'PLL', 'F2L'
    },
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

    // Default solved state if no notation/case
    if (!props.notation && !props.caseId) {
        return {
            top: Array(total).fill(y),
            left: Array(total).fill(g),
            right: Array(total).fill(r)
        }
    }

    // F2L Case Mappings
    if (props.type === 'F2L') {
        const id = props.caseId ? props.caseId.toString() : ''

        if (id === '1') {
            res.top = [_, _, _, _, _, g, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, o, _, _, o, o, _, o, o]
        }
        // if (id === 'x') {
        //     res.top = [_,_,_,_,_,_,_,_,_]
        //     res.left = [_,_,_,g,g,_,g,g,_]
        //     res.right = [_,_,_,_,o,o,_,o,o]
        // }
        if (id === '2') {
            res.top = [_, _, _, _, _, _, _, o, o]
            res.left = [_, g, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '3') {
            res.top = [_, _, _, o, _, _, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '4') {
            res.top = [_, g, _, _, _, _, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '5') {
            res.top = [_, g, _, _, _, _, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '6') {
            res.top = [_, _, _, o, _, _, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '7') {
            res.top = [_, _, _, g, _, _, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '8') {
            res.top = [_, o, _, _, _, _, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '9') {
            res.top = [_, o, _, _, _, _, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '10') {
            res.top = [_, _, _, g, _, _, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '11') {
            res.top = [_, _, _, _, _, o, _, _, g]
            res.left = [_, _, w, g, g, _, g, g, _]
            res.right = [o, g, _, _, o, o, _, o, o]
        }
        if (id === '12') {
            res.top = [_, _, _, _, _, _, _, g, o]
            res.left = [_, o, g, g, g, _, g, g, _]
            res.right = [w, _, _, _, o, o, _, o, o]
        }
        if (id === '13') {
            res.top = [_, _, _, _, _, _, _, o, g]
            res.left = [_, g, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '14') {
            res.top = [_, _, _, _, _, g, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, o, _, _, o, o, _, o, o]
        }
        if (id === '15') {
            res.top = [_, _, _, _, _, _, _, g, g]
            res.left = [_, o, w, g, g, _, g, g, _]
            res.right = [o, _, _, _, o, o, _, o, o]
        }
        if (id === '16') {
            res.top = [_, _, _, _, _, o, _, _, o]
            res.left = [_, _, g, g, g, _, g, g, _]
            res.right = [w, g, _, _, o, o, _, o, o]
        }
        if (id === '17') {
            res.top = [_, _, _, _, _, g, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, o, _, _, o, o, _, o, o]
        }
        if (id === '18') {
            res.top = [_, _, _, _, _, _, _, o, w]
            res.left = [_, g, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '19') {
            res.top = [_, g, _, _, _, _, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '20') {
            res.top = [_, _, _, o, _, _, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '21') {
            res.top = [_, _, _, g, _, _, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '22') {
            res.top = [_, o, _, _, _, _, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '23') {
            res.top = [_, _, _, _, _, _, _, g, w]
            res.left = [_, o, o, g, g, _, g, g, _]
            res.right = [g, _, _, _, o, o, _, o, o]
        }
        if (id === '24') {
            res.top = [_, _, _, _, _, o, _, _, w]
            res.left = [_, _, o, g, g, _, g, g, _]
            res.right = [g, g, _, _, o, o, _, o, o]
        }
        if (id === '25') {
            res.top = [_, _, _, _, _, g, _, _, _]
            res.left = [_, _, _, g, g, _, g, g, g]
            res.right = [_, o, _, _, o, o, o, o, o]
        }
        if (id === '26') {
            res.top = [_, _, _, _, _, _, _, o, _]
            res.left = [_, g, _, g, g, _, g, g, g]
            res.right = [_, _, _, _, o, o, o, o, o]
        }
        if (id === '27') {
            res.top = [_, _, _, _, _, g, _, _, _]
            res.left = [_, _, _, g, g, _, g, g, w]
            res.right = [_, o, _, _, o, o, g, o, o]
        }
        if (id === '28') {
            res.top = [_, _, _, _, _, _, _, o, _]
            res.left = [_, g, _, g, g, _, g, g, o]
            res.right = [_, _, _, _, o, o, w, o, o]
        }
        if (id === '29') {
            res.top = [_, _, _, _, _, _, _, o, _]
            res.left = [_, g, _, g, g, _, g, g, w]
            res.right = [_, _, _, _, o, o, g, o, o]
        }
        if (id === '30') {
            res.top = [_, _, _, _, _, g, _, _, _]
            res.left = [_, _, _, g, g, _, g, g, o]
            res.right = [_, o, _, _, o, o, w, o, o]
        }
        if (id === '31') {
            res.top = [_, _, _, _, _, _, _, _, w]
            res.left = [_, _, o, g, g, o, g, g, _]
            res.right = [g, _, _, g, o, o, _, o, o]
        }
        if (id === '32') {
            res.top = [_, _, _, _, _, _, _, _, w]
            res.left = [_, _, o, g, g, g, g, g, _]
            res.right = [g, _, _, o, o, o, _, o, o]
        }
        if (id === '33') {
            res.top = [_, _, _, _, _, _, _, _, g]
            res.left = [_, _, w, g, g, g, g, g, _]
            res.right = [o, _, _, o, o, o, _, o, o]
        }
        if (id === '34') {
            res.top = [_, _, _, _, _, _, _, _, o]
            res.left = [_, _, g, g, g, g, g, g, _]
            res.right = [w, _, _, o, o, o, _, o, o]
        }
        if (id === '35') {
            res.top = [_, _, _, _, _, _, _, _, g]
            res.left = [_, _, w, g, g, o, g, g, _]
            res.right = [o, _, _, g, o, o, _, o, o]
        }
        if (id === '36') {
            res.top = [_, _, _, _, _, _, _, _, o]
            res.left = [_, _, g, g, g, o, g, g, _]
            res.right = [w, _, _, g, o, o, _, o, o]
        }
        if (id === '37') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, o, g, g, g]
            res.right = [_, _, _, g, o, o, o, o, o]
        }
        if (id === '38') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, g, g, g, w]
            res.right = [_, _, _, o, o, o, g, o, o]
        }
        if (id === '39') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, g, g, g, o]
            res.right = [_, _, _, o, o, o, w, o, o]
        }
        if (id === '40') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, o, g, g, w]
            res.right = [_, _, _, g, o, o, g, o, o]
        }
        if (id === '41') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, o, g, g, o]
            res.right = [_, _, _, g, o, o, w, o, o]
        }
        if (id === 'x') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, _, g, g, _]
            res.right = [_, _, _, _, o, o, _, o, o]
        }
        if (id === 'x') {
            res.top = [_, _, _, _, _, _, _, _, _]
            res.left = [_, _, _, g, g, _, g, g, _]
            res.right = [_, _, _, _, o, o, _, o, o]
        }

        return res
    }

    const n = props.notation || ''

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
            res.top = [y, b, b, y, b, b, y, b, b,]
            res.left = [b, w, w, b, w, w, b, w, w]
        }
        if (n.includes('Lw')) {
            res.top = [g, g, y, g, g, y, g, g, y]
            res.left = [y, y, b, y, y, b, y, y, b]
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
            res.top = [r, r, r, r, r, r, y, y, y]
            res.right = [r, w, w, r, w, w, r, w, w]
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

// Koordinat untuk 7 titik utama rubik isometriknya
//      A
// D         B
//      C
// E         G
//      F
// A: Top Center, B: Top Right, C: Center, D: Top Left, E: Bottom Left, F: Bottom Center, G: Bottom Right
const pts = computed(() => {
    // Default angles (untuk Notation, OLL, PLL)
    // let A_val = { x: 60, y: 5 }
    // let B_val = { x: 115, y: 30 }
    // let C_val = { x: 60, y: 55 }
    // let D_val = { x: 5, y: 30 }
    // let E_val = { x: 5, y: 100 }
    // let F_val = { x: 60, y: 125 }
    // let G_val = { x: 115, y: 100 }
    let A_val = { x: 54, y: 7 }
    let B_val = { x: 112, y: 19 }
    let C_val = { x: 74, y: 45 }
    let D_val = { x: 8, y: 26 }
    let E_val = { x: 16, y: 89 }
    let F_val = { x: 73, y: 116 }
    let G_val = { x: 106, y: 79 }

    if (props.type === 'F2L') {
        // --- TEMPAT EDIT ANGLE KHUSUS F2L ---
        A_val = { x: 54, y: 7 }
        B_val = { x: 112, y: 19 }
        C_val = { x: 74, y: 45 }
        D_val = { x: 8, y: 26 }
        E_val = { x: 16, y: 89 }
        F_val = { x: 73, y: 116 }
        G_val = { x: 106, y: 79 }
    }

    return {
        A: A_val,
        B: B_val,
        C: C_val,
        D: D_val,
        E: E_val,
        F: F_val,
        G: G_val
    }
})

const arrows = computed(() => {
    const { A, B, C, D, E, F, G } = pts.value
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
        const control = { x: 50, y: 40 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n === 'Rw / r') {
        const pStart = interp(interp(D, C, 0.85), interp(E, F, 0.85), 0.9)
        const pEnd = interp(interp(A, B, 0.8), interp(D, C, 0.8), 0.5)
        const control = { x: 50, y: 40 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('L')) {
        const pStart = interp(interp(D, C, 0.15), interp(A, B, 0.15), 0.9)
        const pEnd = interp(interp(D, C, 0.15), interp(E, F, 0.15), 0.5)
        const control = { x: 10, y: 20 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('U')) {
        const pStart = interp(interp(F, C, 0.85), interp(G, B, 0.85), 0.9)
        const pEnd = interp(interp(F, C, 0.85), interp(E, D, 0.85), 0.5)
        const control = { x: 70, y: 70 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('D')) {
        const pStart = interp(interp(D, C, 0.15), interp(E, F, 0.15), 0.85)
        const pEnd = interp(interp(C, F, 0.85), interp(B, G, 0.85), 0.5)
        const control = { x: 60, y: 115 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('F')) {
        const pStart = interp(interp(A, D, 0.85), interp(B, C, 0.85), 0.15)
        const pEnd = interp(interp(B, C, 0.85), interp(G, F, 0.85), 0.5)
        const control = { x: 95, y: 30 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('B')) {
        const pStart = interp(interp(F, G, 0.85), interp(C, B, 0.85), 0.15)
        const pEnd = interp(interp(C, B, 0.85), interp(D, A, 0.85), 0.5)
        const control = { x: 120, y: 15 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('x')) {
        const pStart = interp(interp(C, F, 0.5), interp(D, E, 0.5), 0.5)
        const pEnd = interp(interp(C, B, 0.5), interp(D, A, 0.5), 0.5)
        const control = { x: 30, y: 30 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('y')) {
        const pStart = interp(interp(B, C, 0.5), interp(G, F, 0.5), 0.5)
        const pEnd = interp(interp(D, C, 0.5), interp(E, F, 0.5), 0.5)
        const control = { x: 70, y: 90 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('z')) {
        const pStart = interp(interp(A, B, 0.5), interp(D, C, 0.5), 0.5)
        const pEnd = interp(interp(B, C, 0.5), interp(F, G, 0.5), 0.5)
        const control = { x: 105, y: 25 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('M')) {
        const pEnd = interp(interp(C, F, 0.5), interp(D, E, 0.5), 0.5)
        const pStart = interp(interp(C, B, 0.5), interp(D, A, 0.5), 0.5)
        const control = { x: 30, y: 30 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('E')) {
        const pEnd = interp(interp(B, C, 0.5), interp(G, F, 0.5), 0.5)
        const pStart = interp(interp(D, C, 0.5), interp(E, F, 0.5), 0.5)
        const control = { x: 70, y: 90 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    if (n.startsWith('S')) {
        const pStart = interp(interp(A, B, 0.5), interp(D, C, 0.5), 0.5)
        const pEnd = interp(interp(B, C, 0.5), interp(F, G, 0.5), 0.5)
        const control = { x: 105, y: 25 }
        res.push({ d: `M ${pStart.x} ${pStart.y} Q ${control.x} ${control.y} ${pEnd.x} ${pEnd.y}` })
    }
    return res
})

const interp = (p1, p2, r) => ({
    x: p1.x + (p2.x - p1.x) * r,
    y: p1.y + (p2.y - p1.y) * r
})

const getQuad = (p1, p2, p3, p4) => `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`

const gap = 0.02 // Jarak antar blok (0.0 - 0.1)

const topStickers = computed(() => {
    const { A, B, C, D } = pts.value
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
    const { D, C, E, F } = pts.value
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
    const { C, B, F, G } = pts.value
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
