<script setup lang="ts">
import SmallTag from '@/components/ui/smallTag.vue';
import ItemCardCounter from './ItemCardCounter.vue';

withDefaults(defineProps<{
    id?: number;
    mainPhoto?: string;
    title?: string;
    price?: number;
    isFavorite?: boolean;
    discountPrice?: number;
    min: number;
    max: number;
    view: 'horizontal' | 'vertical'
}>(), {
    view: 'vertical'
})

const emit = defineEmits<{
    increase: []
    decrease: []
    'input-count': [count: number]
    'change-count': [count: number]
    addFavorite: []
}>();

function onIncrease() {
    emit('increase');
}

function onDecrease() {
    emit('decrease');
}
</script>

<template>
    <div v-if="view == 'vertical'" class="">
        <SmallTag v-if="price && discountPrice" class="absolute top-3 left-3">
            -10%
        </SmallTag>
        <div class="h-auto flex flex-col items-center overflow-hidden rounded-xl relative bg-gray-100 p-4">
            <div>

            </div>
            <img :src="'https://mt.delivery' + mainPhoto" alt="title" class="mix-blend-darken rounded-2xl pointer-events-none w-16"/>
        </div>
        <div class="min-lines-4 max-lines-4 mt-2">
            <div class="mx-auto w-max min-w-10 max-lines-3"> {{ title }} </div>
            <div class="mx-auto w-max min-w-10 max-lines-1"> {{ price }} Р </div>
        </div>
        <ItemCardCounter class="mx-auto mt-8" :count="1"/>
    </div>
    <div v-else-if="view == 'horizontal'" class="">

    </div>
</template>