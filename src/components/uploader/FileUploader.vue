<template>
    <div class="file-upload-container" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop($event)">
        <div class="drop" v-show="dropped == 2"></div>
        <!-- Error Message -->
        <div v-show="error" class="error">
            {{ error }}
        </div>

        <!-- To inform user how to upload image -->
        <div class="upload-area">
            <img height="50" src="/cloud.svg"/>
            <input type="file" style="z-index: 1" accept="image/*" ref="uploadInput"  @change="selectImage"/>
      
            <p class="mainMessage">
                {{ uploadMsg ? uploadMsg : "Click to upload or drop your images here" }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            error: "",
            files: null,
            dropped: 0
        };
    },
    props: {
        max: Number,
        uploadMsg: String,
        maxError: String,
        fileError: String,
        method: { type: Function },
    },
    methods: {
        dragOver() {
            this.dropped = 2;
        },
        dragLeave() {},
        drop(e) {
            let files = e.target.files || e.dataTransfer.files;
            let status = true;
            if (e && files) {
                if (files.type.startsWith("image") === false) status = false;
                
                if (status == true) {
                    this.files = files[0];
                    this.$emit('update', this.files)
                } else {
                  this.error = this.$props.fileError
                    ? this.$props.fileError
                    : `Unsupported file type`;
                }
            }
            this.dropped = 0;
            
        },
        append() {
            this.$refs.uploadInput.click();
        },
        selectImage(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (this.dropped == 0) this.files = files[0];
            this.error = "";
            this.$emit('update', this.files)
        },
    }
};
</script>
