<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h2 class="titulo">Iniciar sesión en Tu Menú</h2>
      <img src="../../assets/Logo/Logo1.png" alt="Logo" />
      <br />
      <form v-on:submit.prevent="processLogInUser">
        <div>
          <span>Usuario</span>
          <input
            type="email"
            v-model="user.username"
            placeholder="Email"
            required
          />
        </div>
        <br />
        <div>
          <span>Contraseña</span>
          <input
            type="password"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            style="width: 5%; height: 80%"
            id="cbox2"
            value="second_checkbox"
          />
          <label for="cbox2">Recordar mis datos</label>
        </div>
        <br />
        <a href="#">¿Olvidé mi contraseña?</a>
        <br />
        <div>
          <button  type="submit" @click="(showModal2 = false)" class="boton1">Iniciar Sesion</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("https://tumenu-be.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.logIn_user {
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
.container_logIn_user {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 25px;
  width: 600%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container_logIn_user div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logIn_user a {
  display: flex;
  justify-content: center;
}
.logIn_user img {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logIn_user form {
  width: 70%;
}
.logIn_user input {
  height: 30px;
  width: 70%;
  box-sizing: border-box;
}
.logIn_user button {
  width: 50%;
  height: 50px;
}
.container_logIn_user div:nth-child(5) {
  height: 20px;
  display: flex;
  justify-content: center;
}
.container_logIn_user div:nth-child(9) {
  display: flex;
  justify-content: center;
}
</style>
