import { useContext } from 'react'
import { AboutIco, Add, Trash } from './icons'
import { TaskContext } from './useStore'
import { FormList } from './formlist'

export function Header () {
  const { clean } = useContext(TaskContext)
  const handleClean = () => {
    clean()
  }
  return (
    <>
      <header className=' bg-[--accent-100] flex  md:flex-col md:h-screen py-2 px-3 text-[--text-100] items-center justify-between'>
        <div className='flex md:flex-col items-center gap-2 justify-center'>
          <h1 className='text-4xl font-semibold cursor-pointer'>
            JS
          </h1>
        </div>
        <div className='flex md:flex-col items-center gap-2 justify-end flex-1'>
          <button className='btn btn-square btn-ghost ' onClick={() => document.getElementById('modal1').showModal()}>
            <Add width='44' height='44' />
          </button>
          <button className='btn btn-square btn-ghost' onClick={handleClean}>
            <Trash width='44' height='44' />
          </button>
          <button className='btn btn-square btn-ghost' onClick={() => document.getElementById('my_modal_3').showModal()}>
            <AboutIco width='44' height='44' />
          </button>
        </div>
      </header>
      <FormList />
    </>
  )
}
