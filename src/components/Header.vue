<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/"><a>Fergie's Blog</a> </router-link>
            <router-link tag="button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </router-link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" to="/"  active-class="active" exact><a>Home</a></router-link>
                    <router-link class="nav-item nav-link" to="/blog" active-class="active"><a>Blog</a></router-link>
                    <router-link class="nav-item nav-link" to="/services" active-class="active"><a>Services</a></router-link>
                    <router-link class="nav-item nav-link" to="/contact" active-class="active"><a>Contact</a></router-link>
                    <form class="form-inline">
                        <input class="form-control ml-20" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
form{
    margin-left: 500px;
}
.navbar{
   margin: 2px; 
}
router-link{
    cursor: pointer;
} 

</style>
