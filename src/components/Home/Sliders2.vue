<template>
  <div class="sliders2">
      <button @click="prev" type="button" class="btn2 btn-left2">
        <img src="../../assets/chevron-left.svg" class="icone2">
      </button>
        <div class="container-slides2" :style="{transform:`translateX(${index}px)`, transition:`${transition}`}">
          <img src="../../assets/Sliders2/2.png" class="img-slider2">
          <img src="../../assets/Sliders2/3.png" class="img-slider2">
          <img src="../../assets/Sliders2/4.png" class="img-slider2">
          <img src="../../assets/Sliders2/5.png" class="img-slider2">
        </div>
      <button @click="next" type="button" class="btn2 btn-right2">
        <img src="../../assets/chevron-right.svg" class="icone2">
      </button>
  </div>
</template>

<script>
export default{
  name:'Sliders2',
  data: function(){
    return{
      index: 0,
      transition: "transform 0.5s ease"
    }
  },
  methods:{
    next(){
      console.log(this.index)
      if(this.index === -1500){
        this.transition= "none";
        this.index = 0;
      }else{
        this.transition= "transform 0.5s ease";
        this.index -=900;
      }
    },
    prev(){
      if(this.index === 0){
        this.transition= "none";
        this.index = -900;
      }else{
        this.transition= "transform 0.5s ease";
        this.index +=900;
      }
    }
  }
}
</script>

<style scoped>
  .sliders2{
    margin:auto;
    width: 900px;
    height: 340px;
    /*background: #000;*/
    overflow: hidden;
    position: relative;
  }
  .container-slides2{
    margin: auto;
    display: flex;
  }
  .img-slider2{
    margin: auto;
    height: auto;
  }
  .btn2{
    outline: none;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    position: absolute;
    z-index: 900;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icone2{
    width: 15px;
  }
  .btn-left2{
    top: 45%;
    left: 5px;
    transform: translate(-50%);
  }
  .btn-right2{
    top: 45%;
    right: 5px;
    transform: translate(50%);
  }

</style>
