<template>
    <div>
        <div class="ff">
            <!-- <v-img src="/img/heads-up-bg-logo.png" style="height:100vh; width: 100vw;"/> -->
        </div>
        <div class="centered-content ">
            <router-link to="/overview" class="centered-content">
                <button class="start-button funny-font" @click="call()">START</button> 
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
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
        
    }
</script>

<style lang="scss" scoped>
.centered-content{
    display: flex;
    align-content: center;
    justify-content: center;
}
.start-button{
    // background-color: #ffefc2;
    position: absolute;
    bottom: 5vh;
    font-size: 2rem;
    padding: 8px 48px;
    border-radius: 20px;
    // color: #E6B83C;
    color: #ffffff;
    // color: #4e5b66;
    // color: #f2e2b6;
    // border: 2px solid #f2e2b6;
    // text-shadow: 0 0 3px #E6B83C, 0 0 5px #4e5b66;  #######
    // background-color: #ffebb6;
    text-shadow: 0px 0px 50px #E6B83C;
    letter-spacing: 2px;
}

.ff{
    background-image: url("/img/heads-up-bg-logo.png");
      background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>