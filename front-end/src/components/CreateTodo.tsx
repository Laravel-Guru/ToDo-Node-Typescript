import { useContext } from 'context/useContext'
import { request } from 'lib/axios'
import { cn } from 'lib/utils'
import React, { useState } from 'react'
import Checkbox from './Checkbox'

const CreateTodo = () => {
  const [content, setContent] = useState('')
  const [isError, setIsError] = useState(false)
  const [completed, setCompleted] = useState(false)
  const { dispatchTodos } = useContext().todos

  const createNewTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (!content) {
      setIsError(true)
      return
    }
    
    dispatchTodos({
      type: 'createNewTodo',
      payload: { content, isCompleted: completed },
    })

    setContent('')
    setIsError(false)

    request.post('/todos', { content, isCompleted: completed }).then((res) => {
        const localTodos = JSON.parse(localStorage.todos)
        const newTodoIdx = localTodos.length - 1
        const updatedTodos = [
            ...localTodos.slice(0, newTodoIdx),
            { ...localTodos[newTodoIdx], id: res.data.id },
            ...localTodos.slice(newTodoIdx + 1),
        ]
        localStorage.todos = JSON.stringify(updatedTodos)
        dispatchTodos({
            type: 'setTodo',
            payload: updatedTodos,
        })
    })
  }

  return (
    <div className={cn('relative mt-auto', isError ? 'animate-shake' : '')}>
      <form
        onSubmit={createNewTodo}
        className='px-4 bg-white dark:bg-dark-desaturated-blue rounded-md shadow-sm flex items-center'
      >
        <div className='mr-3'>
          <Checkbox checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        </div>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='w-full py-4'
          type='text'
          placeholder='Create a new todo...'
          autoFocus
        />
      </form>
      {isError && (
        <p className='absolute text-red text-sm lg:translate-y-2 lg:text-base'>
          Todo can't be empty
        </p>
      )}
    </div>
  )
}

export default CreateTodo