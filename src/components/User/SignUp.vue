<template>
  <div class="SignUp">
    <div class="container_SignUp">
      <h2 class="titulo">REGISTRA TU RESTAURANTE</h2>
      <img src="../../assets/Logo/Logo1.png" alt="Logo" />
      <h2></h2>
        <form v-on:submit.prevent="processSignUpUser">
        <div>
          <span>Restaurante</span>
          <input
            type="text"
            v-model="user.nombre_restaurante"
            placeholder="Nombre del restaurante"
            required
          />
        </div>
        <div>
          <span>Email</span>
          <input
            type="email"
            v-model="user.username"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <span>Administrador</span>
          <div style="width: 70%">
            <input
              autocomplete="off"
              type="text"
              v-model="user.first_name"
              placeholder="Nombres"
              required
            />
            <input
              autocomplete="off"
              type="text"
              v-model="user.last_name"
              placeholder="Apellidos"
              required
            />
          </div>
        </div>
        <div>
          <span>Contraseña</span>
          <input
            type="password"
            v-model="user.password"
            placeholder="Contraseña"
            required
          />
        </div>
        <div>
          <span>Verificar contraseña</span>
          <input
            type="password"
            v-model="verifyPass"
            placeholder="Verificar contraseña"
            required
          />
        </div>
        <br/>

        <div>
          <button type="submit" class="boton1">REGISTRARME</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        nombre_restaurante: "",
      },
      verifyPass: "",
    };
  },
  methods: {
    processSignUpUser: function () {
      if (this.verifyPass == this.user.password) {
        this.loadSignUp2();
      } else {
        alert("Contraseñas diferentes");
      }
    },
    loadSignUp2: function () {
      this.$router.push({
        name: "signUp2",
        params: {
          username: this.user.username,
          password: this.user.password,
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          nombre_restaurante: this.user.nombre_restaurante,
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.SignUp {
  margin: auto;
  font-family: 'Inter', sans-serif, #003384;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo{
  color: #003384;
}
.container_SignUp {
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container_SignUp div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.SignUp img {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.SignUp form {
  width: 70%;
}
.SignUp input {
  margin-top: 2%;
  height: 30px;
  width: 70%;
  box-sizing: border-box;
}
.SignUp div:nth-child(7) {
  display: flex;
  justify-content: center;
}

</style>
