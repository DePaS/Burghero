<template v-for="(key, index) in Object.keys(data)" :key="index">
  <div class="flex flex-col gap-10" v-if="data">
    <template v-for="(nome, index2) in data" :key="index2">
      <div class="flex justify-between text-left">
        <div>
          <h1>{{ data[index2].cliente }}, &nbsp;</h1>
          <span>ha ordinato: &nbsp;</span>
        </div>
        <div>
          <template
            v-for="(piatto, piattoIndex) in JSON.parse(data[index2].ordine)"
            :key="piattoIndex"
          >
            <div class="">
              <h1>{{ piatto }}</h1>
              <h1></h1>
            </div>
          </template>
        </div>
        <div class="">
          <button
            class="bg-red-700 text-white px-2 py-2 rounded-xl h-16"
            @click="deleteOrder(data[index2].cliente)"
          >
            Elimina comanda
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref({});

const getOrders = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/ordini");
    data.value = response.data.data;
  } catch (error) {
    console.error("Errore durante il caricamento: " + error);
  }
};

const deleteOrder = async (cliente) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/ordini/${cliente}`
    );
    getOrders();
  } catch (error) {
    console.error("Errore durante la cancellazione dell'ordine:", error);
  }
};

onMounted(getOrders);
</script>
