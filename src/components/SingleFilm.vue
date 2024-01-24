<script>
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
			{{ film.original_language }}
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
