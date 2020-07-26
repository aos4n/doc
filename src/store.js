import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuShown: true,
        windowWidth: 0
    },
    getters: {
        lessThan768(state) {
            return state.windowWidth <= 768
        }
    },
    mutations: {
        toggleMenu(state) {
            state.menuShown = !state.menuShown
        },
        setWindowWidth(state, width) {
            state.windowWidth = width
        }
    }
})