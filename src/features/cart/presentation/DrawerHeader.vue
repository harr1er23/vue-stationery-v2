<script setup>
import Arrow from '@/components/icons/Arrow.vue';

const emit = defineEmits(['close'])
</script>

<template>
  <div class="flex items-center gap-5 mb-8">
    <div @click="emit('close')">
      <Arrow class="opacity-30 cursor-pointer transition hover:-translate-x-1 hover:opacity-100"/>
    </div>
    <h2 class="text-2xl font-bold">Корзина</h2>
  </div>
</template>
