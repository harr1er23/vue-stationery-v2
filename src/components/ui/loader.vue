<script setup></script>

<template>
    <span class="loader self-center"></span>
</template>

<style scoped>
.loader {
    border: 2px solid #fff;
    border-bottom-color: var(--accentColor);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
