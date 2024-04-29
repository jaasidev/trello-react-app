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
      return state.filter((value) => value.title !== actionpayload.title)
    }
    case 'cleanBoard':{
      return initial
    }
    case 'addtask':{
      const { id, tasks } = actionpayload
      const elemento = state[id]
      const before = state[id].task
      return [
        {
          ...elemento,
          task: [...before, tasks]
        },
        ...state.filter((value) => value.title !== state[id].title)
      ]
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

  return (
    <TaskContext.Provider value={
     { list: state, agregar, add }
    }
    >
      {children}
    </TaskContext.Provider>
  )
}
