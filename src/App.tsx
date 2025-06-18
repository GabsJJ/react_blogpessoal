import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <div className="
      font-poppins
      min-h-screen
      bg-miriam-blue
      grid grid-rows-[auto_1fr_auto]
    ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
