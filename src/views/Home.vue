<template>
    <div class="home mt-4"> 
        <!-- file uploader --> 
        <div class="text-center ">
            <h4 class="text-cursive font-weight-bold">Extract EXIF information from image?</h4>
        </div>
        <p class="p-3"></p>
        <file-uploader  @update="storeImage"/>   
        <div class="link-uploader text-center">
            <form ref="form" @submit.prevent="onSubmitUrl">
                <div class="row justify-content-center">
                    <div class="m-2 text-muted">or</div>
                    <div class="link-extractor">
                        <input type="url"  v-model="imageSrc" class="form-control" placeholder="Enter a valid url" /> 
                        <button class="btn btn-extractor">Extract </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="mt-3">
            <exif-profile :image="createdImage"/>
        </div>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import FileUploader from '../components/uploader/FileUploader.vue'
import ExifProfile from '../components/images/ExifProfile.vue'



export default {
    components: { FileUploader, ExifProfile},
    name: "Home",
    data(){
        return{
            imageSrc: '',
            selectedFile : []
        }
    },

    computed: { ...mapGetters(["isLoading","createdImage"])

     },


    methods: {
        ...mapActions(["storeImage","storeImageByUrl"]),
        onSubmitUrl(){
            this.storeImageByUrl(this.imageSrc);

        }
    },
    mounted(){
        console.log(this.createdImage)
    },
    
    created() {
    }
};
</script>
