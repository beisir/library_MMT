export default {
    // search-list
    updateParams (state, params) {
        state.searchListParams = params;
    },
    saveAsideCur (state, params) {
        state.asideCur = params;
    },

    // proContarst路由组件存储选择状态
    upDateStatusCatid (state, params) {
        state.statusCatid = params;
    },
    upDateStatusList (state, params) {
        state.statusList = params;
    }
}
