
<style scoped>
</style>

<template>
  <div class="menu">  
      <h1>Todo List Multicomponent!!!</h1>
      <todoList :items="items" @deleteEvent="deleteTodo"></todoList>
      <input 
        v-model="newTodo" 
        @keydown.enter="addTodo" 
        placeholder="insert todo"
        type="text" 
      />
  </div>
</template>


<script>
import TodoListM from "./TodoListM.vue";

export default {
  components: {
    todoList: TodoListM
  },
  data() {
    return {
      newTodo: "",
      items: [{ id: 1, message: "Foo" }, { id: 2, message: "Bar" }]
    };
  },
  methods: {
    addTodo() {
      this.items.push({
        id: this.items.length + 1,
        message: this.newTodo
      });
      this.newTodo = "";
    },
    deleteTodo: function(todo) {
      var pos = this.items.indexOf(todo);
      this.items.splice(pos, 1);
    }
  }
};
</script>