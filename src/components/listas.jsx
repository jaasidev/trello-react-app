import { Task } from './task'
import { Add, MoveIco, Trash } from './icons'
import { FormItem } from './formitem'
import { useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

export function Lista ({ content, index }) {
  const { title, task, id } = content
  const { attributes, setNodeRef, transform, transition, listeners } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  const [form, setForm] = useState(false)
  const handleclick = () => {
    setForm(true)
  }
  return (
    <>
      <div ref={setNodeRef} className=' touch-none z-0 h-ful ' {...attributes} style={style}>
        <div className='card bg-[--bg-200] w-96 shadow-md relative'>
          <div className='card-body h-min'>
            <h2 className='card-title text-3xl mb-4 border-b border-[--primary-100]'>{title}</h2>
            <div className='flex flex-col items-center gap-2 z-20 pointer-events-auto'>
              {task.map((value, indexarr) => {
                return (
                  <Task key={value.id} value={value} index={indexarr} parent={index} />
                )
              })}
            </div>
            <button onClick={handleclick} className='z-20 btn bg-[--primary-100] p-2 rounded-md text-white flex items-center justify-center hover:bg-[--primary-200] transition-colors pointer-events-auto'>
              <Add width='30px' height='30px' />Añadir Tarea
            </button>
          </div>
          <div className='absolute top-3 right-3 flex flex-col items-center justify-center gap-1'>
            <div {...listeners}><MoveIco width='20px' height='20px' /></div>
            <button><Trash width='20px' height='20px' /></button>
          </div>
        </div>
      </div>

      <FormItem index={index} visible={form} update={setForm} />
    </>
  )
}