import { useContext } from 'react'
import { TaskContext } from './useStore'
import { List } from './list'

export function ListLayout () {
  const { list } = useContext(TaskContext)

  return (
    <>
      {
    list.map((value, index) => {
      return (
        <List key={index} content={value} />
      )
    })
  }
    </>
  )
}
