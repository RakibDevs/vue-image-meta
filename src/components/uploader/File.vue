<template>
	
</template>

<script>

	import { useDropzone } from 'vue3-dropzone'

	export default {
		setup() {
			function onDrop(acceptFiles, rejectReasons) {
				console.log(acceptFiles)
				console.log(rejectReasons)
			}

			const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })

			return {
				getRootProps,
				getInputProps,
				...rest
			}
		}
	}
</script>