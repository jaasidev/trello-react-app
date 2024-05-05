import { Add } from './icons'
import { useListItem } from '../hooks/useListItem'
export function FormItem ({ index, visible, update }) {
  const { inputtwoid, inputtwo, handleSubmit } = useListItem({ index, update })
  const card = visible ? 'flex' : 'hidden'
  return (
    <div className={`${card} card bg-black bg-opacity-30 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-40 rounded-none`}>
      <form className='shadow-screen fixed  inset-0 m-auto h-full w-96 bg-[--bg-100] rounded-md card-body gap-3 max-h-72 justify-center' onSubmit={handleSubmit}>
        <label htmlFor={inputtwoid} className='text-xl font-medium'>Nombre de la tarea:</label>
        <input type='text' className='input border border-[--accent-100]' placeholder='Hacer la compra, asignar las actividades..' ref={inputtwo} id={inputtwoid} />
        <div className='card-actions justify-end'>
          <button className='btn bg-[--primary-200] text-white self-end hover:text-[--text-100]'>
            <Add width='15px' height='15px' />
            Añadir
          </button>
        </div>
        <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={() => { update(false) }}>✕</button>
      </form>
    </div>
  )
}
