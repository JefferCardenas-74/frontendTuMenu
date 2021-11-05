<template>
  <userHeader @logOut="logOut" />

  <div class="user_settings">
    <div class="formulario_informacion">
      <div class="imagenes_settings">
        <img
          src="../../assets/fotosrestaurantes/LogoShake.png"
          alt="Logo"
          class="mapa_set"
        />
        <img src="../../assets/Home/mapa.png" alt="Mapa" class="mapa_set" />
      </div>
      <div class="formulario_settings">
        <form v-on:submit.prevent="processUpdate">
          <div v-if="loaded" class="input_set">
            <div>
              <img
                src="https://img.icons8.com/material-outlined/30/000000/find-email.png"
              />
              <input type="email" v-model="user.username" />
            </div>
            <div class="nombre_usuario">
              <div>
                <img
                  src="https://img.icons8.com/material/30/000000/person-male.png"
                />
                <input type="text" v-model="user.first_name" />
              </div>
              <div><input type="text" v-model="user.last_name" /></div>
            </div>
            <div>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/restaurant.png"
              />
              <input
                type="text"
                v-model="user.informacion.nombre_restaurante"
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/ios-filled/30/000000/around-the-globe.png"
              />
              <input type="text" v-model="user.informacion.pais" />
            </div>
            <div>
              <img
                src="https://img.icons8.com/material-outlined/30/000000/city-buildings.png"
              />
              <input type="text" v-model="user.informacion.ciudad" />
            </div>
            <div>
              <img
                src="https://img.icons8.com/material-outlined/30/000000/phone.png"
              />
              <input type="tel" v-model="user.informacion.numero_contacto" />
            </div>
            <div>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/cursor--v1.png"
              />
              <input type="url" v-model="user.informacion.sitioweb" />
            </div>
          </div>
          <br />
        </form>
      </div>
    </div>
    <div>
      <button type="submit" class="boton1">ACTUALIZAR</button>
    </div>
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
import userHeader from "./UserHeader.vue";
export default {
  name: "UserData",

  data: function() {
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
        },
      },
      loaded: false,
    };
  },

  components: {
    userHeader,
  },

  methods: {
    getData: async function() {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();

      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .get(`https://tumenu-be.herokuapp.com/user/detalle/${userId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          this.user.username = result.data.username;
          this.user.password = result.data.password;
          this.user.first_name = result.data.first_name;
          this.user.last_name = result.data.last_name;
          this.user.informacion.nombre_restaurante =
            result.data.informacion.nombre_restaurante;
          this.user.informacion.pais = result.data.informacion.pais;
          this.user.informacion.ciudad = result.data.informacion.ciudad;
          this.user.informacion.numero_contacto =
            result.data.informacion.numero_contacto;
          this.user.informacion.sitioweb = result.data.informacion.sitioweb;
          this.loaded = true;
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },

    verifyToken: function() {
      return axios
        .post(
          "https://tumenu-be.herokuapp.com/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },

    processUpdate: async function() {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }

      await this.verifyToken();

      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();

      axios
        .put(
          `https://tumenu-be.herokuapp.com/user/actualizar/${userId}/`,
          this.user
        )
        .then((result) => {
          this.loaded = true;
          alert("Tu información se actualizó correctamente");
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: La infomación no se pudo actualizar");
        });
    },

    logOut: function() {
      localStorage.clear();
      alert("Sesión Cerrada");
      // this.verifyAuth();
      this.$router.push({ name: "home" });
    },
  },

  mounted: function() {
    this.getData();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.user_settings {
  margin: auto;
  width: 900px;
  height: 600px;
  color: #003884;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo_s {
  font-size: 30px;
  color: #000000;
  text-align: center;
}
.input_set div {
  margin-top: 3%;
  padding: auto;
  color: rgb(133, 133, 133);
  width: 600px;
  height: 30px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
}
.input_set div input {
  color: rgb(12, 12, 12);
  font-family: "Inter", sans-serif;
  width: 600px;
  height: 30px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
}
.nombre_usuario div {
  margin: 0%;
  width: 300px;
  height: 30px;
}
.formulario_informacion {
  color: rgb(0, 0, 0);
  width: 600px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btn_actualizar {
  display: grid;
}
.imagenes_settings {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mapa_set {
  width: 190px;
  display: flex;
  justify-content: center;
}
</style>
