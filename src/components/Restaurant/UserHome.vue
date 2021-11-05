<template>

  <userHeader @logOut="logOut"/>
  
</template>

<script>

import userHeader from "./UserHeader.vue"
  export default {
    name: "userhome",
    data: function () {
      return {
        is_auth: false,
      };
    },
    data: function () {
      return {
        username: localStorage.getItem("username") || "none",
      };
    },
    components: {
      userHeader
    },
    methods: {
      verifyAuth: function () {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false) this.$router.push({ name: "logIn" });
        else this.$router.push({ name: "userhome" });
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
        this.verifyAuth();
      },
      completedSignUp: function () {
        this.loadLogIn();
      },
      logOut: function () {
        localStorage.clear();
        alert("Sesión Cerrada");
        // this.verifyAuth();
        this.$router.push({ name: "home" });
      },
    },
    created: function () {
      this.verifyAuth();
    },
  };
</script>

<style>
  .header_u {
    margin: auto;
    padding: 0;
    width: 100%;
    color: #003884;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #nav_u {
    width: 900px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    text-transform: uppercase;
    font-size: x-large;
  }

  #nav_u a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #95a4b8;
  }

  .boton1_u {
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
</style>