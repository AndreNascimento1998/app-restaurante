<template>
    <div class="cor-div-pai">
        <v-row>
            <v-img 
                src="../../assets/loginImg/foodLogin.png"
            >

            <v-col cols="8" offset="2">
                <v-card class="centered-container" elevation="12">
                        <v-row>
                            <v-col cols="6" class="cor-1 pa-2">

                                <v-img 
                                    src="../../assets/loginImg/foodLogin2.png" 
                                    max-width="100%"
                                    width="100%"
                                    height="100%"
                                    cover
                                    class="pointer py-12 px-2"
                                />

                            </v-col>

                            <v-col cols="6" class="cor-2 pa-0">

                                <v-card-title class="pa-4 mt-8 mb-8 text-center letra">
                                    <span>Food</span><span class="mr-1 ml-1 letter-secondary ">Chain</span><span>Magnate</span>
                                </v-card-title>

                                <v-col cols="12" class="pa-0">
                                <v-select
                                    v-model="cheatMode"
                                    label="Escolha a permissão"
                                    placeholder="Caso não queira se cadastrar"
                                    :items="permission"
                                    
                                />
                                </v-col>

                                <v-col cols="8" offset="2" class="pa-0">
                                    <v-text-field 
                                        label="E-mail" 
                                        density="compact" 
                                        variant="underlined"
                                    />
                                </v-col>
                                <v-col cols="8" offset="2" class="pa-0">
                                    <v-text-field 
                                        label="Senha" 
                                        type="password"
                                        density="compact" 
                                        variant="underlined"
                                    />
                                </v-col>

                                <v-col cols="8" offset="2" class="mb-8 mt-4 pa-0">
                                    <v-btn @click="home()" block variant="outlined" >
                                        Entrar
                                    </v-btn>
                                    <span class="letra-esqueceu-senha">Esqueceu senha ?</span>
                                </v-col>

                                <v-col cols="8" offset="2" class="mb-10 pa-0">
                                    <register-page />
                                </v-col>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-img>
        </v-row>
    </div>
</template>

<script setup>
import router from "@/router";
import { useGlobalStore } from "@/stores/GlobalStore";
import RegisterPage from "@/Views/Login/Partials/RegisterPage.vue";
import { onMounted, reactive, ref } from "vue";

const globalStore = useGlobalStore()
const permission = reactive(['client', 'adm', 'deslogado'])
let cheatMode = ref('')

function home() {
    if(cheatMode.value === 'client'){
        globalStore.isLog = true
        globalStore.isAdm = false
    }else if (cheatMode.value === 'adm'){
        globalStore.isLog = true
        globalStore.isAdm = true
    }else if(cheatMode.value === 'deslogado') {
        globalStore.isLog = false
        globalStore.isAdm = false
    }
    router.push('/')
}

onMounted(() => {
    //window.alert('Ainda estou atualizand, logo + com autênticação (restaurante-app github) e consumindo a api (api-restaurante github)')
})

</script>

<style scoped>
.centered-container {
    margin-top: 50%;
}

.cor-1 {
    background-color: #e0973d;
    color: #20201f;
}

.cor-2 {
    background-color: #20201f;
    color: white;
}

.cor-div-pai {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #da7b08;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pointer {
    margin-left:1.5%;
}

.letter-secondary {
    color: #2eae17;
}

.letra {
    color: #da7b08;
}

.letra-esqueceu-senha{
    font-size: 12px;
    font-style: italic;
    cursor: pointer;
    color: #da7b08;
}

.letra-esqueceu-senha:hover {
    color: #2eae17;
}
</style>