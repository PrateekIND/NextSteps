

import './App.css'
import HomePage from './pages/HomePage'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/Footer/Footer'

function App() {

  return (
    <div className='font-sans'>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
