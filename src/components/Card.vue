<script>

export default {
    name: "AppBody",
    props: {
        card: Object,
        index: Number
    }
}
</script>

<template>
    <div class="card border border-0 rounded-0 p-0 m-3 text-center">
        <img :src="card.card_images[0].image_url" alt="">
        <div class="mt-1">
            {{ card.name }}
        </div>
        <div class="mt-2">
            {{ card.archetype }}

        </div>

    </div>
</template>

<style scoped lang="scss">
.card {
    width: calc(100% / 5);
    height: 350px;

    img {
        width: 100%;

    }
}
</style>