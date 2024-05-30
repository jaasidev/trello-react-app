import { ListLayout } from './components/listLayout'
import { TaskProvider } from './components/useStore'
import { Header } from './components/header'
import { Footer } from './components/about'
import { NoResponsive } from './components/Responsivemessage'
function App() {
  return (
    <>
      <TaskProvider>
        <Header />
        <div className='flex mt-3 p-5 w-full md:min-h-full gap-4 flex-col md:flex-row overflow-y-scroll'>
          <ListLayout />
        </div>
      </TaskProvider>
      <NoResponsive />
      <Footer />
    </>
  )
}

export default App
