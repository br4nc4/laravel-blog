<template>
    <div>
        <!-- navbar -->
        <TheNavbar></TheNavbar>

        <!-- contenuto di ogni pagina -->

        <!-- footer -->
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';

    export default {
    components: { TheNavbar, TheFooter }
}
</script>