<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>

export default {
     methods: {
         clearTodo() { //전체 지우기를 위해 데이터가 있는 상위 컴포넌트에 이벤트로 요청
             this.$emit('removeAll');
         }
     }    
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    
}
.clearAllBtn {
    color: #cc4242;
    display: black;
}

</style>
