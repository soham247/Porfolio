import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ErrorBoundary } from 'react-error-boundary'
import SomethingWentWrong from './components/Errors/SomethingWentWrong'

function App() {

  return (
    <ErrorBoundary FallbackComponent={SomethingWentWrong}>
      <div id='bg'></div>
      <div className='relative'>
        <Navbar />
        <main className='pt-20 min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
