const todos = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_TODO':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
    case 'DELETE_TODO':
      return state
    default:
      return state
  }
}

export default todos