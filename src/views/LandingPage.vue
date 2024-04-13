<template>
    <div>
        <div>
            <v-img src="/img/heads-up-bg-logo.png"/>
        </div>
        <div class="centered-content  glow">
            <button class="start-button glow funny-font" @click="goToOverviewPage()">START</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goToOverviewPage() {
                this.$router.push("/");
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
    // background-color: #4e5b66;
    // background-color: red;
    // background-color: #ffefc2;
    background-color: #E6B83C; //*** */
    position: absolute;
    bottom: 5vh;
    font-size: 28px;
    padding: 8px 48px;
    border-radius: 20px;
    // color: #E6B83C;
    color: #ffffff;
    // color: #4e5b66;
    // color: #f2e2b6;
    border: 2px solid #f2e2b6;
    text-shadow: 0 0 3px #E6B83C, 0 0 5px #4e5b66;
}


</style>