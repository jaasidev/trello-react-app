import { useReducer, createContext } from 'react'

export const TaskContext = createContext()

const initial = []

const reducer = (state, action) => {
  const { actiontype, actionpayload } = action

  switch (actiontype) {
    case 'addItem':{
      return [
        ...state,
        actionpayload
      ]
    }
    case 'eliminarItem':{
      return state.filter((value) => value.id !== actionpayload.id)
    }
    case 'cleanBoard':{
      return initial
    }
    case 'addtask':{
      const { position, tasks } = actionpayload
      state[position].task.push(tasks)
      return [...state]
    }
    case 'reordenar':{
      return [...actionpayload]
    }
  }
  return state
}

export function TaskProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const agregar = producto => dispatch({
    actiontype: 'addItem',
    actionpayload: producto
  })
  const add = producto => dispatch({
    actiontype: 'addtask',
    actionpayload: producto
  })
  const reordenamiento = producto => dispatch({
    actiontype: 'reordenar',
    actionpayload: producto
  })
  const clean = producto => dispatch({
    actiontype: 'cleanBoard',
    actionpayload: producto
  })

  return (
    <TaskContext.Provider value={
     { list: state, agregar, add, reordenamiento, clean }
    }
    >
      {children}
    </TaskContext.Provider>
  )
}
