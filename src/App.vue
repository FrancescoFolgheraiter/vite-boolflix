<script>
//importazione app
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
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
		AppFooter
	},
	methods:{

	}
}

</script>

<template>
	<h1>My template Vite Vue Sass</h1>
	<AppHeader/>
	<AppMain/>
	<AppFooter/>
</template>

<style lang="scss">
@use"assets/scss/main.scss" as *;

</style>
