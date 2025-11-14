<template>
    <div class="w-3/12 h-full flex flex-col pt-6 select-none">
        <div class="flex flex-col items-center gap-y-1">
            <Avatar shape="circle" size="xlarge" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI7UjGF4jTQTefVQXQeHzuNldO6CUZ9OSIw&s"></Avatar>
            <div class="flex flex-col text-center select-text">
                <span class="text-lg font-semibold">Lê Hùng</span>
                <span class="text-sm text-gray-400">@lehung3137</span>
            </div>
        </div>
        <div class="flex items-center gap-y-1 mt-6">
            <div class="flex flex-1 gap-x-6 justify-center">
                <div class="flex flex-col items-center text-center">
                    <Button rounded size="small" icon="pi pi-user" variant="outlined"></Button>
                    <span class="font-semibold">Profile</span>
                </div>
                <div class="flex flex-col items-center text-center">
                    <Button rounded size="small" icon="pi pi-bell-slash" variant="outlined"></Button>
                    <span class="font-semibold">Mute</span>
                </div>
                <div class="flex flex-col items-center text-center">
                    <Button rounded size="small" icon="pi pi-search" variant="outlined"></Button>
                    <span class="font-semibold">Search</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>