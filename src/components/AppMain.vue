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
		<div class="container">
			<div>
				<h2>
					Films
				</h2>
			</div>
			<div class="row">
				<SingleElem  v-for="(elem, i) in this.store.films" :kay="i" :film="elem" :name="elem.title" :originalName="elem.original_title"/>
			</div>
			<div>
				<h2>
					Serie Tv
				</h2>
			</div>
			<div class="row">
				<SingleElem  v-for="(elem, i) in this.store.series" :kay="i" :film="elem" :name="elem.name" :originalName="elem.original_name"/>
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
