import axios from 'axios'
//import router from '../router'


const state = () => ({
    image           : null,
    images          : null,
    isLoading       : false,
    isUploading     : false,
    createdImage     : null,
})

const getters = {
    image            : state => state.image,
    images           : state => state.images,
    createdImage     : state => state.createdImage,
    isLoading        : state => state.isLoading,
    isUploading      : state => state.isUploading,

};


const actions = {

    // get images
    async getImages({ commit }, page = null) {
        
        await axios.get(`${process.env.VUE_APP_API_ENDPOINT}images?page=`+page)
            .then(res => {
                commit('get_images', res.data.data);
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
        console.log(url)
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
        state.images.unshift(image)
        state.createdImage = image;
    },

    get_images: (state, images) => {
        console.log(images)
        state.images = images;
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