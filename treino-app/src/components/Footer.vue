<template>
  <v-footer color="teal yellow accent-4 mt-5">
    <v-card class="flex" flat tile color="light-blue darken-4">
      <v-card-title class="light-blue darken-4">
        <strong class="subheading pokecolor">
          Tell me, Who is this Pokemon?
        </strong>
        
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Pokemon</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
  .pokecolor {
    color: 	#40C4FF;
  }
</style>