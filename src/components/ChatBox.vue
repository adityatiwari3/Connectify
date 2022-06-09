<template>
<div class="mb-5">
    <div class="text-grey-400 dark:text-white">
        <h1 v-for="chat in msg" :key="chat" class="">
            <div v-if="chat.issend">
                <div v-if="chat.type === text">
                    <MsgSend :data="chat" />
                </div>
                <div v-else-if="chat.type === image">
                    <div class="mt-3 flex justify-end mr-20 relative">
                        <img :src="chat.msg" alt="" class="ImgSend rounded-lg border-green-400 dark:border-green-800 border-4" v-on:click="fun">
                        <p class="absolute bottom-2 img_time right-5">{{chat.time}}</p>
                    </div>
                </div>
                <div v-else-if="chat.type === file">
                    <FileSend :data="chat"/>
                </div>
            </div>
            <div v-else>
                <div v-if="chat.type === text">
                    <MsgReceived :data="chat" />
                </div>
                <div v-else-if="chat.type === image">
                    <div class="mt-3 flex justify-end mr-20 relative">
                        <img :src="chat.msg" alt="" class="ImgSend rounded-lg border-green-400 dark:border-green-800 border-4" v-on:click="fun">
                        <p class="absolute bottom-2 img_time right-5">{{chat.time}}</p>
                    </div>
                </div>
                <div v-else-if="chat.type === file">
                    <h1>
                        
                    </h1>
                </div>
            </div>
        </h1>
    </div>
</div>
</template>

<script>
import MsgSend from "./MsgSend.vue";
import MsgReceived from "./MsgReceived.vue";
import FileSend from './FileSend.vue';
//import ImgSend from './ImgSend.vue'
export default {
    components: {
        MsgSend,
        MsgReceived,
        FileSend,
        //ImgSend
    },
    name: "ChatBox",
    props: {
        msg: Object,
    },
    methods: {

    },
    data() {
        return {
            text: "text",
            file: "file",
            image: "image",
        }
    },
    beforeMount() {
        console.log("msg");
    },
};
</script>

<style>
.ImgSend {
    height: 350px;
    width: 240px;
}
.img_time{
    font-size: 10px;
    line-height: 10px;
}
</style>
