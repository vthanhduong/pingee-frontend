import { defineStore } from "pinia";

interface MessageState {
    conversations: any[];
    activeConversationId: string;
}

export const useMessageStore = defineStore('message', {
    state: (): MessageState => ({
        conversations: [],
        activeConversationId: ''
    }),
    getters: {

    },
    actions: {
        setActiveConversationId(id: string) {
            this.activeConversationId = id;
        },
        setConversations(convs: any[]) {
            this.conversations = convs;
        }
    }
})