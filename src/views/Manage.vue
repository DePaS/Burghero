<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col">
      <h1 class="mb-4">Comande</h1>
      <Comande
        cliente="Paolo"
        :nome-piatto="[
          'Dal tetto',
          'dietro na roccia',
          'Dal tetto',
          'dietro na roccia',
          'Dal tetto',
          'dietro na roccia',
          'Dal tetto',
          'dietro na roccia',
        ]"
        tipo-carne="Doppio Hamburger 110gr"
        condimenti="doppio cheddar, doppio bacon, salsa burger"
        immagine="burger.webp"
        richieste="bella raga me la mettete un po' di kociak eaì"
      ></Comande>
    </div>
  </div>
</template>

<script setup>
import Comande from "../components/comande.vue";
</script>
