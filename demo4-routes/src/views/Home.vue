
<style scoped>
  .error {
    background-color: red;
  }
</style>

<template>
  <div class="home">
    <img src="../assets/logo.png">
    <p v-show="error" class="error">{{msg}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      error: false,
      msg: ""
    };
  },
  components: {
    HelloWorld
  },
  watch: {
    $route: function() {
      if (this.$route.query.error) {
        this.error = this.$route.query.error;
        this.msg = this.$route.query.msg;
      }
    }
  }
};
</script>
