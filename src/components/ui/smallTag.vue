<template>
    <span class="bg-primary px-2 py-1 rounded-full text-white text-xs z-10">
        <slot></slot>
    </span>
</template>

<style scoped>
    span {
        background-color: var(--accentColor);
    }
</style>