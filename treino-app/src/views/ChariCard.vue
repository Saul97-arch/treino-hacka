<template>
    <v-parallax height="600" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-img :src="PokeInfo.sprites.other['official-artwork'].front_default"></v-img>
      
      
      <ul>
        <li>Name: {{PokeInfo.name}}</li>
        <li>Weight: {{PokeInfo.weight}}Kg</li>
        <li>Height: {{PokeInfo.height}}M</li>
      </ul>
    </v-parallax>
</template>

<script>
  export default {
    name: 'ChariCard',
    data() {
      return {
        PokeInfo: []
      }
    },
    created() {
      fetch('https://pokeapi.co/api/v2/pokemon/charizard')
      .then(resposta => resposta.json())
      .then(json => {
        this.PokeInfo = json
        console.log(this.PokeInfo)
      })
    }
  }
</script>
