<script setup>
import { inject } from 'vue'
import Arrow from './icons/Arrow.vue';

const closeDrawer = inject('closeDrawer')
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <div @click="closeDrawer">
      <Arrow class="opacity-30 cursor-pointer transition hover:-translate-x-1 hover:opacity-100"/>
    </div>
    <h2 class="text-2xl font-bold">Корзина</h2>
  </div>
</template>
