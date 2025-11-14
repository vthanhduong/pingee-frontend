import type { RouteRecordRaw } from "vue-router";
const MessagePage = () => import('../pages/MessagePage.vue');

export const messageRoutes: RouteRecordRaw[] = [
    {
        path: 'message',
        name: 'message',
        component: MessagePage
    }
]