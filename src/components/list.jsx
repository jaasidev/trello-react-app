import { FormItem } from './formlist'

export function List ({ content, index }) {
  const { title, task } = content
  return (
    <div className='card bg-[--accent-100]'>
      {
        task.map((value, index) => {
          return (
            <span key={index}>{value.title}</span>
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
