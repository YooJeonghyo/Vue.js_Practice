<template lang="">
    <div>
      <slot></slot>
      <input type="text" v-model="newTitle" placeholder="제목">
      <p><img :src="imgSrc" :class="selectFilter"></p>
      <div class="overflow"><ul class="filter-wrap"><li @click="getFilter" v-for="(fil, i) in filters" :key="i" class="filter"><img v-bind:src="imgSrc" :class="fil"><span>{{ fil }}</span></li></ul></div>
      <input type="text" v-model="newAuthor" placeholder="글쓴이">
      <textarea placeholder="일상을 기록해주세요" v-model="newCaption"></textarea>
      <button type="button" @click="update">저장</button>
    </div>
</template>

<script>
import EventBus from '../EventBus.js';

export default {
    name: 'editor',
    props: {
        imgSrc: String,
        filters: Array
    },
    data() {
        return {
            newTitle: '',
            newAuthor: '',      
            newCaption: '',
            selectFilter: ''

        }
    },
    methods: {
        getFilter(e) {
             this.selectFilter = e.target.className;
             EventBus.$emit('select-filter', e.target.className);
        },
         update() {
            var updateData = {
                title: this.newTitle,
                author: this.newAuthor,
                img: this.imgSrc,
                caption: this.newCaption,
                filter: this.selectFilter,
            }
            EventBus.$emit('new-data', updateData)
        },
    }
}
</script>
<style lang="">
    
</style>