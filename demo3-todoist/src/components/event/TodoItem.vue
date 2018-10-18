<template>
    <div class="item">
        <span> {{ item.message }}</span>
        <input v-on:click="deleteTodo" type="button" value="Borrar"/>  
    </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: { item: Object },
  methods: {
      deleteTodo: function() {
          this.$emit('deleteEvent', this.item)
      }
  }
};
</script>
