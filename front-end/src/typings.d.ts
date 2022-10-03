interface Todo {
    userId?: string
    id?: string
    content?: string
    isCompleted?: boolean
  }
  
  interface User {
    id: string
    name: string
    email: string
    todoPositions: { todoId: string }[]
    token: string
  }