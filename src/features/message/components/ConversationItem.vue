<template>
    <div class="flex items-center gap-x-2 select-none hover:bg-gray-200 py-3 px-2 cursor-pointer" :class="{'bg-gray-100': time === 'now'}">
        <Avatar shape="circle" size="large" :image="avatar_url || 'https://picsum.photos/200'"></Avatar>
        <div class="flex flex-col flex-1 min-w-0">
            <span :class="{'font-semibold': !is_read}" class="truncate">{{ name || 'unknown' }}</span>
            <span :class="{'font-semibold': !is_read}" class="text-sm truncate"><span class="text-xs text-gray-500">{{ time }} </span> <span v-if="last_from_user === true">You: </span>{{ content || 'unknown' }}</span>
        </div>
        <Badge v-if="!is_read" class="ml-auto me-3" severity="danger"></Badge>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    avatar_url?: string,
    name?: string,
    content?: string,
    is_read?: boolean,
    last_from_user?: boolean,
    time?: string
}>()
</script>

<style scoped>

</style>