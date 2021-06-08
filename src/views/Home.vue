<template>
    <div class="home mt-4">
        <div class="row">
            <div class="col-sm-6">
                <h4 class="text-cursive font-weight-bold">Extract <span class="text-theme">EXIF</span><br> from Image or link?</h4>
                <p class="text-muted" style="width: 72%">IMGEXIF is a tool to extract <span class="text-danger">EXIF data</span>, which is sometimes called metadata, is a collection of information that is stored by the camera at the moment you take a photo. </p>
            </div>
            <div class="col-sm-6 relative"  >
                <img class="arrow" src="/arrow.svg"/>
                <!-- attach file uploader & listen storeImage  -->
                <file-uploader @update="dragOrInsertImage"/>
                <!-- upload anf fetch exif via image -->   
                <div class="link-uploader text-center">
                    <form ref="form" @submit.prevent="onSubmitUrl">
                        <div class="row justify-content-center">
                            <div class="m-2 text-muted">or</div>
                            <div class="link-extractor">
                                <input type="url"  v-model="imageSrc" class="form-control" placeholder="Enter a valid url" @input="change($event)" @change="change($event)" /> 
                                <button v-if="isValid" class="btn btn-extractor" >Extract </button>
                                <button v-if="!isValid" class="btn btn-extractor" disabled>Extract </button>
                            </div>
                            <div class="error" v-if="!isValid">Provided URL is Invalid! please insert a valid URL.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        <div class="text-center ">
            
        </div>
        <div class="mt-3">
            <div v-if="isUploading" class="text-center loader">
                <img height="100" src="/loading.gif"/>
            </div>
            <div v-if="image" class="mt-4"> 
                <h2 class="exif-profile-header text-center mt-4"><span class="text-theme">Image</span>   PROFILE</h2>
                <!-- show image with exif in preview after uploading -->
                <exif-profile   :image="image" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import FileUploader from '../components/uploader/FileUploader.vue'
import ExifProfile from '../components/images/ExifProfile.vue'

export default {
    components: { FileUploader, ExifProfile},
    name: "Home",
    data(){
        return{
            imageSrc: null,
            image: null,
            isUploading:false,
            isValid:true
        }
    },
    methods: {
        onSubmitUrl(){
            this.storeImage(this.imageSrc,'url') 
        },
        dragOrInsertImage(file){
            this.storeImage(file,'image') 
        },
        storeImage(file, type){
            this.isUploading = true;
            const data = new FormData();
            data.append('type', type);
            data.append(type, file);
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}images`, data)
                .then(res => {
                    this.image = res.data
                    this.isUploading = false;
                }).catch(err => {
                    console.log('error', err);
                    this.isUploading = false;
                });
        },
        change(e){
            const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
            const url = e.target.value
            this.isValid = url.match(regex);
        }
    }
};
</script>
