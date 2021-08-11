<template lang="">
    <div class="mt-3">
      <input type="checkbox" :checked="todo.checked" @change="checkTodo">
      <span>{{ todo.index }}</span> 
      <span class="ms-3 flex-grow-1">{{ todo.text }}</span>
      <button class="float-right" @click="remove">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object        
    },
    methods: {
        remove() {
            this.$emit('remove-todo', this.todo.id)           
        },
        checkTodo() {
            if(this.todo.checked === false) {
                this.todo.checked = true   
                console.log(this.todo.text);
                this.$emit('changeTodo', this.todo.text, this.todo.id);
            } else {
                this.todo.checked = false;                
                this.$emit('value_clean');               
            }
        }
    }
}
</script>
<style lang="">
    
</style>