<template >
    <div class=" flex justify-start ml-20">
        <div class="bg-white dark:bg-gray-600 p-1 rounded-lg mt-2 flex  ">
        <p class="ml-2 text-sm">
            {{data.msg}}
        </p>
        <p class=" ml-4 mt-3 mr-3 time font-light text-current ">{{data.time}}</p>
    </div>
    </div>
</template>
<script>
export default {
    name:"MsgReceived",
    props:{
        data:Object,
    }
}
</script>
<style >
    
</style>