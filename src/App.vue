<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import Card from './components/Card.vue';

import axios from "axios";
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppBody,
    Card
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.loading = true;
    axios.get(store.apiURL).then((resp) => {
      this.store.cards = resp.data.data;
      this.store.cards.slice(0, 20);
      store.loading = false;
    })
    // console.log(this.store.cards);
  }
}
</script>

<template>
  <AppHeader />
  <div class="card-section">
    <AppBody />

  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
