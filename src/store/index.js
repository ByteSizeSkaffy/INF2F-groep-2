import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "",
        email: "",
        licenseplate: "",
        marker_color: "#fff"
    },
    getters: {
    },
    mutations: {
        changeName(state) {
            state.name = "Tawan"
        }
    },
    actions: {
    },
    modules: {
    }
})

