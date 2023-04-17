<script>
import Card from './Card.vue';
import { store } from "../store";

export default {
    name: "AppBody",
    data() {
        return {
            store
        }
    },
    components: {
        Card
    },
}
</script>

<template>
    <div class="py-5">

        <div class="container w-75">
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