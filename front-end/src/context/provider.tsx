import { createContext, FC, useEffect, useReducer, useState } from 'react'
import todoReducer, { TodoAction } from './todoReducer'
import useDarkMode, { Theme } from './useDarkMode'

interface IContext {
  todos: {
    todos: Todo[]
    dispatchTodos: React.Dispatch<TodoAction>
  }
  theme: {
    theme: Theme
    setTheme: (theme: 'toggle' | Theme) => void
  }
}

interface Props {
    children: React.ReactNode;
}

export const Context = createContext({} as IContext)


const Provider: FC<Props> = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [])

  return (
    <Context.Provider
      value={{
        todos: { todos, dispatchTodos },
        theme: useDarkMode(),
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider