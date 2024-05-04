import { TaskContext } from '../components/useStore'
import { useRef, useId, useContext } from 'react'
import { randomID } from '../js/random'
export function useListItem ({ index, update }) {
  const { add } = useContext(TaskContext)
  const inputtwo = useRef()
  const inputtwoid = useId()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputtwo.current.value === '' || inputtwo.current.value === ' ') return null
    add({ position: index, tasks: { id: randomID(), title: inputtwo.current.value, hasDone: false } })
    update(false)
  }
  return { inputtwo, inputtwoid, handleSubmit }
}