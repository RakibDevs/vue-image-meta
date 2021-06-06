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
                        <button>Extract </button>
                    </div>
                </div>
            </form>
        </div>
        <div>
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import FileUploader from '../components/uploader/FileUploader.vue'



export default {
    components: { FileUploader},
    name: "Home",
    data(){
        return{
            image_src: '',
            selectedFile : []
        }
    },

    computed: { ...mapGetters(["isLoading","createdImage"]) },


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
