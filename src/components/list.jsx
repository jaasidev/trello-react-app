import { Add } from './icons'

export function List ({ content }) {
  const { title, task } = content
  return (
    <div className='card bg-[--accent-100]'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <form className='flex'>
          <input type='text' placeholder='hacer la compra, limpiar la casa, asignar proyecto..' className='p-2 rounded-s-md' />
          <button className='bg-[--primary-200] text-white p-2 rounded-e-md'>
            <Add />
          </button>
        </form>
      </div>
    </div>
  )
}
