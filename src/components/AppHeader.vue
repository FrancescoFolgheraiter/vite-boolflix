<script>
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		
	},
	methods:{

	}
}

</script>

<template>
	<header class="d-flex justify-content-between align-items-center pe-5">
		<div class="container-logo">
			<img src="/img/NetflixLogo.jpg" alt="NetflixLogo">
		</div>
		<form @submit.prevent="$emit('filmSearch')" action="">
			<input type="text" v-model="store.searchFilm" >
			<button type="submit">
				Search
			</button>
		</form>		
	</header>
</template>

<style lang ="scss" scoped>
header{
	background-color: #101010;
	.container-logo{
	height: 100px;
	img{
		height:100%;
	}
}
}

</style>
