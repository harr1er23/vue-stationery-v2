<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import CategoriesApiService from '../data/remote/categoriesApiService';
import type Category from '../domain/Category';
import axiosInstance from '@/core/network/axiosInstance';

const categories = ref<Category[]>([]);

async function getchCategories() {
    try {
        const resp = await new CategoriesApiService(axiosInstance).getCategories();

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
    <div>
        <div v-for="category in categories" :key="category.id">
            <h2></h2>
            <div>
                <a 
                    v-for="children in category.children" 
                    :key="children.id" 
                    :href="`category/${children.id}`"
                    class="">
                    <span>{{ children.title }}</span>
                    <img
                        :src="children.image"
                        :alt="children.title" 
                        class="rounded-xl mt-auto mix-blend-darken"/>
                </a>
            </div>
        </div>
    </div>
</template>