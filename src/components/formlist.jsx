import { useRef, useId, useContext } from 'react'
import { TaskContext } from './useStore'
import { Add } from './icons'
import { randomID } from '../js/random'
import { useListForm } from '../hooks/useListForm'

export function FormList ({ visible, update }) {
  const { inputid, inputref, handleSubmit } = useListForm({ update })
  const style = visible ? 'flex' : 'hidden'
  return (
    <form className={` ${style} items-center justify-center bg-[--bg-200] border border-[--bg-200] rounded-md fixed inset-0 m-auto h-[250px] w-96 shadow-screen z-40`} onSubmit={handleSubmit}>
      <div className='flex-col p-3 flex gap-3'>
        <label htmlFor={inputid} className='text-xl font-medium'>Introduce el nombre para la lista</label>
        <input id={inputid} ref={inputref} type='text' placeholder='Mercado, Objetivos, Productos....' className='input' />
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
    <form className=' flex' onSubmit={handleSubmit}>
      <input type='text' id={inputtwoid} ref={inputtwo} placeholder='hacer la compra, limpiar la casa, asignar proyecto..' className='p-2 rounded-s-md' />
      <button className='bg-[--primary-200] text-white p-2 rounded-e-md'>
        <Add />
      </button>
    </form>
  )
}
