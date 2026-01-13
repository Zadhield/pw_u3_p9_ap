<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <button @click="presentar()">Mostrar ID</button>
  <h3>{{ idEstudiante }}</h3>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null,
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    //this.idEstudiante = this.$route.params.id;
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
  },
  methods: {
    presentar() {
      this.idEstudiante = this.$route.params.id;
    },
  },
};
</script>

<style>
</style>