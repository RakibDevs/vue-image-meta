
import { createStore, createLogger } from 'vuex';
import meta from './meta';
import createPersistedState from "vuex-persistedstate";


const debug = process.env.NODE_ENV !== 'production'

const Store = createStore({
  modules: {meta},
  strict: debug,
  plugins: debug ? [createLogger(),createPersistedState()] : [createPersistedState()]
})

export default Store;