<template>
    <div class="home"> 
        <!-- file uploader -->           
        <div class="file-upload-container">
            <div v-bind="getRootProps()">
                <input v-bind="getInputProps()" >
                <p v-if="isDragActive">Drop the image here ...</p>
                <div class="text-center" v-else>

                    Drag and drop the image here, or click to select the image
                </div>
            </div>
        </div>
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
//import { mapGetters, mapActions } from "vuex";
import { useDropzone } from 'vue3-dropzone'

export default {
    //components: { FileUploader, LinkUploader},
    name: "Home",

  //computed: { ...mapGetters(["productsPaginatedData"]) },


    /*methods: {
        ...mapActions(["fetchAllProducts"]),
    },
    */

    // file drop 
    setup() {
        function onDrop(acceptFiles, rejectReasons) {
            console.log(acceptFiles)
            console.log(rejectReasons)
        }

        const { 
            getRootProps, getInputProps, ...rest 
        } = useDropzone({ 
            onDrop,
            maxFiles:1,
            accept: 'image/jpeg, image/png, image/gif, image/jpg' 
        })

        return {
            getRootProps,getInputProps, ...rest
        }
    },
    created() {
        //this.fetchAllProducts(1);
    }
};
</script>
