<script setup lang='ts'>
import Categories from '@/features/categories/presentation/Categories.vue';


</script>


<template>
    <div class="flex flex-col gap-2">
        <!-- <Slider /> -->

        <div class="flex flex-col gap-2">
            <h2 class="text-2xl">Акции</h2>
            <!-- <Banners /> -->
        </div>

        <div>
            <h2 class="text-2xl">Новинки</h2>
            <!-- <Banners /> -->
        </div>

        <Categories />
    </div>
</template>