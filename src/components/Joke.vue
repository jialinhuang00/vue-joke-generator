<template>
<div class="col-md-6">
  <div class="joke-card">
    <div class="card-block">
      <!-- click="removeJoke(index) works too" -->
      <!-- <p><u>{{joke.setup}}</u></p> -->
      <p><em>{{joke.value}}</em></p>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["joke", "index"],
  // methods: mapActions(["removeJoke"])
};
</script>
