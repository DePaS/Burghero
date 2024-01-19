<template>
  <div class="flex flex-col gap-10">
    <div class="flex fixed gap-10 bg-black w-full">
      <h1 class="flex-grow mt-2">benvenuto {{ cliente }} gianfrancioschio</h1>
      <router-link to="/cart">
        <button class="bg-red-300 border-2 p-2 ml-auto rounded-sm">
          vai al carrello
        </button>
      </router-link>
    </div>
    <div class="flex flex-col mt-10 p-2">
      <h1 class="mb-4">Antipasti e fritti</h1>
      <menuItem
        nome-piatto="Dal Tetto"
        tipo-carne="Doppio Hamburger 110gr"
        condimenti="doppio cheddar, doppio bacon, salsa burger"
        immagine="burger.webp"
        @seleziona-item="salvaNomePiatto"
      ></menuItem>
    </div>
    <div class="flex flex-col gap-5">
      <h1>Panini</h1>
      <menuItem
        nome-piatto="Dietro na roccia"
        tipo-carne="Doppio Hamburger 110gr"
        condimenti="doppio cheddar, doppio bacon, salsa burger"
        immagine="burger.webp"
        @seleziona-item="salvaNomePiatto"
      ></menuItem>
    </div>
    <div class="flex flex-col gap-5">
      <h1>Bevande</h1>
      <menuItem
        nome-piatto="hamburger"
        tipo-carne="Doppio Hamburger 110gr"
        condimenti="doppio cheddar, doppio bacon, salsa burger"
        immagine="burger.webp"
        @seleziona-item="salvaNomePiatto"
      ></menuItem>
    </div>
    <div class="flex flex-col gap-5">
      <h1>Dolci</h1>
      <menuItem
        nome-piatto="Dal Tetto"
        tipo-carne="Doppio Hamburger 110gr"
        condimenti="doppio cheddar, doppio bacon, salsa burger"
        immagine="burger.webp"
      ></menuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import menuItem from "../components/menuItem.vue";
import { useStore } from "../store/store";

const store = useStore();
const cliente = computed(() => store.cliente);
const salvaNomePiatto = (nomePiatto) => {
  store.ordine.push(nomePiatto);
};
</script>
