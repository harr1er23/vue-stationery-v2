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
        class="flex justify-center rounded-lg text-base py-1 px-3 text-white hover:bg-transparent"
        :disabled="disabled">
        <slot name="ico"></slot>
        <div class="flex flex-col">
            <slot v-if="!loading"></slot>
            <loader v-else class="w-6 h-6 mx-6"/>
            <slot name="subtitle"></slot>
        </div>
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