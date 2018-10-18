export default {
    ['increment'](context) {
        context.commit('increment')
    },
    ['incrementAsync']({ commit }, payload) {
        setTimeout(() => {
            commit('increment', payload)
        }, 1000)
    }
}