<script setup>
import { provide, ref } from 'vue'

import Header from '@/components/Header.vue';
import Drawer from '@/components/Drawer.vue';
import Footer from '@/components/Footer.vue';


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

    <router-view></router-view>
    
    <Footer />
  </div>
</template>

<style></style>
