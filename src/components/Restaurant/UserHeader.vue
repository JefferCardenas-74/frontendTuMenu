<template>
  <div class="header_u">
    <div id="nav">
      <div class="botones_u">
        <button v-on:click="logOut" class="boton1_u">
          CERRAR SESIÓN
        </button>
      </div>
      <div>
        <h1 class="titulo-centro">SHAKE & CO</h1>
      </div>
      <div>
        <img
          class="Logo"
          src="../../assets/fotosrestaurantes/LogoShake.png"
          alt="logo_restaurante"
        />
      </div>
    </div>

    <div id="nav_u">
      <router-link to="/user/settings">CONFIGURACIÓN</router-link> |
      <router-link to="/user/service">SERVICIOS Y HORARIOS</router-link> |
      <router-link to="/user/payment">FORMAS DE PAGO</router-link>|
      <router-link to="/user/menu">MENÚ</router-link>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        logOut(){
            this.$emit("logOut");
        }
    }
    
}
</script>

