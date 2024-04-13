<template>
    <div class="fullheight-p">

  <Game v-if="dialog" :words="words" @closed="dialog = false"  @gameIsFinished="re()"  />
            <!-- <v-btn to="/" @click="getGameData()" class="mt-2 mb-2 ml-2 bg-light" 
              fab
              dark >
              <v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn> -->

         <div align="center" class="mt-10" >
         <span class="font-weight-bold" style="font-size:250px; color:white">7</span>
         <!-- <span class="font-weight-bold" style="font-size:250px; color:white">{{winsWordscount}}</span> -->
        <br>

<v-container>
     <span class="col-prim">{{winsWords}}</span>  
     <!-- <span class="col-prim">{{winsWords}}</span>   -->
         <p  class="col-sec">{{losesWords}}</p></v-container>
         <!-- <p  class="col-sec">{{losesWords}}</p></v-container> -->

        <v-card>
        </v-card>
        <div style="margin-bottom:5vh">
          
    <!-- <v-btn v-if="!offline" @click="dialog = !dialog" class=" bg-m col-sec"
              fab
              dark
              x-large
            >
              <v-icon>mdi-rotate-right </v-icon>
            </v-btn> -->

            <div id="actions-div">
              <button  to="/" @click="getGameData()" class="button"  style="background-color: dimgray;color:darkgray;">
              <!-- <v-btn  to="/" @click="getGameData()" class="mt-2 mb-2 ml-2 bg-light button" large> -->
                <p class="bold funny-font" style="margin-bottom:0px;margin-right:10px;">CHANGE <v-icon>mdi-sync </v-icon></p>              
              </button>

              <!-- <v-btn v-if="!offline" @click="dialog = !dialog" class=" bg-m col-sec button glow" large style="background-color: #E6B83C;">
                <p  style="margin-bottom:0px;margin-right:10px;">retry</p>              
                <v-icon>mdi-rotate-right </v-icon>
              </v-btn> -->
              <button v-if="!offline" @click="dialog = !dialog" class="button "  style="background-color: #E6B83C;">
                <p class="bold funny-font" style="margin-bottom:0px;">RETRY <v-icon>mdi-rotate-right </v-icon></p>              
                
              </button>
            </div>
  
                      

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
            winsWords: ["heyy", "ajf", "jfoef"],
            losesWords: ["hey", "hallo", "hi"],
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
.button{
  border-radius: 15px;
  /* border-radius: 20px; */
  margin:0 5px;
  height: 60px !important;
  box-shadow: 0px 0px 30px black;
}
#actions-div{
 display:grid;  
 grid-template-columns: 1fr 1fr; 
 grid-gap: 15px;
 padding: 0px 20px;
 position: absolute;
 bottom: 25px;
 width: 100%;
}
</style>