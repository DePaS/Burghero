<template>
  <div class="flex gap-2 xs:justify-between">
    <div class="w-44 flex-shrink-0">
      <img :src="`/src/assets/images/${immagine}`" />
    </div>
    <div class="flex flex-col">
      <h1 class="text-2xl mb-4">{{ nomePiatto }}</h1>
      <span class="text-sm">{{ tipoCarne }}</span>
      <span class="text-sm">{{ condimenti }}</span>
    </div>
  </div>
  <div class="flex justify-center mt-2">
    <button class="border border-cyan-500 px-20 py-2" @click="selezionaItem">
      aggiungi all'ordine
    </button>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance } from "vue";

const props = defineProps({
  nomePiatto: String,
  tipoCarne: String,
  condimenti: String,
  immagine: String,
});

const instance = getCurrentInstance();
const selezionaItem = () => {
  const nomePiatto = props.nomePiatto;
  instance.emit("seleziona-item", nomePiatto);
};
</script>
