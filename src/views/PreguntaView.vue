<template>
  <Pregunta />
</template>

<script>
import Pregunta from "@/components/Pregunta.vue";
export default {
  components: {
    Pregunta,
  },
};
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-size: 50px;
}
</style>