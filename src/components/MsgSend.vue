<template>
<div class="flex justify-end mr-20">
    <div class="bg-green-400 dark:bg-green-800 p-1 rounded-lg mt-2 flex  ">
        <p class="ml-2 text-sm">
            {{data.msg}}
        </p>
        <p class=" ml-4 mt-3 time font-light text-current mr-3  ">{{data.time}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "MsgSend",
    props: {
        data: Object,
    },
    data() {
        return {
            //time: new Date().toLocaleString("en-IN",{hour:'numeric',minute:'numeric'}),

        }
    }
}
</script>

<style >
.time{
    font-size: 10px;
    line-height: 10px;
}
</style>
