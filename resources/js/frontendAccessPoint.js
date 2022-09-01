import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";

new Vue({
    el:"#app",
    render: (renderComponent) => renderComponent(App),
    //router è una chiave che ha come valore un istanza di VueRouter()
    router
})