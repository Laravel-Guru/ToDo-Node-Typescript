import { Reducer } from 'react'

export type TodoAction =
  | { type: 'createNewTodo'; payload: Todo }
  | { type: 'setTodo'; payload: Todo[] | undefined }
  | { type: 'editTodo'; payload: Todo }
  | { type: 'deleteTodo'; payload: Todo }

const todoReducer: Reducer<Todo[], TodoAction> = (todos, action) => {
  switch (action.type) {
    case 'createNewTodo': {
      let newTodo = { id: 'local-' + Date.now().toString(), isCompleted: false, ...action.payload }
      localStorage.todos = JSON.stringify([...todos, newTodo])
      return [...todos, newTodo]
    }

    case 'setTodo': {
      const newTodos = action.payload || todos
      localStorage.todos = JSON.stringify(newTodos)
      return newTodos
    }

    case 'editTodo': {
      let newTodos = [...todos]
      const index = newTodos.findIndex((todo) => todo.id === action.payload.id)
      newTodos = [...newTodos.slice(0, index), action.payload, ...newTodos.slice(index + 1)]
      localStorage.todos = JSON.stringify(newTodos)
      return newTodos
    }

    case 'deleteTodo': {
      let newTodos = [...todos]
      newTodos = newTodos.filter((todo) => todo.id !== action.payload.id)
      localStorage.todos = JSON.stringify(newTodos)
      return newTodos
    }
  }
}

export default todoReducer