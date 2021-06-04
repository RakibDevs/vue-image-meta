<template>
    <div class="home"> 
        <!-- file uploader --> 
        <file-uploader  @update="storeImage"/>          
        <!-- <div class="file-upload-container">
            <div v-bind="getRootProps()">
                <input v-bind="getInputProps()" >
                <p v-if="isDragActive">Drop the image here ...</p>
                <div class="text-center" v-else>

                    Drag and drop the image here, or click to select the image
                </div>
            </div>
        </div> -->
        <!-- upload file from link -->
        <div class="link-uploader text-center">
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    or enter the image here
                    <input type="url" name="" class="form-control"> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
//import { useDropzone } from 'vue3-dropzone'
import FileUploader from '../components/uploader/FileUploader.vue'



export default {
    components: { FileUploader},
    name: "Home",
    data(){
        return{
            selectedFile : []
        }
    },

    computed: { ...mapGetters(["isLoading"]) },


    methods: {
        ...mapActions(["storeImage"]),
    },
    
    created() {
        //this.fetchAllProducts(1);

    }
};
</script>
