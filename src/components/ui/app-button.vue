<script setup lang="ts">

defineProps<{
    text: string
    variant?: {
        type: "primary" | "danger" | "success" | "warning" | "secondary",
        default: "primary"
    }
}>()
</script>

<template>
    <button 
        class="flex items-center py-1 px-3 rounded-full border border-solid border-indigo-200 bg-indigo-200 text-base"
        :disabled="true">
        {{ text }}
        <slot name="ico"></slot>
    </button>    
</template>