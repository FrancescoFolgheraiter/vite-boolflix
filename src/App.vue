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
			//chiamata API per ricercare i film
			axios.get(this.store.urlApiFilms, {
				params:{
					query:this.store.searchFilm.length > 0 ? this.store.searchFilm:null,
					language: "it"
				}
			}).then((response) => {
				this.store.films= response.data.results
			}).catch((error) => {
				this.store.films = []
				console.log("Errore ",error)
			})
			
			//chiamata API per ricercare serie tv
			this.store.series = [];
			axios.get(this.store.urlApiTv, {
				params:{
					query: this.store.searchFilm.length > 0 ? this.store.searchFilm:null,
					language: "it"
				}
			}).then((response) => {
				this.store.series= response.data.results	
			}).catch((error) => {
				this.store.series= []
				console.log("Errore ",error)
			})
			
		}
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
