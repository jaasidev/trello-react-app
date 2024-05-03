import { ListLayout } from './components/listLayout'
import { TaskProvider } from './components/useStore'
import { Header } from './components/header'
function App () {
  return (
    <>
      <TaskProvider>
        <Header />
        <div className='flex mt-3 p-5 min-h-full'>
          <ListLayout />
        </div>
      </TaskProvider>
    </>
  )
}

export default App
