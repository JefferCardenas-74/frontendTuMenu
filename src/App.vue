<template>
  <div id="app" class="app">
    <div class="header">
      <div id="nav1" v-if="!is_auth">
        <div class="botones1">
          <button @click="showModal1 = true" v-if="!is_auth" v-on:click="loadLogIn" class="boton1">
            INICAR SESIÓN
          </button>
          <button @click="showModal2 = true" v-if="!is_auth" v-on:click="loadSignUp" class="boton1">
            REGISTRARSE
          </button>
        </div>
      </div>

      <div class="navbar" v-if="!is_auth">
        <img src="./assets/Logo/Logo.png" class="logo" />
      </div>

      <div id="nav_in" v-if="!is_auth">
        <router-link to="/home">Inicio</router-link> |
        <router-link to="/about">Nosotros</router-link> |
        <router-link to="/restaurants">Restaurantes</router-link>|
        <router-link to="/contact">Contáctenos</router-link>
      </div>
      <router-view></router-view>
    </div>

    <div class="footer_inicio">
      <div class="footer_container">
        <div class="footer_col">
          <h3>PEDIDOS EN LÍNEA</h3>
          <dl>
            <dt>Misión</dt>
            <dt>visión</dt>
            <dt>Pedidos del sitio web</dt>
            <dt>Pedidos en redes</dt>
            <dt>Cómo funciona</dt>
          </dl>
        </div>
        <div class="footer_col">
          <h3>SERVICIOS DE RESTAURANTE</h3>
          <dl>
            <dt>Visión general</dt>
            <dt>Pedir a domicilio</dt>
            <dt>Pedir para llevar</dt>
            <dt>Pedidos en redes</dt>
            <dt>Entregar comida</dt>
          </dl>
        </div>
        <div class="footer_col">
          <h3>SOLICITUDES</h3>
          <dl>
            <dt>Plantilla de menú</dt>
            <dt>Horarios y servicios</dt>
            <dt>Métodos de pago</dt>
            <dt>Generador de sitios web</dt>
            <dt>Cómo vender</dt>
            <dt>Reseñas</dt>
          </dl>
        </div>
        <div class="mapa">
          <img src="./assets/Home/mapa.png" class="mapaimg" />
          <h3>+57 1234567890</h3>
          <h3>Calle 34 #19 - 23</h3>
        </div>
      </div>
    </div>


    <div class="redes_1">
      <button class="close">
        <img src="./assets/Redes/facebook.png" class="redes" />
      </button>
      <button class="close">
        <img src="./assets/Redes/instagram.png" class="redes" />
      </button>
      <button class="close">
        <img src="./assets/Redes/linkedin.png" class="redes" />
      </button>
      <button class="close">
        <img src="./assets/Redes/pinterest.png" class="redes" />
      </button>
      <button class="close">
        <img src="./assets/Redes/twitter.png" class="redes" />
      </button>
      <button class="close">
        <img src="./assets/Redes/youtube.png" class="redes" />
      </button>
    </div>
  </div>

  <div>

    <transitions name="modalLogIn">
      <div class="modal-overlay" v-if="showmModal1"></div>
    </transitions>
    <transitions name="modalLogIn">
      <div v-if="showModal1" class="modaly">
        <button @click="(showModal1 = false), redirection()" class="close">X</button>
        <router-view v-on:completedLogIn="completedLogIn"> </router-view>
      </div>
    </transitions>

    <transitions name="modalSingUp">
      <div class="modal-overlay" v-if="showModal2"></div>
    </transitions>
    <transitions name="modalSingUp">
      <div v-if="showModal2" class="modaly">
        <button @click="(showModal2 = false), redirection()" class="close">X</button>
        <router-view v-on:completedSignUp="completedSignUp"> </router-view>
      </div>
    </transitions>

  </div>
</template>

<script>
  export default {
    name: "App",

    data: function () {
      return {
        is_auth: false,
        showModal1: false,
        showModal2: false,
        username: localStorage.getItem('username') || "none"
      };
    },
    // data() {
    //   return {
        
    //   };
    // },
    // data: function () {
    //   return {
    //     username: localStorage.getItem('username') || "none"
    //   }
    // },
    components: {},
    methods: {
      verifyAuth: function () {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false)
          this.$router.push({ name: "logIn" });
        else
          this.$router.push({ name: "userhome" });
      },
      loadLogIn: function () {
        this.$router.push({ name: "logIn" });
      },
      loadSignUp: function () {
        this.$router.push({ name: "signUp" });
      },
      completedLogIn: function (data) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.showModal1 = false;
        this.verifyAuth();
      },
      completedSignUp: function () {
        this.loadLogIn();
      },
      logOut: function () {
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
        this.$router.push({ name: "home" });
      },
      redirection() {
        this.$router.push({ name: "inicio" });
      },
    },
    created: function () {
      this.verifyAuth();
    },
  };
</script>

<style>
  #app {
    margin: auto;
    padding: 0;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #020202;
  }

  body {
    margin: 0 0 0 0;
  }

  .header {
    margin: auto;
    padding: 0;
    width: 100%;
    color: #003884;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .botones1 {
    width: 40%;
    margin: auto;
    padding: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    font-size: 14px;
  }

  .navbar {
    width: 90%;
    margin: auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header nav button {
    background: #e5e7e9;
    padding: 10px 20px;
  }

  .header nav button:hover {
    color: #283747;
    background: #e5e7e9;
    border: 1px solid #e5e7e9;
  }

  .main-component {
    height: 90vh;
    margin: 0%;
    padding: 0%;
    background: #fdfefe;
  }

  .logo {
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  #nav1 {
    width: 85%;
    margin: auto;
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    text-transform: uppercase;
    font-size: x-large;
  }

  #nav_in {
    width: 85%;
    margin: auto;
    padding: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    text-transform: uppercase;
    font-size: x-large;
  }

  #nav_in a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav_in a.router-link-exact-active {
    color: #95a4b8;
  }

  .boton1 {
    width: 200px;
    height: 50px;
    padding: 15px 10px;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid #003884;
    background: transparent;
    color: #003884;
    background: transparent;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
  }

  .modaly {
    position: fixed;
    width: 75%;
    height: 95%;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1px;
    border-radius: 25px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    z-index: 101;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer_container {
    width: 900px;
    height: 320px;
    margin: auto;
    padding: 0;
    display: flex;
    background: #003884;
    align-items: flex-start;
    justify-content: space-around;
  }

  .footer_col {
    margin: 30px;
    width: 320px;
    display: flex;
    align-items: initial;
    flex-direction: column;
    font-size: medium;
    text-align: left;
    color: #e5e7e9;
  }

  .mapa {
    margin: 30px;
    width: 300px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    font-size: small;
    justify-content: flex-end;
    color: #e5e7e9;
  }

  .mapaimg {
    display: flex;
    width: 100%;
  }

  .close {
    width: 50px;
    height: 50px;
    padding: 15px 10px;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid #003884;
    background: transparent;
    color: #003884;
    background: transparent;
    object-position: right;
  }

  .redes {
    width: 20px;
  }
</style>