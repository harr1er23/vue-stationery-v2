<script setup lang="ts">

defineProps<{
    id?: string;
    placeholder?: string;
    type: string;
    errorValue?: string;
    modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="flex flex-col gap-1">
        <div 
            class="border border-solid px-4 py-2 rounded-xl"
            :class="errorValue && 'border-red-400'">
            
            <slot name="ico"></slot>
            <input
                :value="modelValue"
                @input="(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)"
                class="bg-transparent"
                :id="id" 
                :placeholder="placeholder" 
                :type="type"/>
        </div>
        <span 
            class="text-red-400"
            v-if="errorValue">
            {{ errorValue }}
        </span>
    </div>
</template>

<style scoped>
    input{
        all: unset;
    }
</style>