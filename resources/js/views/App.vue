<template>
    <div>
        <!-- navbar -->
        <TheNavbar></TheNavbar>

        <main class="pb-5">
            <PageHeader></PageHeader>
            <!-- contenuto di ogni pagina -->
            <router-view></router-view>
        </main>

        <!-- footer -->
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
/* import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue'; */
import PageHeader from '../components/PageHeader.vue';

    export default {
    components: { TheNavbar, TheFooter, PageHeader },
}
</script>