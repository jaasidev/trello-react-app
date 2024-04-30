import { useRef, useId, useContext } from 'react'
import { TaskContext } from './useStore'
import { Add } from './icons'
import { randomID } from '../js/random'

export function FormList () {
  const inputid = useId()
  const inputref = useRef()
  const { agregar } = useContext(TaskContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputref.current.value === '' || inputref.current.value === ' ') return null
    agregar({ title: inputref.current.value, id: randomID(), task: [] })
  }
  return (
    <form className='order-11 card bg-[--bg-100] max-h-48' onSubmit={handleSubmit}>
      <div className='card-body gap-1'>
        <label htmlFor={inputid}>Introduce el nombre para la lista</label>
        <input id={inputid} ref={inputref} type='text' placeholder='Mercado, Objetivos, Productos....' className='p-2 outline-none rounded-md' />
        <button type='submit' className=' mt-2 self-end p-2 rounded-md bg-[--accent-200] text-white'>Agregar Lista</button>
      </div>
    </form>
  )
}

export function FormItem ({ index }) {
  const { list, add } = useContext(TaskContext)
  const inputtwo = useRef()
  const inputtwoid = useId()
  const handleSubmit = event => {
    event.preventDefault()
    if (inputtwo.current.value === '' || inputtwo.current.value === ' ') return null
    add({ position: index, tasks: { id: randomID(), title: inputtwo.current.value, hasDone: false } })
    console.log(list)
  }
  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input type='text' id={inputtwoid} ref={inputtwo} placeholder='hacer la compra, limpiar la casa, asignar proyecto..' className='p-2 rounded-s-md' />
      <button className='bg-[--primary-200] text-white p-2 rounded-e-md'>
        <Add />
      </button>
    </form>
  )
}
