<template>
    <div class="container px-4">
        <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">

                    <div v-for="post in posts" :key="post.id">
                        <!-- Post preview-->
                        <div class="post-preview">
                            <a href="post.html">
                                <h2 class="post-title">{{post.title}}</h2>
                                <h3 class="post-subtitle">{{truncateText(post.content)}}</h3>
                            </a>
                            <p class="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on {{post.created_at}}
                            </p>
                        </div>

                        <!-- Divider-->
                        <hr class="my-4">
                    </div>
                    
                    <!-- Pager-->
                    <div class="d-flex justify-content-end mb-4" v-if="paginationData.current_page < paginationData.last_page">
                        <button class="btn btn-primary text-uppercase" @click="loadMoreData">Older Posts →</button>
                    </div>
                </div>
            </div>
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
                axios.get("/api/posts?page=" + page)
                .then((resp) => {
                    //il primo punto data restituisce i dati del server
                    //il secondo punto data restituisce la lista dei post (procedura di impaginazione) 
                    this.posts.push(...resp.data.data)
                    this.paginationData = resp.data
                })
            },
            loadMoreData() {
                const currentPage = this.paginationData.current_page

                this.fetchData(currentPage + 1)
            },  
            truncateText(text, limit=100) {
                return text.substring(0, limit) + '...'
            }
        },
        mounted() {
            this.fetchData()
        }
    }
</script>

<style lang="scss">
    .post-preview {
      a {
        color: black;
      }
      >a {
        text-decoration: none;
      }
      .post-title {
        font-size: 2.25rem;
        margin-top: 1.875rem;
        margin-bottom: 0.625rem;
        font-weight: bolder;
      }
      .post-subtitle {
        font-weight: 300;
        margin-bottom: 0.625rem;
      }
    }
    </style>