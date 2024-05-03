import { useContext, useState } from 'react'
import { Add, Trash } from './icons'
import { TaskContext } from './useStore'
import { FormList } from './formlist'

export function Header () {
  const { clean } = useContext(TaskContext)
  const [ver, setVer] = useState(false)
  const handleClean = () => {
    clean()
  }
  const handlewatch = () => {
    setVer(true)
  }
  return (
    <>
      <header className=' bg-[--accent-100] flex flex-col h-screen py-2 px-3 text-[--text-100] items-center justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-4xl font-semibold cursor-pointer'>
            JS
          </h1>
          <button className='btn btn-square btn-ghost' onClick={handlewatch}>
            <Add />
          </button>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <button className='btn btn-square btn-ghost' onClick={handleClean}>
            <Trash />
          </button>
        </div>
      </header>
      <FormList visible={ver} update={setVer} />
    </>
  )
}
