import { useListForm } from '../hooks/useListForm'

export function FormList () {
  const { inputid, inputref, handleSubmit } = useListForm()
  return (
    <dialog className='modal items-center' id='modal1'>
      <div className='modal-box bg-[--bg-200] border border-[--bg-200] rounded-md fixed inset-0 m-auto h-[250px] w-96 shadow-screen z-40'>
        <div className='flex-col p-3 flex gap-2 justify-between self-center h-full'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
          <label htmlFor={inputid} className='text-xl font-medium'>Nueva Lista(s):</label>
          <input id={inputid} ref={inputref} type='text' placeholder='Mercado, Objetivos, Productos....' className='input mb-3' />
          <form method='dialog' className='flex items-center justify-end'>
            <button onClick={handleSubmit} className=' mt-2 self-end p-2 rounded-md bg-[--primary-100] text-white hover:bg-[--primary-200] transition-colors'>Agregar Lista</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
