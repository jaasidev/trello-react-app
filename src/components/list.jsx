import { CSS } from '@dnd-kit/utilities'
import { FormItem } from './formlist'
import { useSortable } from '@dnd-kit/sortable'

export function List ({ content, index }) {
  const { title, task, id } = content
  const { attributes, setNodeRef, transform, transition, listeners } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div ref={setNodeRef} className='card bg-[--accent-100] touch-none' {...attributes} {...listeners} style={style}>
      {
        task.map((value, index) => {
          return (
            <span key={value.id}>{value.title}</span>
          )
        })
      }
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <FormItem index={index} />
      </div>
    </div>
  )
}
