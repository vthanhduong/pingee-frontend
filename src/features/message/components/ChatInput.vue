<template>
    <div class="w-full flex items-center gap-x-2 px-2 pt-1">
        <Button icon="pi pi-face-smile" size="small" variant="text" rounded></Button>
        <Button icon="pi pi-paperclip" size="small" variant="text" rounded></Button>
        <Button icon="pi pi-images" size="small" variant="text" rounded></Button>
        <Textarea placeholder="Aa" auto-resize rows="1" class="w-full custom-textarea !rounded-tl-3xl !rounded-bl-3xl !rounded-tr-3xl !rounded-br-3xl !border-gray-300" size="small"></Textarea>
        <Button icon="pi pi-microphone" size="small" variant="text" severity="info" rounded></Button>
        <Button icon="pi pi-send" size="small" variant="text" severity="info" rounded></Button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.custom-textarea {
    max-height: calc(5 * 1.5em + 1.5rem);
    overflow-y: auto !important;
    resize: none;
    transition: border-color 0.2s ease-in-out;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: transparent; 
    }
    box-shadow: none;
}
</style>