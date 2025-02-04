<script setup lang="ts">
import loader from './loader.vue';


defineProps<{
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    variant?: "primary" | "danger" | "success" | "warning" | "secondary";
    loading?: boolean;
}>()
</script>

<template>
    <button
        :type="type ?? 'button'"
        class="flex items-center py-1 px-3 rounded-lg text-base text-white hover:bg-transparent"
        :disabled="disabled">
        <slot v-if="!loading"></slot>
        <loader v-else class="w-6 h-6 mx-6"/>
        <slot name="ico"></slot>
    </button>    
</template>

<style scoped>
    button {
        background-color: var(--accentColor);
        border: 1px solid var(--accentColor);
        
        &:hover{
            color: var(--accentColor);
        }
    }
</style>