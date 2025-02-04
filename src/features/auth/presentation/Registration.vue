<script setup lang="ts">
import { ref } from 'vue';

import AppButton from '@/components/ui/app-button.vue';
import AppInputLabel from '@/components/ui/AppInputLabel.vue';
import AppTextInput from '@/components/ui/AppTextInput.vue';
import { signIn } from '../data/remote/useCases/login';
import { registration } from '../data/remote/useCases/registration';

const fullName = ref<string>('');
const email = ref<string>('');
const pass = ref<string>('');
const passConfirm = ref<string>('');

type ErrorsData = {
    inputName: string | null;
    errorValue: string 
}

const errors = ref<ErrorsData>({
    inputName: null,
    errorValue: ''
});

function formIsValid() {
    let isValid = true;

    if(fullName.value.trim().length === 0) {
        errors.value.inputName = "fullName";
        errors.value.errorValue = "Имя не может быть пустым!";
        isValid = false;
    }else if(email.value.length === 0){
        errors.value.inputName = "email";
        errors.value.errorValue = "Поле не может быть пустым!";
        isValid = false;
    }else if(pass.value.length < 8){
        errors.value.inputName = "pass";
        errors.value.errorValue = "Пароль должен быть от 8 символов!";
        isValid = false;
    }else if(pass.value !== passConfirm.value){
        errors.value.inputName = "passConfirm";
        errors.value.errorValue = "Пароли должны совпадать!";
        isValid = false;
    }else {
        errors.value.inputName = null;
        errors.value.errorValue = "";
        isValid = true;
    }

    return isValid;
}

const emit = defineEmits(['goToLogin']);

const isLoading = ref(false);

async function submitHandler() {
    if(formIsValid()){
        isLoading.value = true;
        await registration(fullName.value, email.value, pass.value);
        isLoading.value = false;
        emit('goToLogin');
    }
}
</script>

<template>
    <form
        @submit.prevent="submitHandler" 
        class="flex flex-col items-center rounded-lg bg-white border p-24 gap-2">
        <h1 class="text-3xl">Регистрация</h1>
        
        <div>
            <AppInputLabel forValue="fullName" value="Фио"/>
            <AppTextInput
                v-model="fullName"
                type="text"
                placeholder="Имя Фамилия"
                id="fullName"
                :error-value="errors.inputName === 'fullName' ? errors.errorValue : ''"/>
        </div>
        <div>
            <AppInputLabel forValue="email" value="Почта"/>
            <AppTextInput
                v-model="email"
                type="email" 
                placeholder="email@example.com" 
                id="email"
                :error-value="errors.inputName === 'email' ? errors.errorValue : ''"/>
        </div>
        <div>
            <AppInputLabel 
                forValue="pass" 
                value="Пароль"/>
            <AppTextInput 
                v-model="pass" 
                type="password" 
                placeholder="*******" 
                id="pass" 
                :error-value="errors.inputName === 'pass' ? errors.errorValue : ''"/>
        </div>
        <div>
            <AppInputLabel 
                forValue="passConfirm" 
                value="Повторите пароль"/>
            <AppTextInput 
                v-model="passConfirm" 
                type="password" 
                placeholder="*******" 
                id="passConfirm" 
                :error-value="errors.inputName === 'passConfirm' ? errors.errorValue : ''"/>
        </div>

        <p>Уже есть аккаунт? 
            <span 
                @click="emit('goToLogin')" 
                class="text-blue-400 cursor-pointer border-b border-blue-400 border-dashed">
                    Войти.
            </span>
        </p>


        <AppButton :loading="isLoading" type="submit">Зарегистрироваться</AppButton>
    </form>
</template>

