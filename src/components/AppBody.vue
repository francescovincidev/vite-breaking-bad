<script>
import Card from './Card.vue';
import SelectType from './SelectType.vue';
import { store } from "../store";

export default {
    name: "AppBody",
    data() {
        return {
            store
        }
    },
    components: {
        Card,
        SelectType
    },

}
</script>

<template>
    <div class="py-5">

        <div class="container w-75">
            <SelectType class="mb-5" @filter="$emit(`filterUp`)" />
            <div v-if="store.loading" class="text-center">CARICAMENTO</div>
            <div class="card-section row column-5 justify-content-center boredr-0">
                <Card v-for="(card, index) in store.cards" :key="index" :card="card" :index="index" />

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    background-color: sandybrown;
    height: 100%;

    .card-section {
        background-color: white;

    }

}
</style>