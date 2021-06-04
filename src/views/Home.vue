<template>
    <div class="home">            
        <file-uploader></file-uploader>
        <link-uploader></link-uploader>
    </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
import FileUploader from '../components/uploader/File.vue';
import LinkUploader from '../components/uploader/Link.vue';

export default {
  components: { FileUploader, LinkUploader},
  name: "Home",

  //computed: { ...mapGetters(["productsPaginatedData"]) },

  /*methods: {
    ...mapActions(["fetchAllProducts"]),
  },
*/
  created() {
    //this.fetchAllProducts(1);
  }
};
</script>
