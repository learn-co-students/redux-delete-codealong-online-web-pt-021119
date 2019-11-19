export default function manageTodo(state = {
  todos: [],
}, action) {

  let idx;

  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };

    case 'DELETE_TODO':
      idx = state.todos.findIndex(todo => todo.id === action.id);
      return { todos: [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)]}

    default:
      return state;
  }
}
