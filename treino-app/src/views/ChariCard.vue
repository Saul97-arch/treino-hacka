<template>
  <v-app v-if="PokeInfo.sprites">
    <!-- IMAGEM -->
    <v-img
      :src="PokeInfo.sprites.other['official-artwork'].front_default">
    </v-img>
    <!-- INFORMAÇÕES DO POKEMON -->
    <ul>
      <li><strong>Name:</strong> {{ PokeInfo.name }}</li>
      <li><strong>Weight:</strong> {{ PokeInfo.weight }}Kg</li>
      <li><strong>Height:</strong> {{ PokeInfo.height }}M</li>
    </ul>
  </v-app>
</template>

<script>
export default {
  name: "ChariCard",
  data() {
    return {
      PokeInfo: [],
    };
  },
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.PokeInfo = json;
        console.log(this.PokeInfo);
      });
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
  color: white;
  text-shadow: 2px 2px 7px #01579b;
  font-size: 19px;
}
ul {
  background-color: #01579b;
  border-top: 3px solid #ffd600;
  border-bottom: 3px solid #ffd600;
  border-left: 15px solid #ffd600;
  border-right: 15px solid #ffd600;
}
</style>