import { List } from './list'
import { DndContext, closestCorners } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useSort } from '../hooks/useSort'
export function ListLayout () {
  const { list, handleDrag, sensores } = useSort()
  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDrag} sensors={sensores}>
      <SortableContext items={list} strategy={horizontalListSortingStrategy}>
        {list.map((value, index) => {
          return (
            <List key={value.id} content={value} index={index} />
          )
        })}
      </SortableContext>
    </DndContext>
  )
}
