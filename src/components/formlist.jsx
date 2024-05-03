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

export function FormItem ({ index, visible, update }) {
  const { add } = useContext(TaskContext)
  const inputtwo = useRef()
  const inputtwoid = useId()
  const select = useId()
  const selectref = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputtwo.current.value === '' || inputtwo.current.value === ' ') return null
    add({ position: index, tasks: { id: randomID(), title: inputtwo.current.value, hasDone: selectref.current.value } })
    update(false)
  }
  const card = visible ? 'flex' : 'hidden'
  return (
    <div className={`${card} bg-black bg-opacity-30 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40`}>
      <form className='shadow-screen fixed  inset-0 m-auto h-full w-96 bg-[--bg-100] rounded-md card-body gap-3 max-h-80 justify-center' onSubmit={handleSubmit}>
        <label htmlFor={inputtwoid} className='text-xl'>Ingrese el nombre de la tarea:</label>
        <input type='text' className='input border border-[--accent-100]' placeholder='Hacer la compra, asignar las actividades..' ref={inputtwo} id={inputtwoid} />
        <div className='flex items-center gap-2 justify-center'>
          <label htmlFor={select} className='text-xl'>Estado:</label>
          <select id={select} ref={selectref} className='select text-md'>
            <option disabled selected>Escoge el estado de la tarea</option>
            <option value={false}>Proceso</option>
            <option value>Hecha</option>
            <option value={false}>Atrasada</option>
          </select>
        </div>
        <div className='card-actions justify-end'>
          <button className='btn bg-[--primary-200] text-white self-end'>
            <Add width='15px' height='15px' />
            Añadir
          </button>
        </div>
      </form>
    </div>
  )
}
