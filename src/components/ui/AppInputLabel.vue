<script setup lang="ts">
    defineProps<{
        forValue: string;
        value: string;
    }>();
</script>

<template>
    <label :for="forValue">{{ value }}</label>
</template>
