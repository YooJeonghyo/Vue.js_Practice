<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     <v-app-bar-nav-icon @click="drawer = !drawer" />


      <v-spacer />


    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      :src="require('@/assets/sidebar.jpg')"
      >
      <template #img="props">
        <v-img
          :gradient="gradient"
          v-bind="props"
          >

        </v-img>
      </template>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     drawer: false,
     gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
     items: [
          { title: 'Dashboard', icon: 'mdi-tablet-dashboard', to: '/'},
          { title: 'Grid System', icon: 'mdi-view-grid', to: '/grid-system'},
          { title: 'Grid List page', icon: 'mdi-view-grid-outline', to: '/grid-list-page'},
          { title: 'Breakpoint', icon: 'mdi-gesture-tap-button', to: '/break-point'},
          { title: 'Typography', icon: 'mdi-format-size', to: '/typography'},
          { title: 'Table', icon: 'mdi-table-multiple', to: '/table'},
          { title: 'Form', icon: 'mdi-form-textarea', to: '/form'},
          { title: 'Button', icon: 'mdi-radiobox-marked', to: '/button'},
          { title: 'Icon', icon: 'mdi-emoticon', to: '/icon'},
        ],
        right: null,
  }),
};
</script>
