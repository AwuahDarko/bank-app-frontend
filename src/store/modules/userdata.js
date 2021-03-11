

const user_data = new Object();

const state = {
    user_data: user_data
}


const getters = {
    userData: (state) => state.user_data
}

const actions = {
    setUserData({ commit }, dt){
        commit('saveUserData', dt);
    }
}

const mutations = {
    saveUserData: (state, dt) => {
        state.user_data = dt
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}