export function Task ({ title }) {
  return (
    <div className='border-l-[--primary-200] border-l-[8px] flex flex-col bg-[--bg-300] card-compact card rounded-md'>
      <div className='card-body'>
        <div>
          <h3 className='text-xl font-normal'>{title}</h3>
        </div>
        <div>
          {}
        </div>
      </div>
    </div>
  )
}
