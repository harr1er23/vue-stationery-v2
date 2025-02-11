<script setup lang="ts">
import { inject, ref } from 'vue'
import DrawerHeader from './DrawerHeader.vue';
import CartInfo from './CartInfo.vue';

const drawerRef = ref(null);

const closeDrawer = inject('closeDrawer')
</script>

<template>
  <div @click="closeDrawer" class="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-70"></div>
  <div ref="drawerRef" class="flex flex-col justify-between bg-white w-3/12 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHeader @close="closeDrawer"/>

    <CartInfo />
  </div>
</template>