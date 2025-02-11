<script setup lang="ts">
import { useProduct } from '@/Composables/useProduct';
import ItemCard from './ItemCard/ItemCard.vue';
import type Product from '../domain/entities/Product';
import { computed } from 'vue';

const props = defineProps<{
    product: Product;
}>();

const mult = computed(() => props.product.mult || 1);

const {
    cartProduct,
    onIncrease,
    onDecrease,
    onInputCount,
    onChangeCount
} = useProduct(props.product, mult.value);

</script>

<template>
    <ItemCard
        class="cursor-pointer"
        view="vertical" 
        v-bind="product"
        :min="0"
        :max="1000"
        :count="cartProduct?.count ?? 0"
        @input-count="onInputCount"
        @change-count="onChangeCount"
        @increase="onIncrease"
        @decrease="onDecrease"
    />
</template>