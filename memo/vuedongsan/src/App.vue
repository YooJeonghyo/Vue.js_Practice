<template>

  <div class="black-bg" v-if="modalToggle == true" >
    <div class="white-bg">
      <h4>상세페이지입니다</h4>
      <p>상세페이지 내용입니다</p>
      <button @click="modalFlag">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{menu}}</a>
  </div>

  <div v-for="(product, i) in onerooms" :key="i">
    <img :src="onerooms[i].image" class="room-img" @click="modalFlag">
    <h4>{{onerooms[i].title}}</h4>
    <h4>{{onerooms[i].content}}</h4>
    <p>{{onerooms[i].price}}원</p>
    <button @click="reportCount[i]++">허위매물신고</button> <span>신고수: {{reportCount[i]}}</span>
  </div>

  
  
</template>

<script>
import oneroom from './oneroom.js'

export default {
  name: 'App',
  data() {
    return {
      onerooms: oneroom,
      modalToggle: false,
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus: ['Home', 'Shop', 'About'],
      prices: [50, 60, 70],
      reportCount: [0, 0, 0],
    }
  },
  components: {
   
  },
  methods: {
    report() {
      this.reportCount ++
    },
    modalFlag() {
      this.modalToggle = !this.modalToggle
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;  
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;  
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  padding: 20px;
}
</style>
