<template>
    <div class="home"> 
        <!-- file uploader --> 
        <file-uploader  @update="storeImage"/>   
        <div class="link-uploader text-center">
            <form ref="form" @submit.prevent="onSubmitUrl">
                <div class="row justify-content-center">
                    <div class="col-sm-6">
                        or enter the image here
                        <input type="url"  v-model="image_src" class="form-control" /> 
                        <br>{{image_src}}<br>
                        <button>Extract</button>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <latest-image></latest-image>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import FileUploader from '../components/uploader/FileUploader.vue'
import LatestImage from '../components/images/LatestImages.vue'



export default {
    components: { FileUploader, LatestImage},
    name: "Home",
    data(){
        return{
            image_src: '',
            selectedFile : []
        }
    },

    computed: { ...mapGetters(["isLoading"]) },


    methods: {
        ...mapActions(["storeImage","storeImageByUrl"]),
        onSubmitUrl(){
            this.storeImageByUrl(this.image_src);
        }
    },
    
    created() {
    }
};
</script>
