<template>
    <section>
        <transition-group name="list" tag="ul">
            <!-- App.vue에 생성된 todoItems의 값을 받아와 list로 작성 당연히 props를 사용-->
            <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow" @click="changeTodo(todoItem, index)">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }} <!--받아온 todoItems 값을 바인딩-->
                <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)"> <!--받아온 todoItems의 값을 제거 // index를 굳이 받아와야되나? splice는 다른곳에서 할건데-->
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>               
            </li>
        </transition-group>
    </section>
</template>

<script>
import TodoInput from "./TodoInput"

export default {
    props: ['propsdata'],    //데이터를 받아오기 위한 props속성
    components: {
        TodoInput
    },
    methods: {
        removeTodo(todoItem,index) {
           this.$emit('removeTodo', todoItem, index); //데이터를 상위에서 제거해야되니깐 emit으로 이벤트 요청
        },
        changeTodo(todoItem, index) {
            console.log(todoItem, index)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;        
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;        
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
