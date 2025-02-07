<script setup lang="ts">
const emit = defineEmits<{
    increase: [],
    decrease: []
    input: [event: Event]
}>(); 

defineProps<{
    count?: number;
    min?: number;
    max?: number;
}>();

function onIncrease(){

}

function onDecrease() {

}

function onInput() {

}

function onChange() {

}
</script>

<template>
    <div class="card overflow-hidden p-2 text-white rounded-full w-max relative">
        <button
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
            <button>+</button>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: var(--accentColor);
    }
</style>