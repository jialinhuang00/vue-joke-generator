<template>
<div class="col-md-6">
  <div class="joke-card">
    <div class="card-block">
      <!-- click="removeJoke(index) works too" -->
      <button class="close" @click="removeJoke"><span>&times;</span></button>
      <p><u>{{joke.setup}}</u></p>
      <p><em>{{joke.punchline}}</em></p>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["joke", "index"],
  methods: mapActions(["removeJoke"])
};
</script>
