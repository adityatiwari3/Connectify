<template>
<div class="grid grid-cols-12">
    <div class="col-span-4">
        <div class="flex flex-col">
            <div class="bg-gray-200 dark:bg-gray-600 border-r border-gray-300" v-bind:style="{ height: 65 + 'px' }">
                <HeaderLeft />
            </div>
            <div class="
            items-center
            justify-center
            grid
            bg-gray-100
            dark:bg-gray-800
            border-r
            border-b
            dark:border-gray-600
            border-gray-300
          " v-bind:style="{ height: 50 + 'px' }">
                <SearchLeft :senddata="get_name_from_searchbox" />
            </div>
            <div class="overflow-auto contactlist border-gray-300 border-r" v-if="list_after_search.length && searched_name">
                <div v-for="list in list_after_search" :key="list.index" class="bg-white dark:bg-gray-800 border-r-2 dark:border-gray-600 border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600" v-on:click="for_right_headr_and_chatbox(list.name,list.msg,list.dp,list.index)">
                    <ContactList :name="list.name" :dp="list.dp" :msg="list.msg" />
                </div>
            </div>
            <div class="overflow-auto contactlist border-gray-300 border-r" v-else>
                <div v-for="list in data_to_show" :key="list.index" class="bg-white dark:bg-gray-800 border-r-2 dark:border-gray-600 border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600" v-on:click="for_right_headr_and_chatbox(list.name,list.msg,list.dp,list.index)">
                    <ContactList :name="list.name" :dp="list.dp" :msg="list.msg" :type="list.type" />
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-8">
        <div class="bg-gray-200 dark:bg-gray-600" v-bind:style="{ height: 65 + 'px' }">
            <div v-if="show_right_header_and_chatbox">
                <HeaderRight :name="name_for_right_header" :dp="dp_for_right_header" />
            </div>
        </div>
        <div class="relative">
            <div class=" overflow-auto chatbox bg-chatbox_bg_light dark:bg-chatbox_bg_dark" id="chatbox">
                <div v-if="show_right_header_and_chatbox">
                    <ChatBox :msg="data_to_show[index_of_contact_in_chat].msg" />
                    <div>
                        <iframe :src="aadity" frameborder="0" type="application/pdf" scrolling="no" class="overflow-hidden"></iframe>
                    </div>
                </div>
            </div>
            
            <div class="absolute full_select_box" :class="{hidden:selecting_option}">
                <div class="flex flex-col">
                    <input type="file" id="img_selector" class="hidden" @change="select_img" >
                    <div class=" rounded-full w-14 h-14 flex items-center justify-center text-white bg-purple-500">
                        <button v-on:click="file_selector">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <input type="file" id="file_selector" class="hidden" @change="select_file" accept="pdf/*">
                    <div class="bg-red-500 rounded-full w-14 h-14 flex items-center justify-center text-white mt-4">
                        <button class="" v-on:click="img_selector">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-200 dark:bg-gray-600" v-bind:style="{ height: 65 + 'px' }">
            <div v-if="show_right_header_and_chatbox">

                <TypeBox :sendData="getData_from_typebox " :index="index_of_contact_in_chat" :show_file_select="change_file_select_option" :initial_value_of_file_select="selecting_option" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeaderLeft from "./HeaderLeft.vue";
import SearchLeft from "./SearchLeft.vue";
import ContactList from "./ContactList.vue";
import HeaderRight from "./HeaderRight.vue";
import ChatBox from "./ChatBox.vue";
import TypeBox from "./TypeBox.vue";
var test = JSON.parse(localStorage.getItem('Data'));
import data from '../assets/Data.js'
//localStorage.setItem('Data',JSON.stringify(data));
//console.log(data.default);
//data.default[0].msg.push("aadity tiwari");
//localStorage.setItem('Data',JSON.stringify(data.default))
//localStorage.clear();
export default {
    components: {
        HeaderLeft,
        SearchLeft,
        ContactList,
        HeaderRight,
        ChatBox,
        TypeBox
    },
    name: "MainComponent",
    props: {},
    methods: {
        change_file_select_option(data) {
            this.selecting_option = data;
            console.log(this.selecting_option);
        },
        for_right_headr_and_chatbox(name, msg, dp, index) {
            this.index_of_contact_in_chat = index;
            this.show_right_header_and_chatbox = true;
            this.name_for_right_header = name;
            this.msg_for_chatbox = msg;
            this.dp_for_right_header = dp;
            //console.log( "this is img when it set first time",this.data_to_show[this.index_of_contact_in_chat].msg)
        },
        getData_from_typebox(chat_msg) {
            //console.log("this is chat_msg",chat_msg);
            //this.msg_for_chatbox.push("this is chat_msg",chat_msg);
            this.data_to_show[this.index_of_contact_in_chat].msg.push(chat_msg);
            //console.log("this is the index",this.index_of_contact_in_chat);
            //console.log(this.data_to_show[this.index_of_contact_in_chat]);
            localStorage.setItem('Data', JSON.stringify(this.data_to_show));
            this.data_to_show = JSON.parse(localStorage.getItem('Data'));
        },
        save_img(data) {
            //console.log("this is the data we get in save_img",data);
            this.data_to_show[this.index_of_contact_in_chat].msg.push(data);
            localStorage.setItem('Data', JSON.stringify(this.data_to_show));
            this.data_to_show = JSON.parse(localStorage.getItem('Data'));
        },
        save_file(data) {
            //console.log("this is the data we get in save_img",data);
            this.data_to_show[this.index_of_contact_in_chat].msg.push(data);
            localStorage.setItem('Data', JSON.stringify(this.data_to_show));
            this.data_to_show = JSON.parse(localStorage.getItem('Data'));
        },
        get_name_from_searchbox(name) {
            this.searched_name = name;
            console.log(name.toUpperCase());
            const list = [];
            for (var data in this.data_to_show) {
                //console.log(this.data_to_show[data].name.toUpperCase());
                if (this.data_to_show[data].name.toUpperCase().indexOf(name.toUpperCase()) > -1) {
                    //console.log(this.data_to_show[data].name.toUpperCase());
                    list.push(this.data_to_show[data]);
                }
            }
            this.list_after_search = list;
        },
        img_selector() {
            document.getElementById('img_selector').click();
        },
        file_selector() {
            document.getElementById('file_selector').click();
        },
        select_img(img_details) {
            console.log(img_details.target.files)
            const reader = new FileReader();
            reader.readAsDataURL(img_details.target.files[0]);
            //console.log("this is reader",reader)
            //console.log("this is reader.result",reader.FileReader);
            reader.addEventListener("load", () => {
                //console.log("this is url of img",reader.result);
                //console.log("this is selected img before",this.selected_img)
                this.selected_img.msg = (reader.result);
                this.aadity=reader.result;
                this.selected_img.issend = true;
                this.selected_img.type = "image";
                const n = new Date();
                var time = n.toLocaleString("en-IN", {
                    hour: 'numeric',
                    minute: 'numeric'
                });
                this.selected_img.time = time;
                this.selecting_option=!this.selecting_option
                //this.save_img(this.selected_img);
                //console.log("this is selected img after", this.selected_img)
            })
            // console.log("this is selected img",this.selected_img);

        },
        select_file(file_details) {
            console.log("this is selected file", file_details.target.files[0]);
            let reader = new FileReader();

            reader.addEventListener('load',() =>{
                //console.log("this is the data after read",reader.result);
                this.aadity=reader.result;
                console.log(this.aadity);
            })
            reader.readAsDataURL(file_details.target.files[0]);
            //reader.readAsText(file_details.target.files[0]);
            //reader.readAsArrayBuffer
            //reader.readAsArrayBuffer(file_details.target.files[0]);
            this.selected_file.issend = true;
            this.selected_file.type = "file";
            const n = new Date();
            var time = n.toLocaleString("en-IN", {
                hour: 'numeric',
                minute: 'numeric'
            });
            this.selected_file.time = time;
            this.selected_file.msg = file_details.target.files[0].name;
            this.selecting_option=!this.selecting_option
            //this.save_file(this.selected_file);
        },
       
    },
    data() {
        return {
            list_after_search: [],
            searched_name: null,
            index_of_contact_in_chat: null,
            show_right_header_and_chatbox: false,
            name_for_right_header: null,
            dp_for_right_header: null,
            msg_for_chatbox: [{
                issend: Boolean,
                type: Text,
                msg: String
            }],
            data_to_show: null,
            selected_img: {},
            selected_file: {},
            selecting_option: true,
            aadity:"",
        };
    },
    beforeMount() {
        if (test) {
            this.data_to_show = test;
        } else {
            localStorage.clear();
            this.data_to_show = data;
        }
        //this.updateScroll();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.contactlist {
    height: calc(100vh - 115px);
}

.chatbox {
    height: calc(100vh - 130px);
    display: flex;
  flex-direction: column-reverse;
}

.full_select_box {
    bottom: 10px;
    left: 55px;
}
::-webkit-scrollbar{
    display: none;
}
</style>
