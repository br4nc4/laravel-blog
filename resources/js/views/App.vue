<template>
    <div>
        <!-- navbar -->
        <TheNavbar></TheNavbar>

        <!-- contenuto di ogni pagina -->
        <router-view></router-view>
        

        <!-- footer -->
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';

    export default {
    components: { TheNavbar, TheFooter, Home, Contact, About },
    data() {
        
    }
}
</script>