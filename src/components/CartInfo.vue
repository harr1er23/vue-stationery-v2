<script setup lang="ts">
</script>

<template>
  <div
    class="flex absolute w-96 bottom-10 left-o flex-col gap-4 mt-7"
  >
    <div class="flex gap-2">
      <span>Сумма:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> {{ 0}} ₽</b>
    </div>

    <div class="flex gap-2">
      <span>Скидка: 5%</span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> {{ 0}} ₽</b>
    </div>

    <div class="flex gap-2">
      <span>Итого:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{ 0}} ₽</b>
    </div>

    <button
      class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
    >
      Оформить заказ
    </button>
  </div>
</template>
