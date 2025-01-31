<script setup>
import { provide, ref } from 'vue'

import Header from '@/components/Header.vue';
import Drawer from '@/components/Drawer.vue';


const showDrawer = ref(false)

const openDrawer = () => {
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
}

provide('closeDrawer', closeDrawer)
</script>

<template>
  <Drawer v-if="showDrawer" />
  <div class="flex flex-col rounded-xl mx-24">
    <Header @open-drawer="openDrawer"></Header>

    <div class="flex bg-white p-4 mt-4 rounded-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
