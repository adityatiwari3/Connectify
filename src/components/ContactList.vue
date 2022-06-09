<template>
<div class="grid grid-cols-12 text-grey-400 dark:text-white truncate">
    <div class="col-span-2">
        <img :src="dp" alt="" class="h-12 w-12 rounded-full ml-4 mt-3" />
    </div>
    <div class="col-span-10 border-b dark:border-gray-600 ml-3">
        <div class="flex flex-col items-start">
            <h1 class="mt-3">{{ name }}</h1>
            <div v-if="msg[msg.length - 1].type === text">
                <p class="mb-3 text-left truncate" v-bind:style="{width: 270 + 'px',}">{{ msg[msg.length - 1].msg }}</p>
            </div>
            <div v-else-if="msg[msg.length - 1].type === image">
                <p class="mb-3 text-left truncate" v-bind:style="{width: 270 + 'px',}">image.jpg</p>
            </div>
            <div v-else-if="msg[msg.length - 1].type === file">
                <p class="mb-3 text-left truncate" v-bind:style="{width: 270 + 'px',}">document.pdf</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ContactList",
    props: {
        name: String,
        dp: String,
        msg: Object,
    },
    data() {
        return {
            image: "image",
            file: "file",
            text: "text",
        }
    },
};
</script>

<style>
</style>
