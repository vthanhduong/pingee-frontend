import type { RouteRecordRaw } from "vue-router";

const SignUp = () => import("../pages/SignUp.vue");
const SignIn = () => import("../pages/SignIn.vue");
const ForgotPassword = () => import("../pages/ForgotPassword.vue");

export const authRoutes: RouteRecordRaw[] = [
    {
        path: "sign-in",
        component: SignIn,
    },
    {
        path: "sign-up",
        component: SignUp,
    },
    {
        path: "forgot-password",
        component: ForgotPassword
    }
]