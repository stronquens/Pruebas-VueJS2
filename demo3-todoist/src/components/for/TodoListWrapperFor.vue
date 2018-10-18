
<style scoped>
</style>

<template>
  <div class="menu">  
      <h1>Todo List For!!!</h1>
      <TodoListFor :todos="items"></TodoListFor>
      <input 
        v-model="newTodo" 
        @keydown.enter="addTodo" 
        placeholder="insert todo"
        type="text" 
      />
  </div>
</template>


<script>
import TodoListFor from "./TodoListFor.vue";

export default {
  components: {
    TodoListFor
  },
  data() {
    return {
      newTodo: '',
      items: [{ id: 1, message: "Foo" }, { id: 2, message: "Bar" }]
    }
  },
  methods: {
    addTodo () {
				this.items.push({
					id: this.items.length+1,
					message: this.newTodo
				});
				this.newTodo = '';
    }
  }
};
</script>