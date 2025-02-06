<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type BannerDataModel from '../data/models/BannerModel';
import bannersApiService from '../data/remote/bannersApiServise';

const banners = ref<BannerDataModel[]>([]);
const isLoading = ref<boolean>(false);

async function fetchBanners() {
    try {
        isLoading.value = false;
        const resp = await bannersApiService.getBanners();
        banners.value = resp;
    }catch(err) {
        console.error(err);
    }finally{
        isLoading.value = false;
    }
}

onBeforeMount(async () => {
    await fetchBanners();
})
</script>

<template>
    <div class="flex flex-wrap gap-4">
        <div v-if="isLoading">Loading...</div>
        <div v-else v-for="banner in banners" class="relative cursor-pointer">
            <div class="absolute top-5 left-5">{{ banner.name }}</div>
            <img :src="banner.imageUrl" alt="Item" class="w-72 self-center rounded-3xl" />
        </div>
    </div>
</template>