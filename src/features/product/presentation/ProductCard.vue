<script setup lang="ts">
import ItemCard from './ItemCard/ItemCard.vue';

const props = defineProps<{
    product: any;
}>();

</script>

<template>
    <ItemCard 
        class="cursor-pointer"
        v-bind="product"
    />
</template>