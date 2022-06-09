<template>
<div class="container flex">
    <div class="flex rounded-3xl bg-white dark:bg-gray-500">
        <div class="flex justify-center" v-if="!searched_name">
            <button class="flex items-center justify-center px-4" v-on:click="fun2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="flex justify-center" v-else>
            <button class="flex items-center justify-center px-4" v-on:click="fun2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <input type="text" id="search_box" class="
          px-5
          w-80
          py-2
          focus:outline-none
          rounded-full
          dark:bg-gray-500
          text-gray-600
          dark:text-white
        " placeholder="Search or start new chat" v-model="searched_name" v-on:keyup="fun" autocomplete="off" />
        <div class="flex justify-center w-14">

            <button class="flex items-center justify-center px-4 ml-4" v-on:click="fun2" v-if="searched_name">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "SearchLeft",
    props: {
        senddata: Function,
    },
    methods: {

        fun() {
            this.senddata(this.searched_name);
        },
        fun2() {
            this.searched_name = null;
            this.senddata(this.searched_name);
        }
    },
    data() {
        return {
            searched_name: null,
        };
    },
};
</script>

<style>

</style>
