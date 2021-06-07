<template>
	<div class="image-item" >
		<a :href="downloadUrl" class="download-icon"> &#8595;</a>
		<img :src="image.image_src" v-on:click="preview" />
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