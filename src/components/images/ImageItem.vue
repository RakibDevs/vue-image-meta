<template>
	<div class="image-item" v-on:click="download">
		<a :href="downloadUrl" > download</a>
		<img :src="image.image_src" />
	</div>
</template>

<script>
	import { mapActions } from "vuex"

	export default {
		props: ['image'],
		data() {
			return{
				downloadUrl : null
			}
		},
		
		methods: {
			...mapActions(["downloadImage"]),
		},
		created(){
			this.downloadUrl = process.env.VUE_APP_API_ENDPOINT+'image/download?src='+this.image.src
		}
	}
	
</script>