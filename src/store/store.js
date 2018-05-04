import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default (Vuex) => {
    return new Vuex.Store({
        state,
        getters,
        mutations
    });
}
