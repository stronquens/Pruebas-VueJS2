<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TodoListWrapperFor />
    <TodoListEvent />
    <TodoWrapper />
  </div>
</template>

<script>
import TodoListWrapperFor from './components/for/TodoListWrapperFor.vue'
import TodoListEvent from './components/event/TodoListEvent.vue'
import TodoWrapper from './components/multicomponent/TodoWrapper.vue'

export default {
  name: 'app',
  components: {
    TodoListWrapperFor,
    TodoListEvent,
    TodoWrapper
  }
}
</script>