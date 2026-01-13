<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="No se puede ver la imagen" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  /* Desmonataje de un componente */
  beforeUnmount() {
    console.log(
      "beforeUnmount: se ejecuta justo antes que el componente se destruya"
    );
  },
  unmounted() {
    console.log("unmounted: ya fue removido del DOM y destruido");
  },
};
</script>

<style>
img {
  height: 200px;
  right: 100px;
}
.pokemon-container {
  display: flex;
  justify-content: center;
  height: 200px;
}
</style>