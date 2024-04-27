import { useRef, useId, useContext } from 'react'
import { TaskContext } from './useStore'

export function FormList () {
  const inputid = useId()
  const inputref = useRef()
  const { state, agregar } = useContext(TaskContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputref.current.value === '' || inputref.current.value === ' ') return null
    agregar({ title: inputref.current.value, task: [] })
    console.log(state)
  }
  return (
    <form className='-order-last card bg-[--bg-100]' onSubmit={handleSubmit}>
      <div className='card-body gap-1'>
        <label htmlFor={inputid}>Introduce el nombre para la lista</label>
        <input id={inputid} ref={inputref} type='text' placeholder='Mercado, Objetivos, Productos....' className='p-2 outline-none rounded-md' />
        <button type='submit' className=' mt-2 self-end p-2 rounded-md bg-[--accent-200] text-white'>Agregar Lista</button>
      </div>
    </form>
  )
}
