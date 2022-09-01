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
    {path: "/", component: Home, name:"home.index"},
    {path: "/about", component: About, name:"about.index"},
    {path: "/contact", component: Contact, name:"contact.index"},
    {path: "*", component: PageNotFound},
]

//dobbiamo esportare un istanza di VueRouter() con le eventuali configurazioni
export default new VueRouter({
    //routes è un array di oggetti che rappresenta la configurazione di ogni rotta
    routes,
    mode: "history",
}) 