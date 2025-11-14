import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user
    },
    actions: {
        setUser(user: any) {
            this.user = user;
        },
        logout() {
            this.user = null;
        }
    }
})