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
		}
	},
	mounted(){
		this.createCountryFlag();	
	}
}

</script>

<template>
	<div class="my-card text-center ">
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
			{{ film.vote_average }}
		</div>
		<div>
			<img :src="'http://image.tmdb.org/t/p/w500'+ film.backdrop_path" alt="">
		</div>
	</div>
</template>

<style lang ="scss" scoped>
.my-card{
	height: 350px;
	width: 250px;
	:last-child img {
		width:100%
	}
}
</style>
