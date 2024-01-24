import { reactive } from 'vue';

export const store = reactive({
    urlApiFilms:"https://api.themoviedb.org/3/search/movie?api_key=db9df9f71721b8623e12907efc8216b8",
    urlApiTv:"https://api.themoviedb.org/3/search/mtv?api_key=db9df9f71721b8623e12907efc8216b8",
    films:[],
    series:[],
    searchFilm:""
});