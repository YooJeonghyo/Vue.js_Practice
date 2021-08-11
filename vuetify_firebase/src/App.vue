<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <Title :title="site.title" />
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      width="400"
      app
    >
      <Menu :items="site.menu" />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <Footer :footer="site.footer" />
  </v-app>
</template>

<script>
import Title from '@/views/site/Title.vue'
import Footer from '@/views/site/Footer.vue'
import Menu from '@/views/site/Menu.vue'

export default {
  name: 'App',
  components: {
    Title,
    Footer,
    Menu
  },
  data () {
    return {
      drawer: false,
      site: {
        menu: [
          {
            title: 'home',
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              },
              {
                title: 'About',
                to: '/about'
              }
            ]
          },
          {
            title: 'about',
            icon: 'mdi-account-box',
            subItems: [
              {
                title: 'xxx',
                to: '/xxx'
              }
            ]
          }
        ],
        title: '나의 타이틀',
        footer: '푸터입니다'
      }
    }
  },
  created () {
    this.subscribe() // site객체를 firebase의 Realtiem 데이터베이스에 넘겨줌
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = v
      }, (e) => {
        console.log(e.message)
      })
    }

  }
}
</script>
