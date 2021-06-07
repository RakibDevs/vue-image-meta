<template>
	<div v-if="image" class="exif-information">
		<!-- image information -->
		<div class="row">
			<div class="col-sm-4">
				<div class="image-block panel-custom text-center">
					<img class="created-image-preview" :src="image.image_src">
				</div>
			</div>
			<div class="col-sm-8">
				<div class="panel-custom">
					<table border="0">
						<tr>
							<td><b>Height</b></td>
							<td>{{image.height}}</td>
						</tr>
						<tr>
							<td><b>Width</b></td>
							<td>{{image.width}}</td>
						</tr>
						<tr>
							<td><b>Mime Type</b></td>
							<td>{{image.mime_type}}</td>
						</tr>
						<tr>
							<td><b>Created</b></td>
							<td>{{image.created_ago}}</td>
						</tr>
						<tr>
							<td><b></b></td>
							<td></td>
						</tr>
						<tr>
							<td><b></b></td>
							<td></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<!-- if exif information exist -->
		<div class="row">
			<div class="col-sm-6">
				
			</div>
			<div class="col-sm-6"></div>
		</div>
	</div>
</template>

<script>

	export default{


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