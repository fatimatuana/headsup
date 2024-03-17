<template>
 <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style>
/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Varela+Round&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Margarine&display=swap');

#app{
  /* font-family: "Varela Round";  */
   font-family: "Margarine", sans-serif;
  background-color: #292929;
  background-image: url("/img/heads-up-bg.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
}
</style>