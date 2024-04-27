import { FormList } from './components/formlist'
import { TaskProvider } from './components/useStore'

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
