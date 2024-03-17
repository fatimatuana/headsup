<template>
    <div class="fullheight-p">

  <Game v-if="dialog" :words="words" @closed="dialog = false"  @gameIsFinished="re()"  />
            <v-btn to="/" @click="getGameData()" class="mt-2 mb-2 ml-2 bg-light" 
              fab
              
              dark >
              <v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn>

         <div align="center" class="mt-10" >
         <span class="font-weight-bold" style="font-size:250px; color:white">{{winsWordscount}}</span>
        <br>

<v-container>
     <span class="col-prim">{{winsWords}}</span>  
         <p  class="col-sec">{{losesWords}}</p></v-container>

        <v-card>
        </v-card>
        <div style="margin-bottom:5vh">
          
    <v-btn v-if="!offline" @click="dialog = !dialog" class=" bg-m col-sec"
              fab
              dark
              x-large
            >
              <v-icon>mdi-rotate-right </v-icon>
            </v-btn>
              <br>
        </div>       </div>

    </div>
</template>

<script>
import axios from 'axios';
import Game from '@/components/Game.vue';
    export default {
        data() {
          return {
            game:{},
            words: [],
            winsWordscount: "",
            winsWords: [],
            losesWords: [],
            dialog: false,
            offline: false
          }
        },
    
    props: {
      wins: {
        type: Number
      },
    },
        components: {
          Game,
        },
        methods: {
          async getGameData() { 
                if (!navigator.onLine) {
                    this.winsWordscount = this.$router.history.current.params.wins;
                    this.winsWords = "";
                    this.losesWords= "";
                    this.offline = true;
                    }
                else{
                      let res = await axios.get("/game")
                      this.game = await res.data;
                      this.words = this.$router.history.current.params.words;
                      this.winsWordscount =  this.game.winsWords.length;
                      this.winsWords =  this.game.winsWords.join(" - ");
                      this.losesWords =  this.game.losesWords.join(" - ");

                } 
          },
          async re(){
            await this.getGameData(); 
          },
        },
         async created () {
           await this.re();
        }
    }
</script>

<style lang="css">
.bg-light{
  background-color: #d9d9d9;
}
.bg-m{
    background-color: #a4a4a4;
}
.col-prim{
  color: #777777;

}
.col-sec{
  color: #444444;
}
</style>