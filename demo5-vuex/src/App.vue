<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1> Modules: Module User changes and User2 no </h1><br/>

    Acces single variable: 
    {{this.$store.state.user.count}}
    <br/>
    Acces filter variable with getter: 
    {{this.$store.getters['user/doneTodos']}}
    Getters will also receive other getters as the 2nd argument: 
    {{this.$store.getters['user/doneTodosCount'] }}
    <br/>
    You can also pass arguments to getters by returning a function: 
    {{this.$store.getters['user/getTodoById'](2) }}

    <!-- Acces single variable: 
    {{this.$store.state.count}}
    <br/>
    Acces filter variable with getter: 
    {{this.$store.getters.doneTodos}}
    <br/>
    Getters will also receive other getters as the 2nd argument: 
    {{this.$store.getters.doneTodosCount }}
    <br/>
    You can also pass arguments to getters by returning a function: 
    {{this.$store.getters.getTodoById(2)}} -->
  </div>
</template>

<script>
// WE can map namespace TODO

 // With Modules
export default {
  name: "app",
  components: {
    //  HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.user.count;
    }
  },
  created: function() {
    this.$store.commit("user/increment", {
      amount: 10
    });
  
    this.$store.commit({
      type: "user/increment",
      amount: 20
    });

    this.$store.dispatch('user/incrementAsync', {
      amount: 30
    });
  }
}; 

/*
  // Without modules
export default {
  name: "app",
  components: {
    //  HelloWorld
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created: function() {
    this.$store.commit("increment", {
      amount: 10
    });

    this.$store.commit({
      type: "increment",
      amount: 10
    });

    this.$store.dispatch('increment');
  }
};*/
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
