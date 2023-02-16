import { createWebHistory, createRouter } from "vue-router";
import Menu from "../views/MenuPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/menu', component: Menu}
    ]
})