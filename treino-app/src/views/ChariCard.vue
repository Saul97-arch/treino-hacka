<template>
    <v-app v-if="PokeInfo.sprites">
      <v-img :src="PokeInfo.sprites.other['official-artwork'].front_default"></v-img>
      <ul>
        <li><strong>Name:</strong> {{PokeInfo.name}}</li>
        <li><strong>Weight:</strong> {{PokeInfo.weight}}Kg</li>
        <li><strong>Height:</strong> {{PokeInfo.height}}M</li>
      </ul>
    </v-app>
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

<style scoped>
  ul li {
    list-style: none;
    color: #40C4FF;
    text-shadow: 2px 2px 7px #01579B;
    font-size: 19px;
  }
  ul {
    background-color: #01579B;
    border-top: 3px solid #FFD600;
    border-bottom: 3px solid #FFD600;
    border-left: 15px solid #FFD600;
  }
</style>