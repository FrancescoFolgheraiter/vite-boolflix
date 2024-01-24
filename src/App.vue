<script>
//importazione app
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
	data() {
		return{

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

<style lang="scss" scoped>
@use"assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss";
</style>
