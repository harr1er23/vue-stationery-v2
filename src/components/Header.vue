<script setup lang='ts'>
import Search from '@/features/search/presentation/Search.vue';
import AppButton from './ui/app-button.vue';
import LocationIco from './icons/LocationIco.vue';

const emit = defineEmits(['openDrawer'])
</script>


<template>
    <header class="flex gap-3 justify-between z-10 bg-white rounded-xl px-6 py-4">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img src="/logo.png" alt="Логотип" class="w-10"/>
                <div>
                    <h2 class="text-lg font-bold uppercase">Vue Stationery</h2>
                    <p class="text-slate-400 text-xs">Лучший магазин товаров</p>
                </div>
            </div>
        </router-link>

        <AppButton class="btn rounded-full items-center">
            <template #default>
                <spna>Адрес доставки</spna>
            </template>
            <template #ico>
                <LocationIco class="w-6 btn-hover:fill-current" />
            </template>
        </AppButton>

        <Search />

        <ul class="text-black flex items-center gap-4">
            <router-link to="/favorites">
                <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                    <img src="/heart.svg" alt="Favorite" />
                    <span>Закладки</span>
                </li>
            </router-link>
            <router-link to="/profile">
                <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                    <img src="/profile.svg" alt="Profile" />
                    <span>Профиль</span>
                </li>
            </router-link>
            <li 
                @click="() => emit('openDrawer')"
                class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/cart.svg" alt="Cart" />
                <span>0 р</span>
            </li>
            <router-link to="/auth">
                <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                    <div class="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                        class="absolute w-8 h-8 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    </div>
                    <span>Войти</span>
                </li>
            </router-link>
        </ul>
    </header>
</template>