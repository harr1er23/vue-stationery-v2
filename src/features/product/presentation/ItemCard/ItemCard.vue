<script setup lang="ts">
import SmallTag from '@/components/ui/smallTag.vue';
import ItemCardCounter from './ItemCardCounter.vue';
import discountCalculation from '@/core/helpers/discountCalculation';

withDefaults(defineProps<{
    id?: number;
    mainPhoto?: string;
    title?: string;
    price?: number;
    discountPrice?: number;
    count?: number;
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
    <div v-if="view == 'vertical'" class="relative w-48 text-center flex flex-col gap-2">
        <SmallTag v-if="price && discountPrice" class="absolute top-3 left-3">
            -{{ discountCalculation(price, discountPrice) }}%
        </SmallTag>
        <div class="h-auto flex flex-col items-center overflow-hidden rounded-xl relative bg-gray-100 p-4">
            <div>

            </div>
            <img :src="'https://mt.delivery' + mainPhoto" alt="title" class="mix-blend-darken rounded-2xl pointer-events-none w-16"/>
        </div>
        <div class="min-lines-4 max-lines-4 mt-2">
            <div class="mx-auto w-max min-w-10 max-lines-3"> {{ title }} </div>
            <div class="flex gap-1 mx-auto w-max min-w-10 max-lines-1"> 
                <span :class="discountPrice && 'line-through'">
                    {{ price }}
                </span>
                <span class="text-red-400" v-if="discountPrice">
                    {{ discountPrice }}
                </span>
                &nbsp;₽
            </div>
        </div>
        <ItemCardCounter 
            class="mx-auto mt-3"
            :min="min"
            :max="max"
            :count="count"
            @input-count="emit('input-count', $event)" 
            @change-count="emit('change-count', $event)"
            @decrease="onDecrease"
            @increase="onIncrease"
            @click.stop
            />
    </div>
    <div v-else-if="view == 'horizontal'" class="w-80 h-44 flex gap-2">
        <div class="bg-gray-100 rounded-xl p-4 h-20 flex">
            <!-- image -->
            <img class="rounded-2xl pointer-events-none" :src="'https://mt.delivery' + mainPhoto"/>
        </div>
        <div class="flex-1 flex flex-col justify-between">
            <div class="min-lines-4 max-lines-4 flex-1">
                <slot name="title">
                    <div class="mx-2 max-lines-3">
                        {{ title }}
                    </div>
                </slot>
                <div
                    class="mx-auto w-max min-w-10 max-lines-1 text-subtitle text-sm">
                    {{ price ? String(price + '&nbsp;₽') : undefined }}
                </div>
            </div>
            <ItemCardCounter
                class="mx-auto"
                :min="min"
                :max="max"
                :count="count"
                @input-count="emit('input-count', $event)"
                @change-count="emit('change-count', $event)"
                @decrease="onDecrease"
                @increase="onIncrease"
                @click.stop/>
        </div>
    </div>
</template>