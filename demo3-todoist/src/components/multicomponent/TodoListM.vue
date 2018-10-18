<template>
    <div class="event">
        <ol>
            <li v-for="(item, index ) in items" :key="index">
                <todo :item="item" @deleteEvent="deleteTodo" />
            </li>
        </ol>
    </div>
</template>
<script>
import TodoItemM from "./TodoItemM";

export default {
  name: "TodoListEvent",
  components: {
    todo: TodoItemM
  },
  props: {
    items: Array
  },
  methods: {
    deleteTodo: function(todo) {
      this.$emit("deleteEvent", todo);
    }
  }
};
</script>
