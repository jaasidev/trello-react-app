export function Footer () {
  return (
    <dialog id='my_modal_3' className='modal'>
      <div className='modal-box card'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
        </form>
        <div className='card-body text-center text-xl'>
          <span>Hecho con ☕ desde Cuba.</span>
          <span>Jaasiel Beltrán.</span>
        </div>
      </div>
    </dialog>
  )
}
