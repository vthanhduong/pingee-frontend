<template>
    <div class="h-screen w-full max-h-screen flex">
        <div class="h-full overflow-auto flex flex-col items-center border-e border-gray-300 max-w-1/6">
            <h1 class="text-3xl font-bold px-6 my-3 py-2 bg-purple-300 rounded-2xl text-purple-500">nytx pingee</h1>
            <div 
                v-for="item in listItems"
                class="h-12 w-full flex items-center hover:bg-gray-200 cursor-pointer ps-6 select-none"
                :class="{'border-e-2 font-semibold text-black' : (selected === item.label || selected === item.route), 'text-gray-500': !(selected === item.label || selected === item.route)}"
                @click="handleClick(item.label, item.route || '')">
                <span>
                    <i :class="item.icon"></i>
                    {{ item.label }}
                </span>
                <Badge v-if="item.badge_value" :value="item.badge_value" class="ml-auto me-3" severity="danger"></Badge>
            </div>
           
            <div class="mt-auto flex flex-col w-full">
                <div class="h-12 w-full flex items-center text-start cursor-pointer ps-2 gap-x-2 select-none" @click="visible = !visible">
                    <Avatar shape="circle" label="D"></Avatar>
                    <span class="truncate ...">Duong Vu Thanh</span>
                </div>
                <div class="w-full flex items-center text-center ps-6 gap-x-2 px-2 text-xs py-2 text-gray-400">
                    <span>© 2025 Nytx Pingee | All Rights Reserved</span>
                </div>
            </div>
        </div>
        <div class="w-full h-full p-1">
            <div class="w-full h-full rounded border border-gray-200 py-1">
                <router-view/>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="visible">
        <p>Profile</p>
    </Drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const visible = ref(false);
const selected = ref("Home");
const route = useRoute();
watch(
    () => route.name, 
    (newPath) => {
        selected.value = newPath?.toString() || '/';
    },
    {
        immediate: true
    }
);
const listItems = [
    {
        label: "Home",
        icon: "pi pi-home",
        route: "/"
    },
    {
        label: "Message",
        icon: "pi pi-comments",
        badge_value: 8,
        route: "message"
    },
    {
        label: "Friends",
        icon: "pi pi-address-book",
        badge_value: 12,
        route: "friends"
    },
    {
        label: "Groups",
        icon: "pi pi-users",
        route: "groups"
    },
    {
        label: "Notifications",
        icon: "pi pi-bell",
        badge_value: 289
    }
]
const handleClick = (val: string, route: string) => {
    selected.value = val;
    router.push(route);
}
</script>

<style scoped>

</style>