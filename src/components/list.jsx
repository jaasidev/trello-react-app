import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { Task } from './task'
import { Add } from './icons'

export function List ({ content, index }) {
  const { title, task, id } = content
  const { attributes, setNodeRef, transform, transition, listeners } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div ref={setNodeRef} className='card bg-[--bg-200] touch-none w-96 shadow-md' {...attributes} {...listeners} style={style}>
      <div className='card-body'>
        <h2 className='card-title text-3xl mb-4 border-b border-[--primary-100]'>{title}</h2>
        {
        task.map((value, index) => {
          return (
            <Task key={value.id} value={value} />
          )
        })
      }
        <button className='card-actions bg-[--primary-100] p-2 rounded-md text-white flex items-center justify-center hover:bg-[--primary-200] transition-colors'>
          <Add width='30px' height='30px' />Añadir Tarea
        </button>
      </div>
    </div>
  )
}
