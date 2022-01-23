<template>
  <div id="app">
    <h1>Random Gift Cat</h1>
    <section class="formulario">
      <form>
        <div>
          <label for="id_titulo">Titulo: </label>
          <input id="id_titulo" type="text" v-model="titulo" />
        </div>
        <div>
          <label for="id_filtro">Filtro: </label>
          <select id="id_filtro" v-model="filtro">
            <option value="blur">blur</option>
            <option value="mono">mono</option>
            <option value="sepia">sepia</option>
            <option value="negative">negative</option>
            <option value="paint">paint</option>
            <option value="pixel">pixel</option>
          </select>
        </div>
        <div>
          <label for="id_color">Color: </label>
          <select id="id_color" v-model="color">
            <option value="green">verde</option>
            <option value="red">rojo</option>
            <option value="blue">azul</option>
            <option value="yellow">amarillo</option>
          </select>
        </div>
        <div>
          <label for="id_tamaño">Tamaño: </label>
          <input id="id_tamaño" type="text" v-model="tamaño" />
        </div>
      </form>
    </section>
    <section>
      <button type="submit" @click="buildGift">Obtener mi gatito</button>
    </section>
    <section>
      <ViewGiftCat :url="giftCat" />
    </section>
  </div>
</template>

<script>
import { getGiftByParamas } from "@/api";
import ViewGiftCat from "@/components/ViewGiftCat";

export default {
  name: "App",
  components: {
    ViewGiftCat,
  },
  data() {
    return {
      titulo: "",
      filtro: "",
      color: "",
      tamaño: "",
      giftCat: "",
    };
  },
  methods: {
    async buildGift() {
      const { titulo, filtro, color, tamaño } = this;
      this.giftCat = await getGiftByParamas(titulo, filtro, color, tamaño);
    },
  },
};
</script>

<style>
html {
  background-color: aqua;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  box-sizing: border-box;
}

form {
  max-width: 400px;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}

form div {
  width: 100%;
  text-align: start;
  margin: 1rem;
}
form div label {
  width: 20%;
  display: inline-block;
}

form div input,
select {
  width: 70%;
  display: inline-block;
}

button {
  margin-top: 2rem;
}

section {
  margin-top: 1rem;
}

.formulario {
  background-color: deeppink;
  margin: 0;
  padding: 2rem 0rem;
}
</style>
