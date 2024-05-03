export function Badge ({ finalizado }) {
  return finalizado
    ? <div className='badge badge-success'>
      <svg
        xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-checks' width='15px' height='15px' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 12l5 5l10 -10' />
        <path d='M2 12l5 5m5 -5l5 -5' />
      </svg>
      Listo
      </div>
    : <div className='badge badge-warning gap-1'>
      <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-clock-hour-5' width='15px' height='15px' viewBox='0 0 24 24' stroke-width='1.5' stroke='#000000' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
        <path d='M12 12l2 3' />
        <path d='M12 7v5' />
      </svg>
      Pendiente...
      </div>
}
