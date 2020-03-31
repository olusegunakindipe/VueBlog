<template>
    <div class="container">
       <p class="title"> {{title}} </p> 
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-" v-for="(info,index) in infos" :key="index">
               <img :src="info.image">
               <br>
               <p class="text-center" id="imgTitle" @click="details(info.id)" :infos="infos"><a style="color:blue">{{info.ImageTitle}}</a></p>
            </div>
        </div>

    </div>
</template>

<script>
   export default{
       data(){
           return {
               title: 'Home',
               infos: this.$store.state.infos
           }
       },
       methods:{
           details(infoID){
               this.$router.push({name:'details', params: {id: infoID}})
           }
       }
   }
</script>

<style scoped>
  .title{
      text-align:center;
      background-color: black;
      color: white 
  }
  img{
      height: 300px;
      width: 300px;
      margin: 10px 50px
  }
  #imgTitle{
      cursor:pointer;
  }

</style>
