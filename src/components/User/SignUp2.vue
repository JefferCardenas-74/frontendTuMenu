<template>
  <div class="SingUp2">
    <div class="container_SingUp2">
      <h2>{{user.informacion.nombre_restaurante}}</h2>
      <img src="../../assets/Logo/Logo1.png" alt="Logo" />
      <form v-on:submit.prevent="processSignUp">
        <div>
          <img src="../../assets/Iconos/earth.png" alt="logo" />
          <input
            type="text"
            v-model="user.informacion.pais"
            placeholder="Pais"
            required
          />
        </div>
        <div>
          <img src="../../assets/Iconos/location.png" alt="logo" />
          <input
            type="text"
            v-model="user.informacion.ciudad"
            placeholder="Ciudad"
            required
          />
        </div>
        <div>
          <img src="../../assets/Iconos/phone.png" alt="logo" />
          <input
            type="text"
            v-model="user.informacion.numero_contacto"
            placeholder="Numero de contacto"
            required
          />
        </div>
        <div>
          <img src="../../assets/Iconos/globe.png" alt="logo" />
          <input
            type="text"
            v-model="user.informacion.sitioweb"
            placeholder="Sitio WEB URL"
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" class="boton1">SIGUIENTE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp2",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        informacion: {
          nombre_restaurante: "",
          pais: "",
          ciudad: "",
          numero_contacto: "",
          sitioweb: "",
          is_active: "True",
        },
      },
    };
  },
  methods: {
    processSignUp: function () {
      axios
        .post("https://tumenu-be.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          this.$router.push({ name: "registroExitoso" });
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
  props: {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    nombre_restaurante: {
      type: String,
    },
  },
  created: function () {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.first_name = this.first_name;
    this.user.last_name = this.last_name;
    this.user.informacion.nombre_restaurante = this.nombre_restaurante;
  },
};
</script>

<style scoped>
.SingUp2 {
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_SingUp2{
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>