<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import CategoriesApiService from '../data/remote/categoriesApiService';
import type Category from '../domain/Category';
import axiosInstance from '@/core/network/axiosInstance';

const categories = ref<Category[]>([]);

async function getchCategories() {
    try {
        const resp = await new CategoriesApiService().getCategories();

        categories.value = resp;
    }catch(err) {
        console.error(err);
    }
}

onBeforeMount(async () => {
    getchCategories()
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-3" v-for="category in categories"  :key="category.id">
            <h2 class="text-2xl font-bold">{{ category.title }}</h2>
            <div class="flex flex-wrap px-1 gap-3 w-full">
                <router-link :to="`category/${children.id}`"
                    v-for="children in category.children" 
                    :key="children.id"
                    class="flex rounded-2xl flex-col bg-gray-100 border-8 border-solid border-gray-100 relative w-56 h-72 text-inherit overflow-hidden">
                    <span class="absolute top-4 left-4 w-5/6">{{ children.title }}</span>
                    <img
                        :src="'https://mt.delivery/' + children.image"
                        :alt="children.title" 
                        class="rounded-xl mt-auto mix-blend-darken"/>
                </router-link> 
            </div>
        </div>
    </div>
</template>