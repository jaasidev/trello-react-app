import { useId, useRef, useContext } from 'react'
import { TaskContext } from '../components/useStore'
import { randomID } from '../js/random'
export function useListForm () {
  const inputid = useId()
  const inputref = useRef()
  const { agregar } = useContext(TaskContext)
  const handleSubmit = () => {
    if (inputref.current.value === '' || inputref.current.value === ' ') return null
    agregar({ title: inputref.current.value, id: randomID(), task: [] })
  }
  return { inputid, inputref, handleSubmit }
}
