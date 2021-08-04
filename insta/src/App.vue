<template>
  <div id="app">
    <div style="width:500px; margin:0 auto;">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/introduce">Introduce</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/page">Page</router-link></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>    
    
    <div v-if="step == 1">
      <Post :postData="post" v-for="(post,i) in postData" :key="i"/>
     <p><input type="file" id="file" class="inputfile" @change="upload"><label for="file" class="input-plus">+</label></p>
    </div>

    <div v-else-if="step == 2">
      <Editor v-bind:imgSrc="newImgSrc" v-bind:filters="filters">
        <h1>{{ editorTitle }}</h1>
      </Editor>      
    </div>
    <button type="button" @click="getMore">더보기</button>
  </div>
</template>

<script>
import data from './data.js';
import Post from './components/Post.vue';
import Editor from './components/Editor.vue';
import EventBus from './EventBus.js';
import axios from 'axios'

export default {
  data() {
    return {
      postData: data,
      editorTitle: '글쓰기화면',
      newImgSrc: '',
      step: 1,
      filters: ["normal", "toaster", "clarendon", "gingham", "moon", "lark", "reyes", "juno", "aden", "mayfair", "rise", "hudson", "xpro2", "lofi"],
      selectFilter: ''
    }
  },
  components: {
    Post,
    Editor
  },
  mounted() {
    EventBus.$on('new-data', (uploadData) => {
      data.unshift(uploadData);
      this.step = 1;
    });

    EventBus.$on('select-filter', (filter) => {
      this.selectFilter = filter;
    });
  },
  methods: {
    upload(e) {
      let file = e.target.files;
      let reader = new FileReader();

      reader.readAsDataURL(file[0]);
      reader.onload = e => {
        this.newImgSrc = e.target.result;
      }
      this.step = 2;
    },
    getMore() {
      axios.get('moreData.json').then( moreData => {
        this.postData.push(moreData.data[0]);
      }).catch( err => {
        console.log(err);
      });
    }
    
  }
 
}
</script>

<style>
img, textarea {width:100%;}
.inputfile{width:0px; height:0px; overflow:hidden;}
.input-plus{cursor:pointer;}
.input-plus:hover{color:blue;}

.overflow{overflow-x:scroll;}
.filter-wrap{padding:0; margin-bottom:10px; width:400%;}
.filter{width:100px; height:65px; margin:0px; display:inline-block;cursor:pointer;}
</style>
