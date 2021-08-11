<template>
  <div id="app" class="container">
    <h1 class="text-center">연습</h1>
    <input type="text" id="inputbox" class="w-100" placeholder="뭐 좀 적어보셈" @keyup.enter="inputTodo" v-model="value" >
    <hr>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @remove-todo="removeTodo" @changeTodo="changeTodo" @value_clean="valueClean"/> 
    <hr>
    <input type="text" class="w-100" placeholder="변경될 놈들이 올거임" v-model="changeValue" @keyup="nope" @keyup.enter="modify">
    

  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

let i = '';

export default {
  name: 'App',
  components: {
    Todo
  },
  data() {
    return {
      value: '',
      changeValue: '',
      todos: [
        {
          id: 1,
          text: 'props',
          checked: false          
        },
        {
          id: 2,
          text: '$emit',
          checked: false          
        },{
          id: 3,
          text: '연습중',
          checked: false          
        },
        {
          id: 4,
          text: '게시판',
          checked: false          
        },
        {
          id: 5,
          text: '확장',
          checked: false          
        },
        {
          id: 6,
          text: '//',
          checked: false          
        }
      ]
    }
  },
  methods: {
    inputTodo(e) {
      if(e.target.value === '') {
        alert('적으라고')
      } else {
        this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      })
      this.value = '';
      }      
    },
    removeTodo(id) {
        console.log(id);
        const index = this.todos.findIndex( todo => {
          return todo.id === id;
        });
        this.todos.splice(index, 1);
    },
    changeTodo(text, id) {
      this.changeValue = text;
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      })
      i = index
    },
    valueClean() {
      this.changeValue = '';
    },
    modify(e) {   
        this.todos[i].text = e.target.value;      
        this.changeValue = '';
        i = '';      
    },
    nope(){      
      if(i === ''){
        alert('수정하려면 체크박스 누르셈');
        this.changeValue = '';
      }
    }
    
  }
}
</script>

<style>

</style>
