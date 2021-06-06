<template>
	<div :v-if="images" class="image-gallery">
		<div class="row">
			<div class="col-sm-3" v-for="image in images" :key="image.id">
				<image-item :image='image'/>
			</div>
		</div>

		<div v-if="paginatedImages !== null" class="vertical-center mt-2 mb-5">
			<v-pagination
				v-model="query.page"
				:pages="paginatedImages.pagination.total_pages"
				:range-size="2"
				active-color="#DCEDFF"
				@update:modelValue="fetch"
			/>
		</div>
	</div>
</template>

<script>
	
	import { mapGetters, mapActions } from "vuex"
	import VPagination from "@hennge/vue3-pagination";
	import "@hennge/vue3-pagination/dist/vue3-pagination.css";
	
	import ImageItem from '../components/images/ImageItem.vue'

	export default {
		data() {
			return {
				query: {
					page: 1,
					search: "",
				},
			};
		},
		components: { ImageItem,VPagination},
		computed: { ...mapGetters(["isLoading","images","paginatedImages"]) },

		methods: {
			...mapActions(["getImages"]),
			fetch(){
				this.getImages(this.query)
			}
		},
		created() {
			this.getImages(this.query)
			console.log(this.paginatedImages)
		}
	};
</script>