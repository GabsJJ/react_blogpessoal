import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import FormTema from './components/temas/formtema/FormTema'
import DeletarTema from './components/temas/deletartema/DeletarTema'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="
          font-poppins
          bg-miriam-blue
          grid grid-rows-[auto_1fr_auto]
        ">
          <Navbar />
          <div className="
            bg-gradient-to-b from-royal-blue/10 to-purple-rain/0.5 
            min-h-[80vh]
          ">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastrartema" element={<FormTema />} />
                <Route path="/editartema/:id" element={<FormTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
              </Routes>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
