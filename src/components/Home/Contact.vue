<template>
<div class="contactenos_titulo">
  <h1>Nos gustaría mucho saber de ti</h1>
  <h2>Si tienes pregutas y/o comentarios puedes escribirnos</h2>
</div>
<div>
    <form class="forma">
        <p class="forma_title">Nombre:</p>
        <input type="text" class="fielda"> <br/>

        <p class="forma_title"> Correo electrónico:</p>
        <input type="text" class="fielda"> <br/>

        <p class="forma_title">Asunto:</p>
        <input type="text" class="fielda"> <br/>

        <p class="forma_title">Mensaje:</p>
        <textarea class="fieldma"></textarea> <br/>

        <p class="center-content">
            <input type="submit" class="boton13" value="Enviar Mensaje">
        </p>
    </form>
</div>
</template>

<script>

export default {
  name: "Contact",
  components: {
  },
  methods: {
  },
};
</script>

<style>
.contactenos_titulo{
  margin: 10%;
}
.forma{
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  color: #003384;
  font-size: 0.8em;
  padding: 15px;
  margin: 0 auto;
  width: 600px;
}
.forma_title{
    margin:20px;
    font-size: x-large;
    text-align:center;
}
.fielda{
  border: solid 1px #ccc;
  padding: 10px;
  width: 480px;
}
.fieldma{
  border: solid 1px #ccc;
  padding: 10px;
  width: 480px;
  height: 90px;
}
.field:focus, .fieldm:focus{
  border-color: #5653ff;
}
.center-content{
  text-align: center;
}
.boton13 {
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