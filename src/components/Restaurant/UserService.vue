<template>
  <userHeader @logOut="logOut" />

  <div class="container_h">
    <div class="fila_h">
      <div class="mapa_h">
        <img src="../../assets/Home/mapa.png" alt="" />
      </div>
      <div class="direcciones_h">
        <p class="titulo-centro">Recoger:</p>
        <div v-for="x in agregar" :key="x">
          <img
            src="../../assets/Iconos/globe.png"
            class="redes"
            alt=""
            style="width: 20px"
          />
          <input type="text" placeholder="Dirección" class="Dirección_h" />
        </div>
        <button v-on:click="AgregarDireccion" class="boton1">
          Agregar Dirección
        </button>
        <p class="titulo_centro">
          Servicio a domicilio:
          <select name="Servivio a domicilio:">
            <option>Si</option>
            <option>No</option>
          </select>
        </p>
      </div>
    </div>
    <div class="fila_h">
      <div class="mapa_h">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23b3a6a6&ctz=America%2FBogota&showTitle=0&src=aThlMGhudjZxZHBjazBrZDU1Mm1mcWVhaWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4"
          style="border: solid 1px #777"
          width="550"
          height="450"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div class="cont_h">
        <p class="titulo-centro">Horarios:</p>
        <div class="horas_h">
          <div class="dias_h">
            <div>
              <label for="cbox2">Lunes</label>
              <label for="cbox2">Martes</label>
              <label for="cbox2">Miercoles</label>
              <label for="cbox2">Jueves</label>
              <label for="cbox2">Viernes</label>
              <label for="cbox2">Sabados</label>
              <label for="cbox2">Domingos</label>
              <label for="cbox2">Festivos</label>
            </div>
            <div>
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
              <input type="checkbox" id="cbox2" value="second_checkbox" />
            </div>
          </div>
          <div class="hora_h">
            <h3>Apertura</h3>
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
          </div>
          <div class="hora_h">
            <h3>Cierre</h3>
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
            <input type="time" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userHeader from "./UserHeader.vue";
export default {
  name: "service",
  data: function() {
    return {
      is_auth: false,
      Direccion: "",
      informacion: {
        Dia: "",
        HorarioApertura: "",
        horarioCierre: "",
      },
      agregar: 4,
    };
  },
  methods: {
    AgregarDireccion: function() {
      this.agregar++;
    },

    logOut: function() {
      localStorage.clear();
      alert("Sesión Cerrada");
      // this.verifyAuth();
      this.$router.push({ name: "home" });
    },
  },

  components: {
    userHeader,
  },
};
//     processHorarios: function () {
//       axios
//         .post("https://tumenu-be.herokuapp.com/user/", this.user, {
//           headers: {},
//         })
//         .then((result) => {
//           this.$router.push({ name: "registroExitoso" });
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("ERROR: Fallo en el registro.");
//         });
//     },
//   },
//   props: {
//     Dia: {
//       type: Varchar,
//     },
//     HorarioApertura: {
//       type: Time,
//     },
//     HorarioCierre: {
//       type: Time,
//     },
//   },
//   created: function () {
//     this.user.Dia = this.Dia;
//     this.user.HorarioApertura = this.HorarioApertura;
//     this.user.HorarioCierre = this.HorarioCierre;
//     this.user.informacion.Horarios_Servicios = this.Horarios_Servicios;
//   }
// }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");
.container_h {
  font-family: "Inter", sans-serif, #003384;
  height: 900px;
  width: 800px;
}
.fila_h {
  display: flex;
  height: 50vh;
  width: 100%;
  margin-right: 0%;
}

.mapa_h {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapa_h img {
  width: 300px;
}
.direcciones_h {
  margin: 4%;
  width: 60%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  justify-items: start;
  align-items: center;
}

.direcciones_h button {
  margin-top: 15px;
}
.direcciones_h p {
  margin-top: 30px;
}
.direcciones_h input {
  width: 400px;
  height: 30px;
}
iframe {
  height: 350px;
}

.semana_h {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: Center;
}

.hora_h {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
}
.cont_h {
  width: 700px;
  height: 350px;
  display: flex;
  justify-content: Center;
  flex-direction: column;
  align-items: center;
}
.cont_h div {
  margin: auto;
  width: 80%;
}
.cont_h div:nth-child(1) {
  margin: auto;
  width: 50%;
}
.horas_h {
  width: 60%;
  display: flex;
  align-items: center;
}
.hora_h h3 {
  margin: 5px;
}
.hora_h input {
  margin-bottom: 3px;
}
.dias_h {
  display: flex;
  margin-top: 3%;
}
.dias_h div input {
  margin-top: 14px;
  margin-right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.dias_h div label {
  margin-top: 9px;
  display: flex;
  flex-direction: column;
}
</style>
