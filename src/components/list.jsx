import { FormItem } from './formlist'

export function List ({ content, index }) {
  const { title } = content
  return (
    <div className='card bg-[--accent-100]'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <FormItem index={index} />
      </div>
    </div>
  )
}
