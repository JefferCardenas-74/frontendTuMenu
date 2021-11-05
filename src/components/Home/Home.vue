<template>

    <div class="sliders">
        <Sliders/>
    </div>
    <h1></h1>
    <div class="inicio">
    <h1></h1>
    <h1></h1>
      <h1 class="titulo-inicio">Tumenú.com es una plataforma creada para fomentar la inclusión e incursión de los avances tecnológicos en los restaurantes en la que, a través de la generación de un espacio web, que permite mostrar un menú personalizado, de forma rápida y eficiente.</h1>
        <h1></h1>
    </div>

    <section class="contenido1">
        <div class="conten1">
            <h2 class="titulo-borde">
                Obtén la mejor experiencia para tus comensales.
            </h2>
            <p class="parrafo">
                Crea tu menú en un sitio web, y transforma tu negocio permitiendo que más personas puedan acceder a los productos de tu restaurante, sin importar la situación o la época del año. En TuMenú.com obtendrás el mejor servicio.
            </p>
        </div>
        <figure class="imagencont1">
            <img src="../../assets/Home/inicio1.png" class="img12">
        </figure>
    </section>
    <section class="contenido1">
        <figure class="imagencont1">
            <img src="../../assets/Home/inicio2.png" class="img12">
        </figure>
        <div class="conten1">
            <h2 class="titulo-borde">
                Implementa el botón de pedido y vende desde cualquier sitio web.
            </h2>
            <p class="parrafo">
            Optimiza el sistema de solicitud y entrega de pedidos, para aumentar tus ventas, con un solo clic. Tus comensales podrán elegir y solicitar la comida con anticipación.
            </p>
        </div>

    </section>
    <section class="contenido1">
        <div class="conten1">
            <h2 class=" titulo-borde">
                ¡Quiero mi menú!
            </h2>
            <dl class="parrafo">
                <dt>1. Registra tu restaurante y diligencia el formulario.</dt>
                <dt>2. Registra las sedes y horarios.</dt>
                <dt>3. Establece métodos de pago.</dt>
            </dl>
        </div>
        <figure class="imagencont1">
            <img src="../../assets/Home/inicio3.png" class="img12">
        </figure>
    </section>
    <section class="contenido1">
        <figure class="imagencont1">
            <img src="../../assets/Home/inicio4.png" class="img12">
        </figure>
        <div class="conten1">
            <h2 class="titulo-borde">
                ¿Cómo crear tu menú en un sitio web y estar a un solo clic de aumentar tus ventas?
            </h2>
            <dl class="parrafo">
                <dt>1. Organiza el menú con los platos y bebidas que tienes disponibles.</dt>
                <dt>2. Selecciona las categorías y adiciones/opcionales que caracterizan tu menú.</dt>
                <dt>3. Crea cada producto con su imagen y descripción.</dt>
                <dt>4. Con el menú creado, ya puedes obtener la dirección del sitio web con tu menú.</dt>
            </dl>
        </div>

    </section>
    

</template>

<script>
import Sliders from './Sliders.vue'
export default {
  name: "Home",
  
  data: function () {
    return {
      is_auth: false,
    };
  },

  mounted(){
      window.location.reload();
  },
  components: {
    Sliders,
  },
  methods: {
  },
};
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.contenido1{
    margin: auto;
    font-family: 'Inter', sans-serif;
    width: 900px;
    height: 400px;
    line-height: 3.5;
    display: flex;
    grid-template-columns: 5fr 4fr;
    place-items: center;
}
.conten1{
    margin: auto;
   
    display: flex;
    flex-direction: column;
    width: 60%;
}
.titulo-inicio{
    font-family: 'Inter', sans-serif;
    width: 90%;
    margin: auto;
    display: flex;
    line-height: 1.5;
    font-weight: 500;
    font-size: x-large;
    text-align:justify;
}
.titulo-borde{
    margin: auto;
    line-height: 1.5;
    font-weight: 500;
    font-size: x-large;
    text-align:justify;
    color:darkcyan;
}
.parrafo{
    margin: auto;
    margin: 20px 0;
    line-height: 1.5;
    font-weight: 500;
    font-size:large;
    text-align:justify;
}
.imagencont1{
    margin: auto;
    width: 50%;
    display: flex;
    text-align: center;
}
.img12{
    margin: auto;
    display: flex;
    width: 300px;
}
.sliders{
    margin: auto;
    width:1000px;
    display: flex;
}
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");

</style>