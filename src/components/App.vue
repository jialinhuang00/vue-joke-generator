<template>
  <div id="app">
    <h3> Got Jokes?</h3>
    <button class="btn btn-sm btn-outline-success" @click="initJokes">Get a joke</button>
    <!-- <button class="btn btn-sm btn-outline-success" @click="addJoke">Get 1 jokes</button> -->
    <br>
    <br>
    <!-- <span v-for="(type,i) in types" :key="i">
      <input
      type="checkbox"
      :value="type"
      v-model="checkedTypes"
      checked>
      <label for="">{{type}}</label>&nbsp;
    </span> -->
    <div class="col-md-12 row" style="padding:64px">
      <!-- <p>{{$store.state.jokes.length && $store.state.jokes[0].value}}</p> -->
      <Joke
        v-for="(joke, i) in $store.state.jokes"
        :joke="joke"
        :index="i"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke";
export default {
  // data() {
  //   return {
  //     types: ["general", "knock-knock", "programming"],
  //     checkedTypes: ["general", "knock-knock", "programming"]
  //   };
  // },
  methods: mapActions(["initJokes", /* "addJoke"*/]),
  components: {
    Joke
  }
};
</script>
