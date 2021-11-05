<template>
  <div class="sliders">
      <button @click="prev" type="button" class="btn btn-left">
        <img src="../../assets/chevron-left.svg" class="icone">
      </button>
        <div class="container-slides" :style="{transform:`translateX(${index}px)`, transition:`${transition}`}">
          <img src="../../assets/Slideinicio/slide1.png" class="img-slider">
          <img src="../../assets/Slideinicio/slide2.png" class="img-slider">
          <img src="../../assets/Slideinicio/slide3.png" class="img-slider">
        </div>
      <button @click="next" type="button" class="btn btn-right">
        <img src="../../assets/chevron-right.svg" class="icone">
      </button>
  </div>
</template>

<script>
export default{
  name:'Sliders',
  data: function(){
    return{
      index: 0,
      transition: "transform 0.2s ease"
    }
  },
  methods:{
    next(){
      console.log(this.index)
      if(this.index === -1500){
        this.transition= "none";
        this.index = 0;
      }else{
        this.transition= "transform 0.2s ease";
        this.index -=1000;
      }
    },
    prev(){
      if(this.index === 0){
        this.transition= "none";
        this.index = -1000;
      }else{
        this.transition= "transform 0.2s ease";
        this.index +=1000;
      }
    }
  }
}
</script>

<style scoped>
  .sliders{
    margin: auto;  
    width: 900px;
    height: 340px;
    /* background: #000;*/
    overflow: hidden;
    position: relative;
  }
  .container-slides{
    margin: auto;
    width: 1000px;
    display: flex;
  }
  .img-slider{
    margin: auto;
    width: 1000px;
    height: auto;
  }
  .btn{
    outline: none;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    position: absolute;
    z-index: 1000;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icone{
    width: 15px;
  }
  .btn-left{
    top: 45%;
    left: 5px;
    transform: translate(-50%);
  }
  .btn-right{
    top: 45%;
    right: 5px;
    transform: translate(50%);
  }

</style>
