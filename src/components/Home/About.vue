<template>

    <div class="nosotros_titulo">
    <h1> ¡Obtén el mejor sitio web para el menú de tu restaurante!</h1>
    </div>

    <section class="contenido2">
        <div class="conten2">
            <h2 class="titulo-centro">
                TUMENU.COM
            </h2>
            <p class="parrafo21">
            Tumenú.com es una plataforma creada para fomentar la inclusión e incursión de los avances tecnológicos en los restaurantes en la que, a través de la generación de un espacio web, que permite mostrar un menú personalizado, de forma rápida y eficiente, se logra sacar el mayor provecho a los restaurantes. Estamos disponibles para que empieces a crear tu menú, ¡ya mismo! Rápido y sencillo. 
            </p>
            <p class="parrafo21">
            Creada a partir del 2021, por un equipo de emprendedores que quisieron poner en marcha la idea de implementar la tecnología en los restaurantes, mejorando así la forma en la que los productos son ofrecidos al consumidor y generando mayor eficiencia al restaurante, permitiéndoles incrementar su productividad, al mismo tiempo que se le brinda una mejor experiencia al cliente y se cuida al medio ambiente.
            </p>
        </div>
    </section>
    <section class="contenido2">
        <figure class="imagencont2">
            <img src="../../assets/Home/inicio2.png" class="img3">
        </figure>
        <div class="conten3">
            <h2 class="titulo-borde1">
                Misión
            </h2>
            <p class="parrafo2">
            Queremos rediseñar la forma en la que los clientes ven a los restaurantes, facilitando el acceso  a la información acerca de los productos ofrecidos en los menús y las formas de preparación que hacen de cada visita a un restaurante, una experiencia única. Por ello, diseñamos una plataforma productiva, intuitiva, sencilla y eficiente en procura de lograr crecimiento empresarial, bienestar social y beneficio común.
            </p>
        </div>

    </section>
    <section class="contenido2">
        <div class="conten3">
            <h2 class=" titulo-borde1">
                Visión
            </h2>
            <p class="parrafo2">
            Ser una plataforma reconocida a nivel nacional e internacional, por su enfoque estratégico, dirigido a mejorar el nivel experiencial del comensal y generar mayor productividad a los restaurantes partiendo del diseño y difusión de las cartas de comidas, con miras a alcanzar el desarrollo de una herramienta que facilite las funciones contables y administrativas de los restaurantes a futuro.
            </p>
        </div>
        <figure class="imagencont2">
            <img src="../../assets/Home/inicio3.png" class="img3">
        </figure>
    </section>

</template>

<script>
export default {
  name: "About",
  
  data: function () {
    return {
      is_auth: false,
    };
  },
  components: {
  },
  methods: {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.nosotros_titulo{
  margin: 10%;
}
.contenido2{
    width: 900px;
    height: 600px;
    font-family: 'Inter', sans-serif;
    display: flex;
    grid-template-columns: 5fr 4fr;
    place-items: center;
    margin: auto;
}
.conten2{
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 900px;
}
.conten3{
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 450px;
}
.titulo-centro{
    margin: 20px 0;
    line-height: 1.5;
    font-weight: 500;
    font-size: xx-large;
    text-align:center;
}
.titulo-borde1{
    margin: auto;
    line-height: 1.5;
    font-weight: 500;
    font-size: xx-large;
    text-align:justify;
    color:darkcyan;
}
.parrafo2{
    margin:auto;
    width: 450px;
    line-height: 1.5;
    font-weight: 500;
    font-size: x-large;
    text-align:justify;
}
.parrafo21{
    margin:auto;
    width: 900px;
    line-height: 1.5;
    font-weight: 500;
    font-size: x-large;
    text-align:justify;
}
.imagencont2{
    display: flex;
    text-align: center;
}
.img3{
    display: flex;
    width: 90%;
    align-items:flex-end;
}
.sliders2{
    margin: auto;
    width:1000px;
    display: flex;
}
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");

</style>
