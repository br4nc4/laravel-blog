<template>
    <div class="container px-4">
        <h2>{{post.title}}</h2>
        <div class="mb-4" v-html="post.content"></div>

        <div class="d-flex">
            <h4 class="me-3">Categories: </h4>
            <h4>Tags: </h4>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data(){
            return {
                post: {}
            }
        },
        methods: {
            fetchData() {
                axios.get("/api/posts/" + this.$route.params.post_slug)
                .then((resp) => {
                    this.post = resp.data
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>