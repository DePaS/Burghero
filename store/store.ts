import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const cliente = ref("");
  const ordine = ref<string[]>([]);

  const addToOrder = (nomePiatto) => {
    ordine.value.push(nomePiatto);
  };

  const remove = (nomePiatto) => {
    const index = ordine.value.indexOf(nomePiatto);
    if (index !== -1) {
      ordine.value.splice(index, 1);
    }
  };

  return { cliente, ordine, addToOrder, remove };
});
