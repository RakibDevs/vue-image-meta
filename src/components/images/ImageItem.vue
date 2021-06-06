<template>
	<div class="image-item">
		<img :src="image.src"/>
	</div>
</template>

<script>
	export default {
		props: ['image'],
	}
	
</script>