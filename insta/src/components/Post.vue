<template lang="">
    <div>
        <h2>{{ postData.title }}</h2>
        <p><img :src="postData.img" :class="postData.filter"></p>
        <p>글쓴이 : {{ postData.author }}</p>
        <p>{{ postData.caption }}</p>
    </div>
</template>
<script>
export default {
    name: 'post',
    props: {
        'postData': Object
    }
}
</script>
<style lang="">
    
</style>