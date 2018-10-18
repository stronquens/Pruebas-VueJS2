<template>
    <div class="event">
        <h1>Todo List Event !!!</h1>
        <ol>
            <li v-for="(item, index ) in items" :key="index">
                <!-- <todo :item="item" v-on:deleteEvent="deleteTodo" />-->
                <todoModel v-model="items[index]" @deleteEvent="deleteTodo" />
            </li>
        </ol>
        <input 
        v-model="newTodo" 
        @keydown.enter="addTodo" 
        placeholder="insert todo"
        type="text" 
        />
    </div>
</template>
<script>
import TodoItem from "./TodoItem";
import TodoItemModel from "./TodoItemModel";

export default {
  name: "TodoListEvent",
  components: {
    todo: TodoItem,
    todoModel: TodoItemModel
  },
  data() {
    return {
      newTodo: "",
      items: [{ id: 1, message: "Foo" }, { id: 2, message: "Bar" }]
    };
  },
  /*mounted() {
      this.$on('deleteEvent', (todo) => {
        this.deleteTodo(todo);
      });
  },*/
  /*events: {
    deleteEvent: function() {
      console.log('llego')
    }
  },*/
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
    },
    test: function() {
      alert("Llego");
    }
  }
};
</script>
