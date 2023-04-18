import { reactive } from "vue";

export const store = reactive({
    cards: [],
    typeList: ["Alien", "Noble Knight", "Blue-Eyes"],
    selectedType: "",
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    loading: true,
});