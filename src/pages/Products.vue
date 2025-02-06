<script setup lang='ts'>
import Categories from '@/features/categories/presentation/Categories.vue';
import CenterLayout from '@/layouts/CenterLayout.vue';


</script>


<template>
    <CenterLayout>
        <div class="flex flex-col gap-2">
            <!-- <Slider /> -->

            <div class="flex flex-col gap-2">
                <h2 class="text-2xl">Акции</h2>
                <!-- <Banners /> -->
            </div>

            <Categories />
        </div>
    </CenterLayout>
</template>