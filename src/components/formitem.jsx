import { Add } from './icons'
import { useListItem } from '../hooks/useListItem'
export function FormItem ({ index, visible, update }) {
  const { inputtwoid, inputtwo, handleSubmit } = useListItem({ index, update })
  const card = visible ? 'flex' : 'hidden'
  return (
    <div className={`${card} card bg-black bg-opacity-45 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40 rounded-none`}>
      <form className='shadow-screen fixed  inset-0 m-auto h-full w-96 bg-[--bg-100] rounded-md card-body gap-3 max-h-64 justify-evenly' onSubmit={handleSubmit}>
        <div className='w-full flex flex-col  justify-center gap-3'>
          <label htmlFor={inputtwoid} className='text-xl font-medium'>Nombre de la tarea:</label>
          <input type='text' className='input border border-[--accent-100]' placeholder='Hacer la compra, asignar las actividades..' ref={inputtwo} id={inputtwoid} />
        </div>
        <div className='card-actions justify-end'>
          <button type='submit' className='btn bg-[--primary-100] text-white self-end hover:bg-[--primary-100]'>
            <Add width='15px' height='15px' />
            Añadir
          </button>
          <button type='reset' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={() => { update(false) }}>✕</button>
        </div>
      </form>

    </div>
  )
}
