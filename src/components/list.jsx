import { CSS } from '@dnd-kit/utilities'
import { FormItem } from './formlist'
import { useSortable } from '@dnd-kit/sortable'
import { Task } from './task'

export function List ({ content, index }) {
  const { title, task, id } = content
  const { attributes, setNodeRef, transform, transition, listeners } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div ref={setNodeRef} className='card bg-[--bg-200] touch-none' {...attributes} {...listeners} style={style}>
      <div className='card-body'>
        <h2 className='card-title text-2xl'>{title}</h2>
        {
        task.map((value, index) => {
          return (
            <Task key={value.id} title={value.title} />
          )
        })
      }

        <FormItem index={index} />
      </div>
    </div>
  )
}
