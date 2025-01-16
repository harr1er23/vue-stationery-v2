<script setup lang='ts'>
</script>


<template>
    <header class="flex justify-between z-10 bg-white rounded-xl shadow-lg px-6 py-4">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img src="/logo.png" alt="Логотип" class="w-10"/>
                <div>
                    <h2 class="text-lg font-bold uppercase">Vue Stationery</h2>
                    <p class="text-slate-400 text-xs">Лучший магазин канцтоваров</p>
                </div>
            </div>
        </router-link>

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
            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
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