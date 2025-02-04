<script setup lang="ts">
import { ref } from 'vue';

import AppButton from '@/components/ui/app-button.vue';
import AppInputLabel from '@/components/ui/AppInputLabel.vue';
import AppTextInput from '@/components/ui/AppTextInput.vue';
import { signIn } from '../data/remote/useCases/login';

const email = ref<string>('');
const pass = ref<string>('');

const emit = defineEmits(['goToRegistation']);

type ErrorsData = {
    inputName: string | null;
    errorValue: string 
}

const isLoading = ref(false);
const errors = ref<ErrorsData>({
    inputName: null,
    errorValue: ''
});

function formIsValid() {
    let isValid = true;

    if(email.value.length === 0){
        errors.value.inputName = "email";
        errors.value.errorValue = "Поле не может быть пустым!";
        isValid = false;
    }else if(pass.value.length < 8){
        errors.value.inputName = "pass";
        errors.value.errorValue = "Пароль должен быть от 8 символов!";
        isValid = false;
    }else if(pass.value.length === 0){
        errors.value.inputName = "pass";
        errors.value.errorValue = "Поле не может быть пустым!";
        isValid = false;
    }else {
        errors.value.inputName = null;
        errors.value.errorValue = "";
        isValid = true;
    }

    return isValid;
}

async function submitHandler() {
    try{
        isLoading.value = true;

        if(formIsValid()){
            await signIn(email.value, pass.value);
        }
    }catch(err) {
        //сообщение ошибки модалка
        console.error(err);
    }finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <form
        @submit.prevent="submitHandler" 
        class="flex flex-col items-center rounded-lg bg-white border p-24 gap-2">
        <h1 class="text-3xl">Вход</h1>
        
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
            <AppInputLabel forValue="pass" value="Пароль"/>
            <AppTextInput 
                v-model="pass" 
                type="password" 
                placeholder="*******" 
                id="pass"
                :error-value="errors.inputName === 'pass' ? errors.errorValue : ''"/>
        </div>

        <p>Нет аккаунта? 
            <span @click="emit('goToRegistation')" class="text-blue-400 cursor-pointer border-b border-blue-400 border-dashed">Зарегистрироваться.</span>
        </p>


        <AppButton :loading="isLoading" type="submit">Войти</AppButton>
    </form>
</template>

