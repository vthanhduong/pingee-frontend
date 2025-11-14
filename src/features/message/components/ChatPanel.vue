<template>
    <div class="w-7/12 h-full border-x border-gray-200 flex flex-col">
        <div class="flex items-center px-3 py-2 border-b border-gray-200 gap-x-3">
            <Avatar shape="circle" size="large" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI7UjGF4jTQTefVQXQeHzuNldO6CUZ9OSIw&s"></Avatar>
            <div class="flex flex-col">
                <span class="font-semibold">Lê Hùng</span>
                <span class="text-xs"><Badge severity="success"></Badge> Online now</span>
            </div>
            <div class="ml-auto">
                 <Button icon="pi pi-video" size="small" variant="text" rounded></Button>
                 <Button icon="pi pi-phone" size="small" variant="text" rounded></Button>
            </div>
        </div>
        <div class="flex flex-col px-2 bg-pink-100 flex-1 overflow-auto select-none">
            <MessageItem :id="'1'" :type="'text'" :from="'self'" :hasPrev="false" :content="'tao mệt quá mày ơi'"></MessageItem>
            <MessageItem :id="'2'" :type="'text'" :from="'ano'" :hasPrev="false" :content="'cái đéo má, mày mệt tao cũng mệt mà :(('"></MessageItem>
            <MessageItem :id="'3'" :type="'text'" :from="'ano'" :hasPrev="true" :content="'cả tuần nay đéo được ăn cái đầu buồi gì'"></MessageItem>
            <MessageItem :id="'4'" :type="'text'" :from="'self'" :hasPrev="false" :content="'vãi cả cặc, mày làm như bố mày ăn no lắm ấy, sáng gặm được mỗi ổ bánh mì xàm cặc'"></MessageItem>
            <MessageItem :id="'5'" :type="'image'" :from="'ano'" :hasPrev="false" :content="'img'" :images="['https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlc29sdXRpb258ZW58MHx8MHx8fDA%3D', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s']"></MessageItem>
            <MessageItem :id="'6'" :type="'image'" :from="'self'" :hasPrev="false" :content="'img'" :images="['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hhTzETCBuUg5fZ5ShDkejmAb9i8z_cqvNQ&s']"></MessageItem>
            <MessageItem :id="'7'" :type="'text'" :from="'self'" :hasPrev="true" :content="'ảnh đẹp ko'"></MessageItem>
            <MessageItem :id="'8'" :replying_to="'7'" :replying_to_message_content="'ảnh đẹp ko'" :type="'text'" :from="'ano'" :hasPrev="false" :content="'như cc'"></MessageItem>
            <MessageItem :id="'9'" :type="'text'" :from="'ano'" :hasPrev="true" :content="'test'"></MessageItem>
            <MessageItem :id="'10'" :type="'text'" :from="'self'" :hasPrev="false" :content="'test???'"></MessageItem>
            <MessageItem :id="'11'" :type="'text'" :from="'self'" :hasPrev="true" :content="'test cái đầu buồi j'"></MessageItem>
            <MessageItem :id="'12'" :type="'text'" :from="'ano'" :hasPrev="false" :content="'tớ đang sử dụng nytx pingee và ló thật tuyệt cú mều'"></MessageItem>
            <MessageItem :id="'13'" :type="'text'" :from="'ano'" :hasPrev="true" :content="'hihi'"></MessageItem>
            <MessageItem :id="'14'" :replying_to="'13'" :replying_to_message_content="'hihi'" :type="'text'" :from="'self'" :hasPrev="false" :content="'Hihi cái địt con mẹ nhà mày?'"></MessageItem>
        </div>
        <div class="flex min-h-[50px] shrink-0">
            <ChatInput></ChatInput>
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatInput from './ChatInput.vue';
import MessageItem from './MessageItem.vue';


</script>

<style scoped>

</style>