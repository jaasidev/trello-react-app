import { FormList } from './components/formlist'
import { ListLayout } from './components/listLayout'
import { TaskProvider } from './components/useStore'
function App () {
  return (
    <>
      <TaskProvider>
        <ListLayout />
        <FormList />
      </TaskProvider>
    </>
  )
}

export default App
