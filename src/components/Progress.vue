<template style="position-absolute">
    <v-progress-circular
      :rotate="90"
      :size="60"
      :width="5"
      :value="value"
      color="lightgrey"
    >
      {{ ((value/5)*3).toFixed(0) }}
    </v-progress-circular>
</template>


<script>
  export default {
    data () {
      return {
        i:0,
        interval: {},
        value: 100, //100
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
            setTimeout(() => {
              this.value = 0;
      this.interval = setInterval(() => {
        if (Math.round(this.value,0) === 100) {
              this.$emit("time-up");
          return (this.value = 0)
        }
        this.value += (10/6)
      }, 1000)}, 3000);
  }
  }
</script>


<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>