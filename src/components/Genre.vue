<script>
//importazione store
import { store } from '../store.js';

export default{
	data() {
		return{
			store
		};
	},
	props:{
		genre:Object,
	},
	methods:{
		addClassActive(){
			if(this.store.activeGenre.length > 0){
				this.store.activeGenre = "";
			}
			else{
				this.store.activeGenre = this.genre.name;
			}
			console.log(this.store.activeGenre)
		}
	}
}

</script>

<template>
<li class="mt-3 p-1" @click="addClassActive()" :class="{active: this.store.activeGenre == genre.name}">
	{{ genre.name }}
</li>
</template>

<style lang ="scss" scoped>
li{
	list-style: none;
	color:red;
	border: 1px solid red;
}
.active{
	background-color: orange;
}
</style>
