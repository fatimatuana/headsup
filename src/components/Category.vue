<template>
    <v-col class="px-2 py-2 col-12 col-sm-4" style="object-fit:cover" >
    <!-- <v-col class="px-2 py-2 col-6 col-sm-4" style="object-fit:cover" > -->
          <!-- <v-card  @click="switchtoG(category.id)" class="mx-1 my-0" style="background-color: transparent">

    <v-img max-height="45vh"
      class="white--text align-end" 
      :src="`/img/categories/${category.pic}.png`"
    >    
        <v-card-title style="word-break: wrap;background-color:#3B3635">{{category.name}}</v-card-title>
    </v-img>
  </v-card> -->

  
    <div class="category-div mx-1 my-0" :style="`background-image: url('/img/categories/${category.pic}.png');`" @click="switchtoG(category.id)" >
      <p>{{category.name.toUpperCase()}}</p>
    </div>


  <Game v-if="dialog" :words="category.words" @closed="dialog = false" />
    </v-col>
</template>

<script>
import Game from '@/components/Game.vue';
  export default {
    data: () => ({
        dialog: false,
    }),
    components: {
        Game
    },
    props: {
        category: {
            type: Object,
        },
    },
    methods: {
        switchtoG() {
            this.dialog = true;
        },
    },

  }
</script>

<style lang="scss" scoped>
.category-div{
  height:170px; 
  background-size: cover;
  display: flex;
  align-items: end;
  color: #ffffff;
  padding: 0px 15px;
  border-radius: 20px;
  // border: 2px solid red;
  box-shadow: 10px 5px 25px #000000;
}
.category-div p{
  // color: red !important
}
</style>