import axios from 'axios'
//import router from '../router'


const state = () => ({
    image           : null,
    isLoading       : false,
    isUploading     : false,
    createdData     : null,
})

const getters = {
    isLoading               : state => state.isLoading,
    isUploading             : state => state.isUploading,
};


const actions = {



    // store image
    async storeImage({ commit }, image) {
        console.log(image)
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
    
}

// mutations
const mutations = {
    save_new_image: (state, image) => {
        state.images.unshift(image)
        state.createdData = image;
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