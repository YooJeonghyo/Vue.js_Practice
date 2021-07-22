<template>
    <div class="inputBox shadow">
        <!--Text를 받을 input창과 입력받은 값을 추가하기 위한 span / 
        input에 enter를 치거나 span을 click하면 addTodo 이벤트 발생 /
        v-model을 이용하여 input에 적힌 내용을 newTodoItem으로 바인딩-->
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class = "addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>
        <!--modal 연결 및 modal창 모습-->
        <modal v-if="showModal" v-on:close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" v-on:click="showModal = false">
                입력하세요
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
             
    </div>
</template>

<script>
//modal화면 import
import Modal from './common/Modal.vue'
export default {
    data() {
        return {
            newTodoItem:'',
            showModal: false
        }
    },
    methods: {
        //input의 값을 받아오는 method
        addTodo() {
            if(this.newTodoItem !== "") {   //만약 input의 값이 ""가 아니라면 무언가 적혀있다면
                var value = this.newTodoItem && this.newTodoItem.trim(); //그 내용을 value 변수에 넣기, trim()을 통해 뒤의 여백은 지워서 받기
                this.$emit('addTodo', value);  //$emit을 통해 상위 컴포넌트로 value 값을 넘김 App.vue에서 확인
                this.clearInput();
            } else {
                this.showModal = !this.showModal; //enter또는 click을 하였을 때 입력된 값이 없다면 modal창 호출 false로 선언했기 때문에 true로 바꾸어 주어 볼 수 있게 끔
            }
        },
        clearInput() {
            this.newTodoItem = ''; //input 비워주기
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }

</style>
