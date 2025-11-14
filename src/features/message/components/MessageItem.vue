<template>
    <div @mouseenter="hovering = true" @mouseleave="hovering = false" class="flex flex-col" :class="{'my-1': hasPrev === false}">
        <span v-if="replying_to" class="text-gray-600 text-sm mb-1" :class="{ 'ms-10': from !== 'self', 'me-10 text-end': from === 'self'}">
            <i class="pi pi-reply transform -scale-x-100" style="font-size: 0.8rem;"></i>
            {{ from === 'self' ? ' You replied to Lê Hùng' : ' Lê Hùng replied to you' }}
        </span>
        <div class="flex gap-x-2" :class="{'flex-row-reverse': from === 'self'}">
            
            <Avatar class="shrink-0" :class="{'invisible': hasPrev}" v-if="from !== 'self'" shape="circle" size="normal" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI7UjGF4jTQTefVQXQeHzuNldO6CUZ9OSIw&s"></Avatar>
            <Avatar class="shrink-0" :class="{'invisible': hasPrev}" v-if="from === 'self'" shape="circle" size="normal" label="D"></Avatar>
            <div v-if="type === 'text'" class="rounded-xl h-fit w-fit p-2 flex flex-col select-text" :class="{'bg-amber-300': from !== 'self', 'bg-purple-400': from === 'self'}">
                <div v-if="replying_to" class="w-full px-2 py-1 h-8 opacity-40 bg-white rounded-lg select-none cursor-pointer">
                    <span>{{ replying_to_message_content }}</span>
                </div>
                <span>{{ content }}</span>
            </div>
            <div v-if="type === 'image'" class="cursor-pointer md:max-w[75%] lg:max-w-[50%] xl:max-w-[35%] rounded-xl">
                <Image :src="images && images[0]" preview pt:image:class="object-cover rounded-xl">
                </Image>
            </div>
            <div :class="{ 'invisible': !hovering}" class="flex items-center justify-center gap-x-2">
                <Button icon="pi pi-face-smile" severity="secondary" size="small" rounded></Button>
                <Button icon="pi pi-reply" severity="secondary" size="small" rounded></Button>
                <Button icon="pi pi-ellipsis-h" severity="secondary" size="small" rounded></Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    id?: string,
    replying_to?: string,
    replying_to_message_content?: string,
    from?: string,
    type?: string,
    content?: string,
    images?: string[],
    hasPrev?: boolean
}>();
const hovering = ref(false);
</script>

<style scoped>

</style>