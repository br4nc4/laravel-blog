//deve comunicare a vue che vogliamo usare questa libreria
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import PageNotFound from "./pages/PageNotFound.vue";

Vue.use(VueRouter)

// dobbiamo creare un array con le rotte
const routes = [
    /* 
        path è uguale all'URI da scrivere nella barra degli indirizzi
        component è il componente da mostrare quando la pagina viene visualizzata
    */
    {path: "/", component: Home, name:"home.index",
    meta: {
        title:"Clean Blog",
        subtitle: "Here you can find our post examples",
        bgImage: "home-bg.jpg"
    }},
    {path: "/about", component: About, name:"about.index",
    meta: {
        title:"About Us",
        subtitle: "A story that begins with us",
        bgImage: "about-bg.jpg"
    }},
    {path: "/contact", component: Contact, name:"contact.index",
    meta: {
        title:"Contact Us",
        subtitle: "Write us a message to tell us what you think about our theme!",
        bgImage: "contact-bg.jpg"
    }},
    {path: "*", component: PageNotFound},
]

//dobbiamo esportare un istanza di VueRouter() con le eventuali configurazioni
export default new VueRouter({
    //routes è un array di oggetti che rappresenta la configurazione di ogni rotta
    routes,
    mode: "history",
}) 