
<template>
    <div>
        <form action="#">
            <input v-model="user" placeholder="Username" type="text" name="user" id="user">
            <input v-model="pass" placeholder="PassWord" type="password" name="pass" id="pass">
            <input v-model="email" placeholder="Email" type="text" name="email" id="email">
            <input v-on:click.prevent="login" type="submit" value="LogIn">
        </form>
        <div>{{ error }}</div>
    </div>
</template>


<script>
import auth from '../auth'

export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
      email: "",
      error: "No errors"
    };
  },
  methods: {
    login() {
      if (this.user != "" && this.pass != "" && this.email != "") {
        this.error = "Logued In";
        auth.login(true);
      } else {
        this.error = "Error in logued in";
      }
    }
  }
};
</script>
