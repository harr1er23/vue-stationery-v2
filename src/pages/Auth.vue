<script setup lang='ts'>
import Auth from '@/features/auth/presentation/Auth.vue';
import Registration from '@/features/auth/presentation/Registration.vue';
import { ref } from 'vue';


const isSignIn = ref<boolean>(true);
</script>


<template>
    <div class="flex flex-col items-center justify-center h-full">
        <Auth @goToRegistation="isSignIn = false" v-if="isSignIn"/>
        <Registration @goToLogin="isSignIn = true" v-else/>
    </div>
</template>