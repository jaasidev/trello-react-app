import { useRef, useId, useContext } from 'react'
import { Badge } from './badge'
import { Trash } from './icons'
import { TaskContext } from './useStore'

export function Task ({ value, index, parent }) {
  const { title, hasDone } = value
  const checkref = useRef()
  const checkid = useId()
  const { change } = useContext(TaskContext)
  const handleChange = () => {
    change({ padre: parent, indice: index, nuevoResultado: checkref.current.checked })
  }
  return (
    <div className='border-l-[--primary-200] border-l-[8px] flex flex-col bg-[--bg-300] card-compact card rounded-md w-full'>
      <div className='card-body'>
        <div className='flex items-center justify-between '>
          <h3 className='text-xl font-normal'><strong>Nombre:</strong> {title}</h3>
          <input type='checkbox' className='checkbox mr-0.5' ref={checkref} id={checkid} onChange={handleChange} />
        </div>
        <div className='flex items-center justify-between text-[--primary-200]'>
          <Badge finalizado={hasDone} />
          <button className='w-10 h-10 flex items-center justify-end'>
            <Trash width='30px' height='30px' />
          </button>
        </div>
      </div>
    </div>
  )
}
