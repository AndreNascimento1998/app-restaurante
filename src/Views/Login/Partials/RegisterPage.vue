<template>
    <v-row>
        <v-col>
            <v-dialog class="cor-de-fundo" transition="dialog-bottom-transition" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn block variant="outlined" v-bind="props">Cadastrar-se</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card class="cor-de-fundo-dialog " width="600px">
                        <v-toolbar color="#da7b08" title="Cadastro rápido" />
                        <v-form @submit.prevent ref="form">
                            <v-row class="pa-4">
                                <v-col cols="10" offset="1">
                                    <v-text-field
                                        label="E-mail" 
                                        density="compact" 
                                        variant="filled"
                                        placeholder="aaaaa_14@ig.com"
                                        persistent-placeholder
                                        :rules="emailRules"
                                />
                                </v-col>
                                <v-col cols="10" offset="1">
                                    <v-text-field 
                                        label="Senha" 
                                        density="compact" 
                                        variant="filled"
                                        type="password"
                                        placeholder="AAAaaa111"
                                        persistent-placeholder
                                        :rules="passwordRules"
                                    />
                                </v-col>
                            
                                <v-col cols="10" offset="1">
                                    <v-text-field 
                                        label="Telefone" 
                                        density="compact" 
                                        variant="filled"
                                        placeholder="(62) 77777-7777"
                                        persistent-placeholder
                                        :rules="phoneRules"
                                        v-mask="['(##) #####-####', '(##) ####-####']"
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                            
                            <v-col cols="10" offset="1">
                                <v-btn block variant="outlined" @click="register(isActive)">Confirmar</v-btn>
                            </v-col>
                            
                            <v-col cols="10" offset="1">
                                <v-btn block variant="outlined" @click="isActive.value = false">Cancelar</v-btn>
                            </v-col>
                            
                        </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script setup>
import router from "@/router"
import { computed, ref } from "vue"
import useValidation from '@/composable/useValidation.js'

const form = ref()
const { 
    required, 
    upperCase, 
    lowCase, 
    numberCase, 
    minLenght,
    phoneMin,
    emailMin,
    arrobaRequired
} = useValidation()

const emailRules = computed(() => [required, emailMin, arrobaRequired])
const passwordRules = computed(() => [required, upperCase, lowCase, numberCase, minLenght])
const phoneRules = computed(() => [required, phoneMin])


async function register(isActive) {
    const {valid} = await form.value.validate()
    if(valid){
        router.push('/inicio')
        isActive.value = false
    }else {
        alert('Digita tudo ai')
    }
}
</script>

<style scoped>

.cor-de-fundo {
    background-color:  rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
}

.cor-de-fundo-dialog {
    background-color: #ededed;
    color: rgb(0, 0, 0);
}
</style>