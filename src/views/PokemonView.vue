<template>
  <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
  <PokemonOpciones
    @seleccionado="evaluarGanador($event)"
    :listaPokemons="pokemonArr"
  />
  <p v-if="mensaje">{{ mensaje }}</p>
  <div class="boton">
    <button @click="destruir()">DESTRUIR</button>
  </div>
</template>

<script>
import {
  obteneAleatorioFachada,
  obtenerVectorPokemonFachada,
} from "@/clients/PokemonClient";
import PokemonImagen from "@/components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: null,
      mostrar: true,
    };
  },
  /* Crea el componente */
  beforeCreate() {
    console.log("beforeCreate: apenas inicial la instancia del componente");
  },
  created() {
    console.log("created: ya se resolvieron data, computed, methods, watch");
  },
  /* Monta el componente: renderiza o visualiza el componente */
  beforeMount() {
    console.log(
      "beforeMounted: se ejecuta justo antes de renderizar un componente o un elemento HTML"
    );
  },
  mounted() {
    console.log("componente montado: el componente ya se renderizo");
    this.iniciarJuego();
  },

  /*Actualizacion de un componente */
  beforeUpdate() {
    console.log(
      "beforeUpdate: Cuando cambió un data o un props del componente y Vue está por re-renderizar el cambio"
    );
  },
  updated() {
    console.log(
      "Update: Cuando ya se actualizó después de la re-renderización"
    );
  },

  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFachada();
      const idAleatorio = obteneAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    evaluarGanador(idGanador) {
      console.log("valor recibido desde el padre");
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        this.mensaje = "ganaste";
      } else {
        this.mensaje = "perdiste";
      }
    },
    destruir() {
      this.mostrar = false;
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  font-weight: bold;
  color: blue;
}
.boton {
  display: flex;
  align-content: center;
  align-items: center;
}
</style>