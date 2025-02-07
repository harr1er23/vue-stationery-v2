<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';

import Filters from '@/features/filters/presentation/Filters.vue';
import CenterLayout from '@/layouts/CenterLayout.vue';
import axios from 'axios';
import ProductCard from '@/features/product/presentation/ProductCard.vue';

const id = ref<string>(window.location.pathname.split('/')[2]);
const products = ref<[]>([]);
const categoryTitle = ref<string>(''); 

async function fetchProducts() {
    try{
        // const resp = await productsApiService.getProducts();
        const resp = await axios.get(`${import.meta.env.VITE_MOKKY_URL}/products?category_id=${id.value}`);
        products.value = resp.data;
    }catch(err) {
        console.error(err);
    }finally {

    }
}

async function fetchCategoryTitle() {
    const { data } = await axios.get(`${import.meta.env.VITE_MOKKY_URL}/categories?children.id=${id.value}`)

    categoryTitle.value = data[0].children.find((obj: any) => obj.id == Number(id.value)).title;
}

onBeforeMount(async () => {
    await fetchProducts();
    await fetchCategoryTitle();
})
</script>


<template>
    <div class="flex w-full gap-4">
        <Filters class="mt-4 w-1/4"/>

        <CenterLayout class="w-3/4 flex-col flex-wrap">
            <h2 class="text-2xl font-bold mb-8" v-if="categoryTitle.length">{{ categoryTitle }}</h2>
            <div class="flex flex-wrap gap-5">
                <ProductCard
                    v-for="product in products"
                    class="cursor-pointer"
                    :product="product"/>
            </div>
        </CenterLayout>
    </div>
</template>