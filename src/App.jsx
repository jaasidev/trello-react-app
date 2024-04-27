import { FormList } from './components/formlist'
import { TaskProvider } from './hooks/useStore'

function App () {
  return (
    <>
      <TaskProvider>
        <FormList />
      </TaskProvider>
    </>
  )
}

export default App
