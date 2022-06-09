<template >
  <div class=" flex items-center justify-start text-grey-400 dark:text-white">
    <div class="text-left mt-4 mr-5 ml-5">
      <button class="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button v-on:click="show_file_select_box()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
      </button>
    </div>
    <div class="flex rounded-full bg-white dark:bg-grey-600 mt-2">
      <form action="" @submit.prevent="getmsg">
      <input
        type="text"
        autocomplete="off"
        class="px-5 py-2 rounded-full dark:bg-gray-500 text-gray-600 dark:text-white focus:outline-none"
        placeholder="Type a message"
        v-model="inputmsg.msg"
        v-bind:style="{ width: 53 + 'vw' }"
      />
      </form>
    </div>
    <div v-if="inputmsg.msg">
      <button type="submit" v-on:click="getmsg()" class="mt-3 ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <div v-else>
      <button  class="mt-3 ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TypeBox",
  props: {
    sendData: Function,
    initial_value_of_file_select:Boolean,
    show_file_select:Function,
  },
  data() {
    return {
      inputmsg: [
        {
          issend:false,
          msg:null
        }
      ],
      sendmsg:{},
    };
  },
  methods: {
    show_file_select_box()
    {
      if(this.initial_value_of_file_select == true){
        this.show_file_select(false);
      }
      else{
        this.show_file_select(true);
      }
    },
    getmsg() {
      this.sendmsg.msg = this.inputmsg.msg;
      this.sendmsg.issend=true;
      this.sendmsg.type="text";
      const n = new Date();
      var time=n.toLocaleString("en-IN",{hour: 'numeric', minute: 'numeric'});
      this.sendmsg.time=time;
      console.log(time);
      this.inputmsg.msg = null;
      //console.log("this is the sendmsg in type box",this.sendmsg);
      this.sendData(this.sendmsg);
    },
  },
};
</script>
<style >
</style>