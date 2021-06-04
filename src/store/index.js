
import { createStore, createLogger } from 'vuex';
import image from './image';
import createPersistedState from "vuex-persistedstate";


const debug = process.env.NODE_ENV !== 'production'

const Store = createStore({
  modules: {image},
  strict: debug,
  plugins: debug ? [createLogger(),createPersistedState()] : [createPersistedState()]
})

export default Store;