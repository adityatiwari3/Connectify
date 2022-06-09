<template >
    <div class="mt-3 flex justify-end mr-20">
        <img :src="imgurl" alt="" class="ImgSend rounded-lg border-green-400 dark:border-green-800 border-4" v-on:click="fun">  
    </div>
</template>
<script>
export default {
    name:"ImgSend",
    props:{
        imgulr:String,
    },
    methods:{
        fun(){
            console.log("this is url in imgsend",this.imgulr);
        }
    }
}
</script>
<style >
.ImgSend{
    height: 350px;
    width: 240px;
}
</style>