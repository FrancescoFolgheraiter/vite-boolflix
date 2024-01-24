<script>
//importazione elemento SingleFilm
import SingleFilm from './SingleFilm.vue';
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		SingleFilm		
	},
	methods:{

	}
}

</script>

<template>
	<main>
		<!--parte che successivamente andrò ad inserire in un componente search-->
		<div class="row">
			<div class="col-6"></div>
			<div class="col-6">
				<form @submit.prevent="$emit('filmSearch')" action="">
					<input type="text" v-model="store.searchFilm" >
					<button type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
		<!---->
		<div class="row">
			<SingleFilm class="col-3" v-for="(elem, i) in this.store.films" :kay="i" :film="elem"/>
		</div>

	</main>
</template>

<style lang ="scss" scoped>
</style>
