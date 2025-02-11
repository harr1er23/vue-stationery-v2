<script setup lang="ts">
import CloseIco from '@/components/icons/CloseIco.vue';
import SearchIco from '@/components/icons/SearchIco.vue';
import { ref, watch } from 'vue';

const searchValue = ref<string>('');

watch(searchValue, async () => {
    
})
</script>

<template>
    <div class="relative flex-1 flex gap-2 text-base items-center px-2 bg-gray-100 rounded-full cursor-pointer">
        <SearchIco class="w-8 ml-1"/>
        <input v-model="searchValue" placeholder="Поиск товаров..."/>
        <CloseIco v-if="searchValue" @click="searchValue = ''" class="w-5 mr-1" />
    </div>
</template>

<style scoped>
    input {
        all: unset;
        width: 100%;
    }
</style>