<template>
    <div class="container">
        pagina home
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data(){
            return {
                posts: [],
                paginationData: {}
            }
        },
        methods: {
            fetchData(page = 1) {
                axios.get("api/posts")
                .then((resp) => {
                    //il primo punto data restituisce i dati del server
                    //il secondo punto data restituisce la lista dei post (procedura di impaginazione) 
                    this.posts = resp.data.data
                    this.paginationData = resp.data
                })
            }
        },
        mounted() {
            this.fetchData()
        }
    }
</script>