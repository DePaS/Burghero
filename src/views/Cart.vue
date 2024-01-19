<template>
  <div>
    <h1>Carrello</h1>
    <div>
      <h1>Questo è il tuo carrello, {{ cliente }}</h1>
      <div>
        <ul>
          <template v-for="(piatto, index) in ordine" :key="index">
            <div class="flex justify-between">
              <li>{{ piatto }}</li>
              <button @click="rimuovi(piatto)">cancella</button>
            </div>
          </template>
        </ul>
      </div>
      <button @click="mandaOrdine()">Invia ordine</button>
      <div>
        <router-link to="/order">
          <a>ritorna al menu</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store/store";
import axios from "axios";

const store = useStore();
const cliente = computed(() => store.cliente);
const ordine = computed(() => store.ordine);

const rimuovi = (nomePiatto) => {
  store.remove(nomePiatto);
};

const mandaOrdine = async () => {
  try {
    const ordineObj = [];
    for (let i = 0; i < ordine.value.length; i++) {
      ordineObj.push(ordine.value[i]);
    }
    const response = await axios.post("http://localhost:3000/api/ordini", {
      nomeCliente: cliente.value,
      ordine: JSON.stringify(ordineObj),
    });
    alert("Ordine inviato con successo");
  } catch (error) {
    console.error("Errore durante l'invio", error);
    alert("Errore durante l'invio dell'ordine");
  }
};
</script>
