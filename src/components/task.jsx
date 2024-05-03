import { Badge } from './badge'
import { Trash } from './icons'

export function Task ({ value }) {
  const { title, hasDone } = value
  return (
    <div className='border-l-[--primary-200] border-l-[8px] flex flex-col bg-[--bg-300] card-compact card rounded-md w-full'>
      <div className='card-body'>
        <div>
          <h3 className='text-xl font-normal'><strong>Nombre:</strong> {title}</h3>
        </div>
        <div className='flex items-center justify-between text-[--primary-200]'>
          <Badge finalizado={hasDone} />
          <button className='w-10 h-10'>
            <Trash width='30px' height='30px' />
          </button>
        </div>
      </div>
    </div>
  )
}
