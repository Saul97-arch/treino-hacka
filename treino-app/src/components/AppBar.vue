<template>
  <div>
    <!-- BARRA SUPERIOR -->
    <v-app-bar color="yellow accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>PokeInfo</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>


  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      ToolbarTitle: "PokeInfo",
    };
  },
};
</script>

<style scoped>
</style>