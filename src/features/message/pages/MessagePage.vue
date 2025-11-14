<template>
    <div class="w-full h-full flex">
        <SideChatPanel></SideChatPanel>
        <ChatPanel></ChatPanel>
        <ChatInformation></ChatInformation>
    </div>
</template>

<script setup lang="ts">
import ChatInformation from '../components/ChatInformation.vue';
import ChatPanel from '../components/ChatPanel.vue';
import SideChatPanel from '../components/SideChatPanel.vue';


</script>

<style scoped>

</style>