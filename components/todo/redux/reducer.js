const INITIAL_STATE = {
  list: [{
    id: 1,
    name: 'Todo 1',
  },
  {
    id: 2,
    name: 'Todo 2'
  }]
}

export default (state = INITIAL_STATE, action) => {
  debugger
    switch (action.type) {
        case 'ADD_TODO':
          return {
            ...state, // old state
            list: [...state.list, action.payload]
          }

        default:        
          return state;
    }
}
