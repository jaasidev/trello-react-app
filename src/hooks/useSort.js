import { useContext } from 'react'
import { useSensor, useSensors, TouchSensor, MouseSensor, KeyboardSensor } from '@dnd-kit/core'
import { TaskContext } from '../components/useStore'
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable'
export function useSort () {
  const { list, reordenamiento } = useContext(TaskContext)

  function getID (id) {
    return list.findIndex(value => value.id === id)
  }

  const handleDrag = event => {
    const { active, over } = event

    if (active.id === over.id) return

    const nuevoOrden = arrayMove(list, getID(active.id), getID(over.id))

    reordenamiento(nuevoOrden)
  }
  const sensores = useSensors(
    useSensor(TouchSensor),
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )
  return { list, handleDrag, sensores }
}
