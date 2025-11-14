import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import HomeLayout from "../layouts/HomeLayout.vue";
import { authRoutes } from "../features/auth/routes/auth.route";
import { messageRoutes } from "../features/message/routes/message.route";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeLayout,
            children: [
                ...messageRoutes
            ]
        },
        {
            path: "/authentication",
            component: AuthLayout,
            children: [
                ...authRoutes,
            ]
        }
    ]
})