import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import Home from './pages/home/Home'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<ListaProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App