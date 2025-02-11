<script setup lang="ts">
import AppButton from '@/components/ui/app-button.vue';
import { computed, ref } from 'vue';


const orderDiscount = ref<number>(1);
const deliveryCost = ref<number>(500);
</script>

<template>
  <div
    class="flex flex-col gap-4 mt-7 text-lg"
  >
    <div class="flex gap-2">
      <span>Доставка:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <div :class="deliveryCost === 0 ? 'text-gray-300' : 'font-bold'"> {{ deliveryCost }} ₽</div>
    </div>

    <div v-if="orderDiscount" class="flex gap-2">
      <span>Скидка: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> {{ orderDiscount }} %</b>
    </div>

    <div class="flex gap-2">
      <span>Итого:</span>
      <div class="flex-1 border-b border-dashed"></div>
      <div class="font-bold">{{ 2670 }} ₽</div>
    </div>

    <AppButton class="rounded-full">
      <template #default>
        <span class="text-2xl font-bold">
          Продолжить
        </span>
      </template>

      <template #subtitle>
        <span class="text-sm">
          К адресу и оплате
        </span>
      </template>
    </AppButton>
  </div>
</template>
