<template>
    <div class="sliders2">
        <Sliders2/>
    </div>
    <h2></h2>

    <table class="tabla1">
        <tr style="height:100px">
            <td colspan="3" class="titulo_columna">RESTAURANTES</td>
            <td style="width:40px"></td>
            <td colspan="3" class="titulo_columna">COMENSALES</td>
        </tr>

        <tr style="height:50px">
            <td class="nombre">Oscar</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="nombre">Bibiana</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td colspan="2">Hace poco abrí mi restaurante y adquirir los servicios de las plataformas de pedidos tradicionales resultan muy caros, así que Tumenú.com es una muy buena alternativa. </td>
            <td>
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/CH1.jpeg" class="img">
                </figure>
            </td>
            <td></td>
            <td colspan="2">Puedo armar mi menú, con los cambios y las adiciones que quiera, es casi como estar en el restaurante.</td>
            <td ALIGN="right">
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/PM2.jpeg" class="img">
                </figure>
            </td>
        </tr>

        <tr style="height:50px">
            <td></td>
            <td class="nombre">Andrea</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="nombre">Samuel</td>
            <td></td>
        </tr>

        <tr>
            <td style="width:100px">
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/CM1.jpeg" class="img">
                </figure>
            </td>
            <td colspan="2">En los meses de cuarenta, el volumen de domicilios creció bastante y fue muy complicado adaptarse a esa nueva situación. El uso de Tumenú.com facilita las cosas para nosotros y nuestros clientes.</td>
            <td></td>
            <td >
                <figure class="imagencont122">
                    <img src="../../assets/Comentarios/PH1.jpeg" class="img">
                </figure>
            </td>
            <td colspan="2" >He notado que los precios son iguales en mis domicilios y cuando voy a comer al lugar. El recargo sólo se hace en el trayecto del domiciliario. Es genial! </td>
        </tr>

        <tr style="height:50px">
            <td class="nombre">Pedro</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="nombre">Melissa</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td colspan="2">Si hay algo bueno en Tumenú.com es la gestión social de fondo, ponemos precios reales y justos para nuestros clientes, ganamos todos. </td>
            <td>
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/CH2.jpeg" class="img">
                </figure>
            </td>
            <td></td>
            <td colspan="2">Es muy fácil hacer mis pedidos desde Tumenú.com, voy a mi restaurante favorito y armo mi pedido. ¡Me encanta!</td>
            <td ALIGN="right">
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/PM4.jpeg" class="img">
                </figure>
            </td>
        </tr>
        
        <tr style="height:50px">
            <td></td>
            <td class="nombre">Juliana</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="nombre">Jorge</td>
            <td></td>
            
        </tr>

        <tr>
            <td>
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/CM2.jpeg" class="img">
                </figure>
            </td>
            <td colspan="2">He visto los beneficios al usar Tumenú.com, puedo actualizar mi carta de servicios sin complicaciones en el proceso.</td>
            <td></td>
            <td>
                <figure class="imagencont12">
                    <img src="../../assets/Comentarios/PH3.jpeg" class="img">
                </figure>
            </td>
            <td  colspan="2">Me gusta tener el acceso a la carta completa de los restaurantes y no solo a los combos que se promocionan con otras aplicaciones, hay un mayor compromiso con el usuario.</td>
        </tr>
    </table>

    <h2></h2>
    <div class="registro_restaurante"> 
        <h1>Registra tu restaurante</h1>
        <button class="boton1">
            INICAR SESIÓN
        </button>
    </div>
    <h2></h2>
    <div class="registro_restaurante">  
        <h1>Si ya eres cliente, ingresa a tu sitio</h1>
        <button class="boton1">
            REGISTRARSE
        </button>      
    </div>
    <h2></h2>
</template>

<script>
import Sliders2 from './Sliders2.vue'
export default {
  name: "Restaurants",
  components: {
    Sliders2,
  },
  metdods: {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;500&display=swap");

.comentarios{
    font-family: 'Inter', sans-serif;
    width: 90%;
    margin: auto;
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content:space-evenly;
    flex-direction:row;
}
.tabla1{
    font-family: 'Inter', sans-serif;
    width: 900px;
    font-size:12pt;
    text-align:justify;
}
.titulo_columna{
    font-size:20pt;
    text-align:center;
}
.nombre{
    font-size:16pt;
}
.imagencont12{
    margin: 0;
    width: 100px;
    display: flex;
    text-align: center;
}
.img{
    margin: 0;
    display: flex;
    width: 100px;
}
.registro_restaurante{
    width: 880px;
    height: 320px;
    margin: auto;
    padding: 10px;
    display: flex;
    background: #c3d5ee;
    align-items: center;
    justify-content:center;
    flex-direction: column;
}
</style>
