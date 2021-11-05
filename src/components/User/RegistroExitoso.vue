<template>
  <div class="registro_exitoso">
    <div class="container_registro_exitosor">
      <img src="../../assets/Logo/Logo1.png" alt="Logo1" />
      <h2>Su restaurante fue registrado con éxito</h2>
      <h1>Ya puedes iniciar sesión</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistroExitoso",
  methods: {
    salir: function (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  created: function () {
    this.salir(3000).then(() => {
      this.$emit("completedSignUp");
    });
  },
};
</script>

<style scoped>
.registro_exitoso {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_registro_exitoso {
  border: 0px solid black;
  border-radius: 5px;
  width: 60%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>