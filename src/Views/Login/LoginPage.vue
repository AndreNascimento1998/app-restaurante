<template>
    <div class="cor-div-pai">
        <v-row>
            <v-img 
                src="../../assets/loginImg/foodLogin.png"
            >
            <v-col cols="8" offset="2">
                <v-card class="centered-container" elevation="12">
                        <v-row>
                            <v-col cols="6" class="cor-1 pa-0">

                                <v-img 
                                    src="../../assets/loginImg/foodLogin2.png" 
                                    max-width="100%"
                                    width="100%"
                                    height="100%"
                                    cover
                                    class="pointer py-12 px-2"
                                />

                            </v-col>

                            <v-col cols="6" class="cor-2 pa-0 letra">

                                <v-card-title class="pa-4 mt-10 text-center">
                                    Food Chain Magnate
                                </v-card-title>

                                <v-col cols="8" offset="2" class="mt-8">
                                    <v-text-field 
                                        label="E-mail" 
                                        density="compact" 
                                        variant="underlined"
                                        placeholder="aaaaa_14@ig.com"
                                        persistent-placeholder
                                    />
                                </v-col>

                                <v-col cols="8" offset="2">
                                    <v-text-field 
                                        label="Senha" 
                                        type="password"
                                        density="compact" 
                                        variant="underlined"
                                    />
                                </v-col>

                                <v-col cols="8" offset="2" class="cor-botao mb-10">
                                    <v-btn block variant="outlined" >
                                        Entrar
                                    </v-btn>
                                    <span class="letra-esqueceu-senha">Esqueceu senha ?</span>
                                </v-col>

                                <v-col cols="8" offset="2" class="botao-cadastrar mb-2">
                                    <v-btn block variant="outlined" >
                                        Cadastrar-se
                                    </v-btn>
                                </v-col>

                                <v-col class="mb-4">
                                    <h1></h1>
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
</script>

<style scoped>
.centered-container {
    margin-top: 65vh;
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

.letra {
    color: #da7b08;
}

.cor-botao {
    color:#da7b08 ;
}

.letra-esqueceu-senha{
    font-size: 12px;
    font-style: italic;
    cursor: pointer;
}

.botao-cadastrar {
    color: white;
}

.botao-cadastrar:hover {
    color: #da7b08;
}
</style>