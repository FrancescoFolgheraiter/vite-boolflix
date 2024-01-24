<script>
//importazione axios
import axios from 'axios';
export default{
	data() {
		return{
		};
	},
	props:{
		film:Object	
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
			{{ film.title }}
		</div>
		<div>
			{{ film.original_title }}
		</div>
		<div>
			<img :src="'https://flagsapi.com/'+ film.original_language +'/flat/64.png'" :alt="film.original_language">
		</div>
		<div>
			{{ film.vote_average }}
		</div>
	</div>
</template>

<style lang ="scss" scoped>
.my-card{
	height: 350px;
	width: 250px;
}
</style>
