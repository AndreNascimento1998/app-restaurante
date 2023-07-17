<template>
    <v-navigation-drawer v-model="sideMenu"  expand-on-hover elevation="1" rail permanent class="py-2">
        <v-list 
            v-for="(item, index) in globalStore.isAdm ? menuItemsCarte : menuItems" 
            :key="index" 
            density="compact" 
            nav
        >
            <v-list-item 
                v-if="!item?.subItems"
                @click="item.action"
                :prepend-icon="item.icon" 
                :title="item.title"
                class="letter-color"
            />
            
            <v-list-group v-else value="menuData">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        class="letter-color"
                        v-bind="props" 
                        :title="item.title" 
                        :prepend-icon="item.icon" 
                    />
                </template>
                <v-list-item 
                    v-for="(sub, index) in item.subItems" 
                    class="letter-color"
                    @click="outherPage(sub)"
                    :key="index" 
                    :title="sub.title" 
                    :prepend-icon="sub.icon"
                />
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import router from "@/router"
import { useGlobalStore } from "@/stores/GlobalStore"
import { computed, ref } from "vue"

const globalStore = useGlobalStore()
const sideMenu = ref(null)

const menuItems = computed(() => { 
    return [
        { title: 'Início', icon: 'mdi-home', action: () => router.push('/inicio') },
        { title: 'Cardápio', icon: 'mdi-food',  action: () => router.push('/cardapio')},
        { title: 'Promoções', icon: 'mdi-tag', action: ()   => router.push('/cardapio/promocao') },
        { title: 'Carrinho de Compras', icon: 'mdi-cart-check', action: () => router.push('/carrinho') },
        { title: 'Trocar Tema', icon: 'mdi-theme-light-dark', action: () => globalStore.trocaTema() },
        { title: 'Configurações', icon: 'mdi-cog' },
    ]
})

const menuItemsCarte = computed(() => {
    return [
        { title: 'Início', icon: 'mdi-home', action: () => router.push('/inicio') },
        { title: 'Cardápio', icon: 'mdi-food',  action: () => router.push('/cardapio')},
        { title: 'Promoções', icon: 'mdi-tag', action: ()   => router.push('/cardapio/promocao') },
        { title: 'Carrinho de Compras', icon: 'mdi-cart-check', action: () => router.push('/carrinho') },
        { title: 'Trocar Tema', icon: 'mdi-theme-light-dark', action: () => globalStore.trocaTema() },
        { title: 'Configurações', icon: 'mdi-cog' },
        { title: 'Editar Cardápio', icon: 'mdi-table-edit', subItems: [
            {
                title: 'Promoções', 
                icon: 'mdi-food',
                to: '/promocao-editar'
            },
            {
                title: 'Combos', 
                icon: 'mdi-food',
                to: '/combo-editar'
            },
            {
                title: 'Pratos Principais',
                icon: 'mdi-noodles',
                to: '/prato-principal-editar'
            },
            {
                title: 'Pratos Frios',
                icon: 'mdi-peanut',
                to: '/prato-frio-editar'
            },
            {
                title: 'Lanches',
                icon: 'mdi-hamburger',
                to: '/lanche-editar'
            },
            {
                title: 'Bebidas',
                icon: 'mdi-glass-wine',
                to: '/bebida-editar'
            }
        ]},
    ]
})

function outherPage(rota){
    router.push(`${rota.to}`)
}

</script>

<style>
.letter-color {
    color: #da7b08;
    cursor: pointer;
}

.letter-color:hover {
    color: #2eae17;
}

.v-list-item--density-compact.v-list-item--one-line {
    min-height: 0px;
}
</style>
