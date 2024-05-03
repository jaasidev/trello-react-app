import { useRef, useId, useContext } from 'react'
import { TaskContext } from './useStore'
import { Add } from './icons'
import { randomID } from '../js/random'
import { useListForm } from '../hooks/useListForm'

export function FormList () {
  const { inputid, inputref, handleSubmit } = useListForm()
  return (
    <dialog className='modal items-center' id='modal1'>
      <div className='modal-box bg-[--bg-200] border border-[--bg-200] rounded-md fixed inset-0 m-auto h-[250px] w-96 shadow-screen z-40'>
        <div className='flex-col p-3 flex gap-2 justify-between self-center h-full'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
          <label htmlFor={inputid} className='text-xl font-medium'>Nueva Lista(s):</label>
          <input id={inputid} ref={inputref} type='text' placeholder='Mercado, Objetivos, Productos....' className='input mb-3' />
          <button onClick={handleSubmit} className=' mt-2 self-end p-2 rounded-md bg-[--primary-100] text-white hover:bg-[--primary-200] transition-colors'>Agregar Lista</button>
        </div>
      </div>
    </dialog>
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
