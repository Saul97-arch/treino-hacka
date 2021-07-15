<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue"
import AppBar from "./components/AppBar.vue"
export default {
  name: "App",

  components: {
    Footer,
    AppBar,
  },
};
</script>
