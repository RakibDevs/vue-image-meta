<template>
	<div :v-if="images" class="image-gallery">
		<div class="row">
			<div class="col-sm-3" v-for="image in images" :key="image.id">
				<image-item :image='image'/>
			</div>
		</div>

		<div v-if="productsPaginatedData !== null" class="vertical-center mt-2 mb-5">
	      	<v-pagination
	        	v-model="query.page"
	        	:pages="productsPaginatedData.pagination.total_pages"
	        	:range-size="2"
	        	active-color="#DCEDFF"
	        	@update:modelValue="fetch"
	      	/>
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
			...mapActions(["getImages"]),
			fetch(){
				this.getImages()
			}
		},
		created() {
			this.getImages()
		}
	};
</script>