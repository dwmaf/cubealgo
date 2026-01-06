<template>
    <div class="w-full max-w-5xl mx-auto px-2 py-8">
        <!-- Header -->
        <section class="text-center mb-8">
            <h1 class="text-3xl md:text-4xl font-extrabold mb-3">
                <span class="text-gradient">Practice Timer</span>
            </h1>
            <p class="text-sm text-slate-400">
                Latih kecepatan solving Anda dengan scramble generator dan timer profesional
            </p>
        </section>

        <!-- Cube Size Selector -->
        <div class="max-w-md mx-auto mb-8">
            <div class="flex items-center justify-center gap-3 p-2 rounded-2xl bg-slate-900/50 border border-slate-800">
                <button v-for="size in cubeTypes" :key="size.value" @click="selectCubeType(size.value)" :class="[
                    'flex-1 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300',
                    selectedCube === size.value
                        ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                ]">
                    {{ size.label }}
                </button>
            </div>
        </div>

        <!-- Main Timer Card -->
        <div class="max-w-2xl mx-auto mb-8">
            <div class="p-8 rounded-3xl bg-card-gradient border border-indigo-500/15 text-center">
                <!-- Scramble Display -->
                <div class="mb-8 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                    <p class="text-xs uppercase tracking-widest text-slate-500 mb-3 font-bold">Scramble</p>
                    <p class="text-base md:text-lg font-mono text-white leading-relaxed break-words">
                        {{ currentScramble }}
                    </p>
                    <button @click="generateScramble"
                        class="mt-4 px-4 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-sm font-bold transition-all duration-300 border border-indigo-500/20">
                        🔄 New Scramble
                    </button>
                </div>

                <!-- Timer Display -->
                <div class="mb-6">
                    <div class="text-6xl md:text-7xl font-bold font-mono mb-2"
                        :class="timerState === 'running' ? 'text-gradient' : 'text-white'">
                        {{ formattedTime }}
                    </div>
                    <p class="text-xs text-slate-500 uppercase tracking-widest">
                        {{ timerStateText }}
                    </p>
                </div>

                <!-- Control Buttons -->
                <div class="flex justify-center gap-4">
                    <button v-if="timerState === 'idle'" @click="startTimer"
                        class="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105">
                        ▶ Start
                    </button>
                    <button v-if="timerState === 'running'" @click="stopTimer"
                        class="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:scale-105">
                        ⏸ Stop
                    </button>
                    <button v-if="timerState === 'stopped'" @click="resetTimer"
                        class="px-8 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm transition-all duration-300">
                        🔄 Reset
                    </button>
                    <button v-if="timerState === 'stopped'" @click="saveTime"
                        class="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105">
                        💾 Save Time
                    </button>
                </div>

                <!-- Keyboard Hint -->
                <p class="mt-6 text-xs text-slate-500">
                    💡 Tip: Tekan <kbd
                        class="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">Space</kbd>
                    untuk start/stop timer
                </p>
            </div>
        </div>

        <!-- Statistics & History -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Statistics Card -->
            <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                    <span class="text-2xl">📊</span>
                    Statistics ({{ selectedCubeLabel }})
                </h3>
                <div class="space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-slate-400">Total Solves</span>
                        <span class="text-lg font-bold text-white">{{ currentHistory.length }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-slate-400">Best Time</span>
                        <span class="text-lg font-bold text-emerald-400">{{ bestTime }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-slate-400">Average (Ao5)</span>
                        <span class="text-lg font-bold text-indigo-400">{{ averageOf5 }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-slate-400">Average (Ao12)</span>
                        <span class="text-lg font-bold text-violet-400">{{ averageOf12 }}</span>
                    </div>
                </div>
            </div>

            <!-- History Card -->
            <div class="p-6 rounded-2xl bg-card-gradient border border-indigo-500/15">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold flex items-center gap-2">
                        <span class="text-2xl">📜</span>
                        Recent Solves
                    </h3>
                    <button v-if="currentHistory.length > 0" @click="clearHistory"
                        class="text-xs text-red-400 hover:text-red-300 transition-colors">
                        Clear All
                    </button>
                </div>
                <div v-if="currentHistory.length === 0" class="text-center py-8 text-slate-500 text-sm">
                    No solves yet. Start practicing! 🎯
                </div>
                <div v-else class="space-y-2 max-h-64 overflow-y-auto">
                    <div v-for="(solve, index) in recentSolves" :key="index"
                        class="flex justify-between items-center p-3 rounded-lg bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                        <span class="text-xs text-slate-500 font-mono">#{{ currentHistory.length - index }}</span>
                        <span class="text-sm font-bold font-mono"
                            :class="solve.time === bestTimeMs ? 'text-emerald-400' : 'text-white'">
                            {{ formatTime(solve.time) }}
                        </span>
                        <button @click="removeSolve(index)"
                            class="text-xs text-slate-500 hover:text-red-400 transition-colors">
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

useSeoMeta({
    title: 'Practice Timer - CubeAlgo',
    description: 'Latih kecepatan solving Rubik\'s Cube dengan scramble generator dan timer profesional untuk 2x2 dan 3x3.'
})

// Cube Types Configuration
const cubeTypes = [
    { value: '2x2', label: '2x2', scrambleLength: 9, faces: ['R', 'U', 'F'] },
    { value: '3x3', label: '3x3', scrambleLength: 20, faces: ['R', 'L', 'U', 'D', 'F', 'B'] }
]

// Selected Cube Type
const selectedCube = ref('3x3')

// Timer State
const timerState = ref('idle')
const startTime = ref(0)
const elapsedTime = ref(0)
const currentScramble = ref('')
const timerInterval = ref(null)

// History & Statistics (separated by cube type)
const solveHistory2x2 = ref([])
const solveHistory3x3 = ref([])

// Scramble Generation
const modifiers = ['', '\'', '2']

const generateScramble = () => {
    const config = cubeTypes.find(c => c.value === selectedCube.value)
    if (!config) return

    const { scrambleLength, faces } = config
    let scramble = []
    let lastFace = ''
    let secondLastFace = ''

    for (let i = 0; i < scrambleLength; i++) {
        let face
        let attempts = 0
        const maxAttempts = 50

        do {
            face = faces[Math.floor(Math.random() * faces.length)]
            attempts++

            // Avoid same face as last move
            if (face === lastFace) continue

            // Avoid same face as second-to-last move if last move was different
            if (face === secondLastFace && lastFace !== secondLastFace) continue

            break
        } while (attempts < maxAttempts)

        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)]
        const move = face + modifier

        scramble.push(move)
        secondLastFace = lastFace
        lastFace = face
    }

    currentScramble.value = scramble.join(' ')
}

// Timer Functions
const startTimer = () => {
    timerState.value = 'running'
    startTime.value = Date.now() - elapsedTime.value
    timerInterval.value = setInterval(() => {
        elapsedTime.value = Date.now() - startTime.value
    }, 10)
}

const stopTimer = () => {
    timerState.value = 'stopped'
    clearInterval(timerInterval.value)
}

const resetTimer = () => {
    timerState.value = 'idle'
    elapsedTime.value = 0
    generateScramble()
}

const saveTime = () => {
    currentHistory.value.unshift({
        time: elapsedTime.value,
        scramble: currentScramble.value,
        date: new Date().toISOString()
    })
    resetTimer()
}

// Cube Type Selection
const selectCubeType = (type) => {
    selectedCube.value = type
    router.push({ query: { cube: type } })
    resetTimer()
}

// Format Time
const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const milliseconds = Math.floor((ms % 1000) / 10)

    if (minutes > 0) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`
    }
    return `${seconds}.${milliseconds.toString().padStart(2, '0')}`
}

// Computed Properties
const selectedCubeLabel = computed(() => {
    const config = cubeTypes.find(c => c.value === selectedCube.value)
    return config?.label || '3x3'
})

const currentHistory = computed(() => {
    return selectedCube.value === '2x2' ? solveHistory2x2.value : solveHistory3x3.value
})

const formattedTime = computed(() => formatTime(elapsedTime.value))

const timerStateText = computed(() => {
    if (timerState.value === 'idle') return 'Ready to solve'
    if (timerState.value === 'running') return 'Solving...'
    return 'Finished!'
})

const recentSolves = computed(() => currentHistory.value.slice(0, 10))

const bestTimeMs = computed(() => {
    if (currentHistory.value.length === 0) return 0
    return Math.min(...currentHistory.value.map(s => s.time))
})

const bestTime = computed(() => {
    if (currentHistory.value.length === 0) return '-'
    return formatTime(bestTimeMs.value)
})

const averageOf5 = computed(() => {
    if (currentHistory.value.length < 5) return '-'
    const last5 = currentHistory.value.slice(0, 5).map(s => s.time)
    const avg = last5.reduce((a, b) => a + b, 0) / 5
    return formatTime(avg)
})

const averageOf12 = computed(() => {
    if (currentHistory.value.length < 12) return '-'
    const last12 = currentHistory.value.slice(0, 12).map(s => s.time)
    const avg = last12.reduce((a, b) => a + b, 0) / 12
    return formatTime(avg)
})

// History Management
const clearHistory = () => {
    if (confirm(`Are you sure you want to clear all ${selectedCubeLabel.value} solve history?`)) {
        if (selectedCube.value === '2x2') {
            solveHistory2x2.value = []
        } else {
            solveHistory3x3.value = []
        }
    }
}

const removeSolve = (index) => {
    currentHistory.value.splice(index, 1)
}

// Keyboard Controls
const handleKeyPress = (e) => {
    if (e.code === 'Space') {
        e.preventDefault()
        if (timerState.value === 'idle') {
            startTimer()
        } else if (timerState.value === 'running') {
            stopTimer()
        }
    }
}

// Lifecycle
onMounted(() => {
    // Check URL parameter for cube type
    const cubeParam = route.query.cube
    if (cubeParam && cubeTypes.some(c => c.value === cubeParam)) {
        selectedCube.value = cubeParam
    }

    generateScramble()
    window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
    clearInterval(timerInterval.value)
    window.removeEventListener('keydown', handleKeyPress)
})

// Watch for cube type changes
watch(selectedCube, () => {
    generateScramble()
})
</script>
