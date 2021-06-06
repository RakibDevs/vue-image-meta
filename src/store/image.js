import axios from 'axios'
//import router from '../router'


const state = () => ({
    image           : null,
    images          : null,
    paginatedImages : null,
    isLoading       : false,
    isUploading     : false,
    createdImage     : null,
})

const getters = {
    image            : state => state.image,
    images           : state => state.images,
    paginatedImages  : state => state.paginatedImages,
    createdImage     : state => state.createdImage,
    isLoading        : state => state.isLoading,
    isUploading      : state => state.isUploading,

};


const actions = {

    // get images
    async getImages({ commit }, query = null) {
        let page    = (query !== null)?query.page:''
            //search  = (query !== null)?query.search:''
        
        await axios.get(`${process.env.VUE_APP_API_ENDPOINT}images?page=`+page)
            .then(res => {
                const images = res.data.data;
                commit('setImages', images);
                const pagination = {
                    total: res.data.total,  
                    per_page: res.data.per_page, 
                    current_page: res.data.current_page, 
                    total_pages: res.data.last_page 
                }
                res.data.pagination = pagination;
                commit('setImagesPaginated', res.data);
            }).catch(err => {
                console.log('error', err);
            });
    },

    // store image
    async storeImage({ commit }, image) {
        const data = new FormData();
        
        data.append('image', image);
        
        commit('image_uploading', true);
        await axios.post(`${process.env.VUE_APP_API_ENDPOINT}images`, data)
            .then(res => {
                commit('save_new_image', res.data.data);
                commit('image_uploading', false);
            }).catch(err => {
                console.log('error', err);
                commit('image_uploading', false);
            });
    },

    // store image
    async storeImageByUrl({ commit }, url) {
        const data = new FormData();
        
        data.append('url', url);
        
        commit('image_uploading', true);
        await axios.post(`${process.env.VUE_APP_API_ENDPOINT}images/url`, data)
            .then(res => {
                commit('save_new_image', res.data.data);
                commit('image_uploading', false);
            }).catch(err => {
                console.log('error', err);
                commit('image_uploading', false);
            });
    },
    
}

// mutations
const mutations = {
    save_new_image: (state, image) => {
        state.createdImage = image;
    },

    setImages: (state, images) => {
        state.images = images;
    },

    setImagesPaginated: (state, paginatedImages) => {
        state.paginatedImages = paginatedImages;
    },

    image_uploading(state, isLoading) {
        state.isLoading = isLoading
    },
    

}

export default {
    state,
    getters,
    actions,
    mutations
}