<template>
    <div class="container">
        <p class="title"> {{title}} </p> 
        <br><br>
        <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-6" v-for="blog in blogs">
                <div class="card">
                    <div class="card card-header text-center"> <h2>{{blog.heading}}</h2></div>
                    <div class= "card card-body">
                        <h6>{{blog.body}}</h6>
                    </div>
                    <div class="card card-footer">
                    <a :href="blog.web" class="text-center"> {{blog.web}}</a> 
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</template>

<script>
    

export default {
    data(){
        return {
            title: 'Blog',
            blogs: [
                {
                    heading : 'Vue Js',
                    body : 'This blog is about Vue Js. I used Vue Js framework to develop this website, More can be founf on my github page',
                    web: "http://www.vueJs.org"
                },
                {
                    heading : 'Laravel',
                    body : 'This blog is also about Laravel. I developed some lovely website and it can be found on my git page, please visit',
                    web: "http://www.Laravel.com"
                },
                {
                    heading : 'PHP',
                    body : 'This blog is also about PHP. I used PHP to develop some of my websites and it can be found on my git page',
                    web: "http://www.Php.com"
                }
            ]
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
</style>
