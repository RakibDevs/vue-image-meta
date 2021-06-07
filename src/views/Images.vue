<template>
	<div :v-if="images" class="image-gallery">
		<div class="row">
			<div class="col-sm-3" v-for="image in images" :key="image.id">
				<!-- Fetch each image -->
				<image-item :image='image' @update="modalImage"/>
			</div>
		</div>
		<!-- apply laravel pagination using @hennge/vue3-pagination paginator -->

		<div v-if="paginatedImages !== null" class="justify-content-center mt-2 mb-5">
			<v-pagination
				v-model="query.page"
				:pages="paginatedImages.pagination.total_pages"
				:range-size="2"
				active-color="#DCEDFF"
				@update:modelValue="fetch"
			/>
		</div>
		<!-- show image details with exif in modal -->
		<div class="image-modal" v-if="showImageModal"> 
			<div class="image-properties">
				<exif-profile :image='imagePreview'/>
			</div>
			<span class="close-modal" @click="closeModal">X</span>

		</div>
	</div>
	
</template>

<script>
	import { mapGetters, mapActions } from "vuex"
	import VPagination from "@hennge/vue3-pagination";
	import "@hennge/vue3-pagination/dist/vue3-pagination.css";
	
	import ImageItem from '../components/images/ImageItem.vue'
	import ExifProfile from '../components/images/ExifProfile.vue'
	
	export default {
		data() {
			return {
				query: {
					page: 1,
					search: "",
				},
				showImageModal:false,
				imagePreview: null
			};
		},
		components: { ImageItem,VPagination,ExifProfile},
		computed: { ...mapGetters(["isLoading","images","paginatedImages"]) },
		methods: {
			...mapActions(["getImages"]),
			fetch(){
				this.getImages(this.query)
			},
			modalImage($v){
				this.imagePreview = $v
				this.showImageModal = true;
			},
			closeModal(){
				this.showImageModal = false;
				this.imagePreview = null
			}
		},
		created() {
			this.getImages(this.query)
		}
	};
</script>