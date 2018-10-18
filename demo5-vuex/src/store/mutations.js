
const INCREMENT = 'increment'

export default {
    [INCREMENT](state, payload) {
        // mutate state
        state.count += payload.amount
    }

}