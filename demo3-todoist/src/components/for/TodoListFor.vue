
<template>
    <ol class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
           <span> {{ todo.message }}</span>
           <input v-on:click="deleteToDo(todo)" type="button" value="Borrar"/>  
        </li>
    </ol>
</template>

<script>
export default {
    props: {
        todos: Array
    },
    methods: {
        deleteToDo: function(todo){
            var pos = this.todos.indexOf(todo);
            this.todos.splice(pos,1);
        }
    }
};
</script>

