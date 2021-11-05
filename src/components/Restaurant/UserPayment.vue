<template>
    
    <userHeader @logOut="logOut"/>

    <div class="container_p">
        <div class="titulo_p">
        <h1>Metodos de pago</h1>
        <p>Puede realizar el pago de sus productos en efectivo (contraentrega) o mediante transferencia bancaria al numero de cuenta: xxxxxxxxxxx de ahorro a la mano/Bancolombia y enviar su desprendible de pago al numero de WhatsApp que se muestra a continuación: xxxxxxxxxx.</p>
        <div>
            <p>
          Método de pago:
          <select name="Servivio a domicilio:">
            <option>Efectivo</option>
            <option>Transferencia bancaria</option>
          </select>
        </p>
        </div>
        <div class="botones_p">
            <button class="boton1">Guardar</button>
            <button class="boton1">Cancelar</button>
        </div>
        </div>
    </div>
</template>

<script>
import userHeader from "./UserHeader.vue"
export default {
    components:{
        userHeader
    },

    methods:{
        logOut: function () {
            localStorage.clear();
            alert("Sesión Cerrada");
            // this.verifyAuth();
            this.$router.push({ name: "home" });
        },
    }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;500&display=swap");
.container_p{
    font-family: 'Inter', sans-serif;
    height: 350px;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.titulo_p{
    text-align:justify;
    width:800px;
}
.titulo_p h1{
    text-align:justify;
    margin: auto;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.titulo_p p{
    text-align: justify;
}
.botones_p{
    width: 100%;
    height: 10%;
    margin-top: 2%;
    display: flex;
    justify-content: space-evenly;
}
.Logo{
    width: 400px;
}


</style>