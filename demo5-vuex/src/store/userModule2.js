export default {
    namespaced: true,
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: false },
            { id: 2, text: '...', done: true }
        ]
    },
    mutations: {
        increment(state, payload) {
            // mutate state
            state.count += payload.amount
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit('increment', payload)
            }, 1000)
        }
    }
}