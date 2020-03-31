<template>
    <div class="details">
        <div class="container">
            <p class="text-center title">{{title}}</p>
            <div class='row'>
                <div class="col-md-12" v-for="(info, index) in infos" :key="index">
                    <div v-if="infoID == info.id">
                        <h3 class="text-center">{{info.ImageTitle}}</h3>
                        <img :src="info.image">
                        <p class="text-center">{{info.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return{
            infoID : this.$route.params.id,
            title : 'Details',
            infos : this.$store.state.infos
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
      height: 500px;
      width: 60%;
      margin: 20px 250px
  }

</style>
