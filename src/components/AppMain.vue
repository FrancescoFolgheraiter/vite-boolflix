<script>
//importazione elemento SingleFilm
import SingleElem from './SingleElem.vue';
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	components:{
		SingleElem		
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
			<SingleElem class="col-3" v-for="(elem, i) in this.store.films" :kay="i" :film="elem" :name="elem.title" :originalName="elem.original_title"/>
		</div>
		<div>
			serie tv
		</div>
		<div class="row">
			<SingleElem class="col-3" v-for="(elem, i) in this.store.series" :kay="i" :film="elem" :name="elem.name" :originalName="elem.original_name"/>
		</div>

	</main>
</template>

<style lang ="scss" scoped>
</style>
