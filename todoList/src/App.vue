<template>
    <!-- 인스턴스(상위컴포넌트) 안에 하위컴포넌트-->
    <div id="app">
      <Todoheader></Todoheader>
      <TodoInput v-on:addTodo="addTodo"></TodoInput> <!--입력창에 적힌 value를 받아오기 위해 emit을 통해 addTodo이벤트 실행-->
      <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList> <!--list를 구성하기 위해 props로 받아오고 제거버튼 눌렀을 때 event요청을 위해 $emit해놓음-->
      <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>

</template>

<script>
//각 컴포넌트 import
import Todoheader from './components/Todoheader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  //앱이 실행될 때 데이터가 있다면 list로 표현할 todoItems[]에 값을 넣어줌
  created() {
        if (localStorage.length > 0) {
            for (var i=0; i < localStorage.length; i++) {
                if(localStorage.key(i) != "loglevel:webpack-dev-server"){ //이건 자동으로 데이터로 갱신되던데 뭔지 모르겟다 그냥 예외처리 시켜버림
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    },
  //사용할 컴포넌트 선언
  components: {
    'Todoheader': Todoheader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    //input에서 받아온 값을 list에 추가
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem); //localStorage의 키와 값을 입력 받아온 값으로 넣어줌
      this.todoItems.push(todoItem); //받아온 값을 todoItems[]에 넣어줌
    },
    //localStorage지우고 뷰 영역의 배열도 지우셈
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    //데이터 제거 이벤트
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem); //제거 누른 데이터를 localStorage에서 제거
      this.todoItems.splice(index, 1); //뷰 영역에서도 제거하기 위해 splice로 배열에서 없애줌
    }
  }
}
</script>

<style>
  body {
        text-align: center;
        background-color: #f7e6f7;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(201, 7, 7, 0.3);
    }
</style>
