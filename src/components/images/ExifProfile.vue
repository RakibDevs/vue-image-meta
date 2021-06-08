<template>
	<div v-if="image" class="exif-information">
		<!-- image information -->
		<div class="row">
			<div class="col-sm-4">
				<div class="image-block panel-custom">
					<img class="created-image-preview" :src="image.image_src">
				</div>
			</div>
			<div class="col-sm-8">
				<div class="panel-custom">
					<ul class="exif-meta-items">
						<li><b>Height</b> {{image.height}}</li>
						<li><b>Width</b> {{image.width}}</li>
						<li><b>Mime Type</b> {{image.mime_type}}</li>
						<li><b>Actual Source</b> <a v-if="image.actual_src" :href="image.actual_src">View</a></li>
						<li><b>Created</b> {{image.created_ago}}</li>
					</ul>
					<h5 class="mt-4">Author & Copyright</h5>
					<ul v-if="image.meta" class="exif-meta-items">
						<li v-for="(item, key, index) in image.meta.author" v-bind:key="index"><b>{{key}} :</b> <span v-if="item">{{item}}</span> <span v-else>Not found!</span></li>
					</ul>
					<p v-else class="text-danger">No information found</p>
				</div>
			</div>
		</div>
		<!-- if exif information exist -->
		<div class="row" >
			<div class="col-sm-6">
				<div class="panel-custom">
					

					<h4 class="exif-profile-header text-theme">Camera</h4>
					<ul v-if="image.meta" class="exif-meta-items">
						<li v-for="(item, key, index) in image.meta.camera" v-bind:key="index"><b>{{key}} :</b> {{item}}</li>
					</ul>
					<p v-else class="text-danger">No information found</p>
				</div>
				
			</div>
			<div class="col-sm-6">
				<div class="panel-custom">
					<h4  class="exif-profile-header text-theme">EXIF</h4>
					<ul v-if="image.meta" class="exif-meta-items">
						<li v-for="(item, key, index) in image.meta.exif" v-bind:key="index"><b>{{key}} :</b> {{item}}</li>
					</ul>
					<p v-else class="text-danger">No information found</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {

		props:['image'],

		computed: { 
		},
		methods: {
		},
		created() {
			console.log('got from item')
		}

	}
</script>