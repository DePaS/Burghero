<template>
  <div class="flex-col flex content-center h-full justify-evenly items-center">
    <h1>Questa è la pagina iniziale, benvenuti al ristorante "Il Burghero"</h1>
    <h3>
      dove la parola Burbero e Hamburger si fondono in un mix di sapori che vi
      travolgeranno (letteralmente)
    </h3>
    <div class="flex flex-col gap-4 items-center">
      <label for="username">Inserisci il tuo nome utente:</label>
      <input
        type="text"
        id="username"
        v-model="cliente"
        name="username"
        class="p-4"
        @input="gestisciCliente"
      />
      <router-link to="/order"
        >click qui per scoprire il menù e ordinare
        <button
          class="hover:text-black border-2 border-green-300 py-6 w-2/3 hover:bg-green-300 transition ease-in-out duration-300 rounded-xl"
        >
          Ordina ora!
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../store/store";

const store = useStore();
const cliente = store.cliente;

const gestisciCliente = (event) => {
  store.cliente = event.target.value;
};
</script>
