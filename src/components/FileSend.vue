<template>
<div class="mt-3 flex justify-end mr-20">
    <div class="filesend dark:bg-green-700 bg-green-400 rounded-xl border-green-400 dark:border-green-700 border-4">
        <div class="bg-white h-24 flex items-center justify-center rounded-t-xl">
            <h1 class="text-black font-bold">
                document
            </h1>
        </div>
        <div class="rounded-b-xl dark:bg-green-800 bg-green-300 h-14">
            <h1 class="p-2 border-l-6 mt-2 float-left w-52 truncate ml-5">{{data.msg}} </h1>
            <div class="">
            <button class="mt-2 float-right mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
            </button>
            </div>
        </div>
        <div class=" rounded-b-xl ">
            <p class="float-left text-xs mt-2 ml-2 font-light text-current">12 pages  PDF  4 MB</p>
                <p class="float-right text-xs mt-2 mr-2 font-light text-current">{{data.time}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "FileSend",
    props: {
        data:Object,
    },

}
</script>

<style>
.filesend {
    width: 330px;
    height: 183px;
}
</style>
