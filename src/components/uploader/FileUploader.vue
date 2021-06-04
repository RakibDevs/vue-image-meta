<template>
    <div class="container" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop($event)">
        <div class="drop" v-show="dropped == 2"></div>
        <!-- Error Message -->
        <div v-show="error" class="error">
            {{ error }}
        </div>

        <!-- To inform user how to upload image -->
        <div v-show="Imgs.length == 0" class="beforeUpload">
            <input type="file" style="z-index: 1" accept="image/*" ref="uploadInput"  @change="previewImgs"/>
      
            <p class="mainMessage">
                {{ uploadMsg ? uploadMsg : "Click to upload or drop your images here" }}
            </p>
        </div>
        <div class="imgsPreview" v-show="Imgs.length > 0">
            <div class="imageHolder" v-for="(img, i) in Imgs" :key="i">
                <img :src="img" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            error: "",
            files: null,
            dropped: 0,
            Imgs: [],
        };
    },
    props: {
        max: Number,
        uploadMsg: String,
        maxError: String,
        fileError: String,
        // emit storeImage method 
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
                    this.previewImgs();
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
        readAsDataURL(file) {
            return new Promise(function (resolve, reject) {
                let fr = new FileReader();
                fr.onload = function () {
                    resolve(fr.result);
                };
                fr.onerror = function () {
                    reject(fr);
                };
                fr.readAsDataURL(file);
            });
        },
        previewImgs(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (this.dropped == 0) this.files = files[0];
          this.error = "";
          this.$emit("change", this.files);
          
          this.Imgs = this.readAsDataURL(this.files);

          this.$emit('update', this.files)
        },
    },
};
</script>
