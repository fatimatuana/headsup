<template>
    <v-container>
          <Appbar :text="'heads up'"> </Appbar>
 <v-alert 
 :value="offline"
      type="error"
    >
      <v-row align="center">
        <v-col class="grow">
         Oh noo! <br>Keine Internetverbindung :(
        </v-col>
      </v-row>
    </v-alert>

        <v-container>
            <button @click="call()">call</button>
        <v-row>
        <Category v-for="item in categories" :key="item.id" :category="item" >
            {{ item }}
        </Category>            
    </v-row>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';
import Category from '@/components/Category.vue';
import Appbar from '@/components/Appbar.vue';
    export default {
        data() {
            return {
                categories: [],
                offline: false,
            }
        },
        components: {
            Category,
            Appbar,
        },
        async created () {
                        this.checkConnection();

           await this.getData();
            history.pushState({}, '', "/results");
            history.pushState({}, '', "/");
        },
        methods: {

          async getData(){
                        let res = await axios.get("/categories");
                        // let res = await axios.get("http://localhost:3000/categories");
                        this.categories = await res.data;
          },
            checkConnection() {
                setTimeout(() => {
                if (!navigator.onLine) {
                    this.offline = true;
                    }
                else this.offline = false;
                this.checkConnection();
                }, 1000);
            },
        async call(){
              if (!window.DeviceOrientationEvent || !window.DeviceOrientationEvent.requestPermission){
                return alert("Your current device does not have access to the DeviceOrientation event");
            }
            
            let permission = await window.DeviceOrientationEvent.requestPermission();
            if (permission !== "granted"){
                return alert("You must grant access to the device's sensor for this demo");
            }

        }
        },
        async mounted () {
            await this.getData();
        },




        
    }
</script>

<style>
.fullheight-p{
    /* height: 100%; */
    /* height: 100vh; */
}

</style>