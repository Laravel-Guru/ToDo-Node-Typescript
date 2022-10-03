import { useState } from 'react'
import MoonIcon from './images/icon-moon.svg'
import SunIcon from './images/icon-sun.svg'
import CreateTodo from 'components/CreateTodo'
import Todos from 'components/Todos'
import { useContext } from './context/useContext'

function App() {
  const [count, setCount] = useState(0)
  const { setTheme } = useContext().theme

  return (
    <main>
      <header className='header'>
        <div className='wrapper h-full flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-light-gray font-bold text-3xl lg:text-4xl tracking-[8px]'>TODO</h1>
            <button onClick={() => setTheme('toggle')}>
              <img className='dark:hidden w-5 lg:w-auto' src={MoonIcon} alt='moon-icon' />
              <img className='hidden dark:block w-5 lg:w-auto' src={SunIcon} alt='sun-icon' />
            </button>
          </div>          
          <CreateTodo />
        </div>
      </header>
      <Todos />
    </main>
  )
}

export default App
