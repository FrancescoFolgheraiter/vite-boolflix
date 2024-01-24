import { reactive } from 'vue';

export const store = reactive({
    urlApiFilms:"",
    urlApiTv:"",
    films:[],
    series:[],
    searchFilm:""
});