<template>
  <div class="view-container">
    <!-- usamos v-bind pero con su shortcut (:)-->
    <img v-if="imagen" :src="imagen" alt="No se puede visualizar" />
    <div class="oscuro"></div>

    <div class="pregunta-container">
      <h1>Pregunta</h1>
      <input v-model="pregunta" type="text" placeholder=" Hazme una pregunta" />
      <p>Recuerda terminar con el signo de interrogación (?)</p>

      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import { consumirAPIFacade } from "@/clients/YesNoClient.js";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
    };
  },
  watch: {
    // Son observadores de propiedades reactivas que cuando cambian se dispara obteniendo el valor antiguo y el valor actual
    pregunta(value, oldValue) {
      if (value.includes("?")) {
        // Lllamar al api
        this.respuesta = "Pensando.....";
        this.consumir();
      }
    },
  },
  methods: {
    async consumir() {
      const res = await consumirAPIFacade();
      console.log("Respuesta final");
      console.log(res);
      console.log(res.answer);

      this.respuesta = res.answer;
      this.imagen = res.image;
    },
  },
};
</script>

<style scoped>
img,
.oscuro {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 70px;
}
.oscuro {
  background-color: rgba(0, 0, 0, 0.4);
}
.pregunta-container {
  position: relative;
  min-height: 100vh; /* altura de toda la pantalla */
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  text-align: center;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}
h1,
h2,
p {
  color: white;
}
p {
  font-size: 20px;
}
h2 {
  margin-top: 150px;
}
</style>