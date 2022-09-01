<template>
        <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .masthead{
        padding-top: 12.5rem;
        padding-bottom: 12.5rem;
        position: relative;
        margin-bottom: 3rem;
        /* padding-top: calc(8rem + 57px);
        padding-bottom: 8rem; */
        background: no-repeat center center;
        background-color: #6c757d;
        background-size: cover;
        background-attachment: scroll;

        .site-heading{
            text-align: center;
            color: white;

            h1{
                font-size: 5rem;
                font-weight: bold;
            }

            .subheading{
                font-size: 1.5rem;
            }

        }
    }
</style>