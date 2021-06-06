<template>
	<div class="image-gallery">
		<div class="row">
			<div class="col-sm-3" v-for="image in images" :key="image.id">
				<image-item :image='image'/>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex"
	import ImageItem from './ImageItem.vue'


	export default {
		components: { ImageItem},
		computed: { ...mapGetters(["isLoading","images"]) },

		methods: {
			...mapActions(["getImages"])
		},
		created() {
			this.getImages()
			console.log(this.images)
		}
	};
</script>