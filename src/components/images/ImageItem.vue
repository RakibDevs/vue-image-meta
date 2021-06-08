<template>
	<div class="image-item" >
		<img :src="image.image_src" v-on:click="preview" />
		<p class="d-flex justify-content-between image-info">
			<span>{{image.created_ago}}</span> 
			<a :href="downloadUrl" >Download</a>
		</p>
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
			preview(){
				this.$emit("update", this.image);
				this.$emit("change", true);
				console.log('hi')
			}
		},
		created(){
			this.downloadUrl = process.env.VUE_APP_API_ENDPOINT+'image/download?src='+this.image.src
		}
	}
	
</script>