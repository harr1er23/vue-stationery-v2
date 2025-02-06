<script setup lang='ts'>
import CenterLayout from '@/layouts/CenterLayout.vue';
import Filters from '@/features/filters/presentation/Filters.vue';
</script>


<template>
    <div class="flex w-full gap-2">
        <Filters class="mt-4"/>

        <CenterLayout>
            <div>Фрукты</div>
        </CenterLayout>
    </div>
</template>