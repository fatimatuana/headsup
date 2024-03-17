<template>
 <v-row justify="center" align="center" class="landscapemode">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card style="background-color: tranparent;" class="white--text">
<div style="position:absolute; right: 0px">
          <Progress class="landscapemode" v-show="showing == 'true'" v-model="showing" @time-up="goToResult()" />
          </div>
<div v-if="duringStatus == 'G'"  class=" game text-center centercenter fullheight-vh" > <!-- x -->
 <h1 class="landscapemode">
   {{activeWord}} 
         </h1>
</div> 
<div v-if="duringStatus == 'W'" class="win text-center centercenter fullheight-vh">
               <v-icon class="iconStyling landscapemode" size="350" color="white">mdi-check</v-icon>

</div>
<div  v-if="duringStatus == 'L'" class="lose text-center centercenter fullheight-vh" >
      <v-icon class="iconStyling" size="350" color="white">mdi-close</v-icon>
</div>
  

      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';
import Progress from '@/components/Progress.vue';
// const sound = require("sound-play");


    export default {
    data () {
      return {
        dialog: true,
        duringStatus: "G", // G .. Game , W .. Win, L .. Lose
        activeWord: "",
        game: {
             losesWords: [],
          winsWords: []
        },
        before: 'G',
        showProgressCircular: false,
        showing: false,
        countWinsOff: 0,
      }
    },
    components: {
      Progress
    },
    props: {
      words: {
        type: Array
      },
    },
    methods: {
      getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
      },
      newWord(){
          this.activeWord = this.wordsArray[this.getRandomInt(this.wordsArray.length)];
      },
      handleOrientation(event) {
                let gamma    = event.gamma;
                if(gamma <= 60 &&  gamma >= 0 ){
                  this.duringStatus = 'W';
                  if(this.before != 'W'){
                    this.playSound("win.mp3");
                                          this.game.winsWords.push(this.activeWord);
                  this.countWinsOff++;
                  }
                  this.before = 'W';
                }
                else if(gamma >= -60 &&  gamma <= 0  ){
                      this.duringStatus = 'L';
                    if(this.before != 'L'){
                    this.playSound("lose.mp3");
                    this.game.losesWords.push(this.activeWord);
                  }
                      this.before = 'L';
                }
                else{
                  if(this.duringStatus != 'G'){
                    this.newWord();
                  }
                  this.before = this.duringStatus; //zwischenspeichern
                  this.duringStatus ='G';
                }
},   


async goToResult(){
  this.game.words = this.$props.words;
  if (!navigator.onLine) {
   this.$router.push({name: 'Results', params: {wins: this.countWinsOff} })
    }
     else{
     await axios.post("/game", this.game);
          this.$router.push({name: "Results", params: {words: this.wordsArray}});
                } 
    window.removeEventListener("deviceorientation", this.handleOrientation, true);
    this.$emit('gameIsFinished'); 
    this.dialog = false;
},

startGame(){
  this.showProgressCircular = window.localStorage.getItem("showProgressCircular");
        this.newWord();
        window.addEventListener('deviceorientation',  this.handleOrientation, true);
  },

  async playSound(file){
      let audio = new Audio(require(`../../public/sounds/${file}`));
      audio.play();
  }
},
    async created () {
      this.game.losesWords = [];
      this.game.winsWords = [];
      this.dialog = true;
      this.countWinsOff = 0;
      this.wordsArray = this.$props.words;
      this.game.words = this.wordsArray;
       if (window.DeviceOrientationEvent){
            setTimeout(() => this.startGame(), 3000);
      }     
         this.showing = window.localStorage.getItem("showProgressCircular");
        this.showProgressCircular = window.localStorage.getItem("showProgressCircular");
    },

     mounted() {
       this.activeWord = "Sei bereit!"
  },

  }
</script>

<style lang="scss" scoped>
.centercenter{
height: 90vh; justify-content:center; align-items:center; display: flex
}
.game{
  background-color: #3769F5;
}

.win{
  background-color: green;
}

.lose{
  background-color: #C70D00;
}

.landscapemode{
  transform: rotate(90deg);
}
.fullheight-vh{
    height: 100vh;
}
</style>