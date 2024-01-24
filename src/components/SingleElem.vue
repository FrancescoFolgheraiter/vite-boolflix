<script>

export default{
	data() {
		return{
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
		},
		updateVote(){
			this.film.vote_average = Math.ceil(Math.round(this.film.vote_average) / 2);
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
		<div class="my-card text-center mb-3 mt-3 text-white">
			<div>
				{{ name }}
			</div>
			<div>
				{{ originalName }}
			</div>
			<div>
				<img :src="'https://flagsapi.com/'+ film.original_language +'/flat/64.png'" :alt="film.original_language">
			</div>
			<div>
				<i class="fa-solid fa-star" v-for="(elem,i) in 5" :key="i" :class="{active:film.vote_average >= i}"></i>
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
	.active{
		color:orange;
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
