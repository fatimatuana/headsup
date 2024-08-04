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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap');

/* test */
#app{
  /* font-family: "Varela Round";  */
   /* font-family: "Margarine", sans-serif; */

     /* font-family: "Inter", sans-serif; ***************************/
  font-family: "Gabarito", sans-serif;
    font-weight: 800;


   /* font-family: "Margarine", sans-serif; */
  /* background-color: #292929; */
  /*background-image: url("/img/9.png"); /*START 7 ##### seee*/
  /* background-image: url("/img/landing-page-bg.png"); ******* */
  /* background-image: url("/img/START_5.png"); /** */
  background-image: url("/img/START_3.png"); /**

  /* background-image: url("/img/heads-up-bg.png"); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
}

.glow{
    -webkit-box-shadow:0px 0px 16px 10px rgba(230,165,60,0.9);
-moz-box-shadow: 0px 0px 16px 10px rgba(230,165,60,0.9);
box-shadow: 0px 0px 16px 5px rgba(230,165,60,0.9);
}

.bold{
  font-weight: 900;
}

.funny-font{
  font-family: "Margarine", sans-serif;
}

</style>