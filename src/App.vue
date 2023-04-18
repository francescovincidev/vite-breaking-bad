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
    this.getCards();

  },
  methods: {
    getCards() {
      this.store.loading = true;
      const params = {};
      if(this.store.selectedType){
        params.archetype = this.store.selectedType;
      }
      axios.get(this.store.apiURL,{
        params
      }).then(resp =>{
        this.store.cards = resp.data.data;
      }).catch(error =>{
        console.log(error);
      }).finally(() =>{
        this.store.loading = false;
      })
    },
    filtrType() {
      this.getCards();
    }
  }
}
</script>

<template>
  <AppHeader />
  <div class="card-section">
    <AppBody @filterUp="filtrType" />

  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
