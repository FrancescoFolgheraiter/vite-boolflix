<script>
//importazione axios
import axios from 'axios';

export default{
	data() {
		return{
			actors:[]
		};
	},
	props:{
		film:Object,
		name:String,
		originalName:String	
	},
	components:{
		
	},
	methods:{
		createCountryFlag(){
			this.film.original_language = this.film.original_language.toUpperCase()
			if(this.film.original_language == "EN"){
				this.film.original_language = "GB"
			}
			else if(this.film.original_language == "JA"){
				this.film.original_language = "JP"
			}
			else if(this.film.original_language == "KO"){
				this.film.original_language = "KR"
			}
			else if(this.film.original_language == "ZH"){
				this.film.original_language = "CN"
			}
			else if(this.film.original_language == "HI"){
				this.film.original_language = "IN"
			}
			else if(this.film.original_language == "HE"){
				this.film.original_language = "IL"
			}
			else if(this.film.original_language == "EL"){
				this.film.original_language = "GR"
			}
		},
		updateVote(){
			this.film.vote_average = Math.ceil(Math.round(this.film.vote_average) / 2);
		},
		getActorsApi(){
			const urlActors = "https://api.themoviedb.org/3/movie/"+ this.film.id +"/credits?api_key=db9df9f71721b8623e12907efc8216b8"
			//chiamata API per ricercare i degli attori del film
			axios.get(urlActors)
			.then((response) => {
				for (let i = 0; i < 4; i++) {
					this.actors.push(response.data.cast[i].name)
				}
			}).catch((error) => {
				this.actors = []
				console.log("Errore ",error);
			});
		}
	},
	mounted(){
		this.createCountryFlag();
		this.updateVote();	
	}
}

</script>

<template>
	<div class="col-12 col-sm-6 col-md-3">
		<div class="my-card text-center mb-3 mt-3 text-white" @click="getActorsApi()">
			<div class="mt-2">
				{{ name }}
			</div>
			<div class="mt-2">
				{{ originalName }}
			</div>
			<div>
				<img :src="'https://flagsapi.com/'+ film.original_language +'/flat/64.png'" :alt="film.original_language">
			</div>
			<div>
				<i class="fa-solid fa-star" v-for="(elem,i) in 5" :key="i" :class="{active: film.vote_average >= i}"></i>
			</div>
			<div>
				{{film.overview}}
			</div>
			<div class="actors" v-if="(this.actors.length>0)">
				<div v-for="(elem,i) in this.actors" :key="i">{{ elem }}</div>
			</div>
			<div>
				<img v-if="(film.poster_path != null)" :src="'http://image.tmdb.org/t/p/w342'+ film.poster_path" alt="">
				<div v-else>Immagine non trovata</div>
			</div>
		</div>
	</div>
</template>

<style lang ="scss" scoped>
.my-card{
	height: 350px;
	width: 250px;
	border:3px solid white;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
	font-size: 0.8rem;
	font-weight: bold;
	.active{
		color:orange;
	}
	.actors{
		position:absolute;
		top:0;
		left:0%;
		z-index: 1;
	}

	:last-child img {
		width:100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 1;

		&:hover{
			opacity: 0.3;
		}
	}
}
</style>
