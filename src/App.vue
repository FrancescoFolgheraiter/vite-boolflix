<script>
//importazione app
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
//importazione axios
import axios from 'axios';
//importazione store
import { store } from './store.js';


export default{
	data() {
		return{
			store
		};
	},
	components:{
		AppHeader,
		AppMain,
	},
	methods:{
		getFilmsApi(){
			this.store.films = []
			console.log("partita function api")
			axios.get(this.store.urlApiFilms, {
				params:{
					query:this.store.searchFilm.length > 0 ? this.store.searchFilm:null,
					language: "it"
				}
			}).then((response) => {
				console.log(response)
				this.store.films= response.data.results
				console.log("film:",this.store.films)
			}).catch((error) => {
				this.store.films = []
				console.log("Errore ",error)
			})
		}
	},
	mounted(){
		this.getFilmsApi()
	}
}

</script>

<template>
	<AppHeader/>
	<AppMain @filmSearch="getFilmsApi()"/>

</template>

<style lang="scss">
@use"assets/scss/main.scss" as *;

</style>
