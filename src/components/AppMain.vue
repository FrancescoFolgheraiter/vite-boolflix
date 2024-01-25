<script>
//importazione axios
import axios from 'axios';

//importazione elemento SingleFilm
import SingleElem from './SingleElem.vue';

//importazione barra generi
import Genre from './Genre.vue';

//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		SingleElem,
		Genre		
	},
	methods:{
		getGenresApi(){
			console.log("partia chiamata Genres")
			axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=db9df9f71721b8623e12907efc8216b8").then((response) => {
				this.store.genres = response.data.genres
			}).catch((error) => {
				console.log("errore",error);
			})
		}
	},
	mounted(){
		this.getGenresApi();
	}
}

</script>

<template>
	<main>
		<Genre v-for="(elem,i) in this.store.genres" :key="i" :genre="elem"/>
		<div class="container">
			<div>
				<h2>
					Films
				</h2>
			</div>
			<div class="row">
				<SingleElem  v-for="(elem, i) in this.store.films" :kay="i" :film="elem" :name="elem.title" :originalName="elem.original_title" :typeApi="'movie'"/>
			</div>
			<div>
				<h2>
					Serie Tv
				</h2>
			</div>
			<div class="row">
				<SingleElem  v-for="(elem, i) in this.store.series" :kay="i" :film="elem" :name="elem.name" :originalName="elem.original_name" :typeApi="'tv'"/>
			</div>
		</div>

	</main>
</template>

<style lang ="scss" scoped>
h2{
	color:#616161;
	margin:20px auto;
}
</style>
