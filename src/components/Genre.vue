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
		genre:Object
	},
	methods:{
		
	}
}

</script>

<template>
<button>
	{{ genre.name }}
</button>
</template>

<style lang ="scss" scoped>

</style>
