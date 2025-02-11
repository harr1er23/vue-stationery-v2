<script setup lang="ts">
const emit = defineEmits<{
    increase: [],
    decrease: []
    input: [event: Event]
    'input-count': [count: number]
    'change-count': [count: number]
    change: [event: Event]
}>(); 

defineProps<{
    count?: number;
    min?: number;
    max?: number;
}>();

function onIncrease() {
    emit('increase');
}

function onDecrease() {
    emit('decrease')
}

function onInput(e: Event) {
    if(e.currentTarget instanceof HTMLInputElement) {
        const validValue = Number(e.currentTarget.value);
        e.currentTarget.value = validValue ? validValue.toString() : "";
        emit('input-count', validValue);
    }
}

function onChange(e: Event) {
    if(e.currentTarget instanceof HTMLInputElement) {
        const validValue = Number(e.currentTarget.value);
        e.currentTarget.value = validValue ? validValue.toString() : "";
        emit('change-count', validValue);
    }
}
</script>

<template>
    <div class="card overflow-hidden p-2 text-white rounded-full w-max relative">
        <button
            @click="onIncrease"
            :class="{ 'opacity-0 pointer-events-none':count }"
            class="text-current font-extrabold text-2xl leading-3 absolute left-0 top-0 w-full h-full transition-all"
        >+</button>
        <div class="flex gap-2 transition-all" :class="{ 'opacity-0 pointer-events-none':!count }">
            <button 
                class="text-current font-extrabold text-2xl leading-3"
                @click="onDecrease"
            >-</button>
            <input
                class="min-w-10 w-full appearance-none bg-transparent text-center text-base cursor-auto"
                type="number"
                :min="min || 0"
                :max="max || 1000"
                :value="count || ''"
                @input="onInput"
                @change="onChange"/>
            <button 
                class="text-current font-extrabold text-2xl leading-3"
                @click="onIncrease">+</button>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: var(--accentColor);
    }
</style>