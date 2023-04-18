<script>
import { store } from "../store";

export default {
    name: "SelectType",
    emits: ["filter"],
    data() {
        return {
            store,
            typeSelected: "",
        }
    },
    props: {
        card: Object,
        index: Number
    }
}
</script>

<template>
    <select class="form-select w-25" aria-label="Default select example" @change="$emit(`filter`)"
        v-model="store.selectedType">
        <option selected value="">All</option>
        <option v-for="(type, index) in store.typeList" :key="index" :value="type"> {{ type }} </option>
    </select>
</template>

<style scoped lang="scss"></style>