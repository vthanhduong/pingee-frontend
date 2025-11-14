<template>
    <div class="w-2/12 h-full flex flex-col">
        <div class="flex items-center">
            <Button size="small" variant="text" severity="contrast" icon="pi pi-align-justify" rounded></Button>
            <div class="flex gap-x-2 ml-auto me-3">
                <Button size="small" variant="outlined" icon="pi pi-phone" rounded></Button>
                <Button size="small" variant="outlined" icon="pi pi-pen-to-square" rounded></Button>
            </div>
        </div>
        <div class="w-full p-2">
            <IconField>
                <InputIcon class="pi pi-search"></InputIcon>
                <InputText size="small" placeholder="search" class="w-full"></InputText>
            </IconField>
        </div>
        <div class="w-full h-full overflow-auto pt-3">
            <ConversationItem
                v-for="con in conversations"
                :avatar_url="con.avatar_url"
                :content="con.content"
                :is_read="con.is_read"
                :time="con.time"
                :name="con.name"
                :last_from_user="con.last_from_user"
            >
            </ConversationItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import ConversationItem from './ConversationItem.vue';

    const conversations = [
        {
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI7UjGF4jTQTefVQXQeHzuNldO6CUZ9OSIw&s',
            name: 'Lê Hùng',
            content: 'ok',
            last_from_user: true,
            is_read: true,
            time: 'now'
        },
        {
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x-iRmQsKgZ1RnsqikgUkaGkqKl_H2sLGdQ&s',
            name: 'babi cụa a ❤',
            content: 'em biết rùi!!!',
            last_from_user: false,
            is_read: false,
            time: '1m'
        },
        {
            avatar_url: 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=400%2Cq=85%2Cw=400/wp-content/uploads/faker.png',
            name: 'phếch cơ',
            content: 'Anh cho em mượn ít tiền được ko?',
            last_from_user: false,
            is_read: false,
            time: '36m'
        }
    ]
</script>

<style scoped>

</style>