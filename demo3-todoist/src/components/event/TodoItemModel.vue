<template>
    <div class="item">
        <input @input="miupdate" ref="mitexto" type="text" :value="value.message"/>  
        <input @click="deleteTodo" type="button" value="Borrar"/>  
    </div>
</template>
<script>
export default {
  name: "TodoItemModel",
  props: { value: Object },
  data() {
    return {
      newValue: {
        id: this.value.id,
        message: this.value.message
      }
    };
  },
  methods: {
    miupdate: function() {
      this.newValue.message = this.$refs.mitexto.value;
      this.$emit("input", this.newValue);
    },
    deleteTodo() {
      this.$emit("deleteEvent", this.newValue);
    }
  }
};
</script>
