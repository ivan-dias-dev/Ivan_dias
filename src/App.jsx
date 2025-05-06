import { useState } from 'react'
import Header from './Componentes/Header/index.jsx'
import Hero from './Componentes/Hero/index.jsx'
import Card from './Componentes/Card/index.jsx'
import Footer from './Componentes/Footer/index.jsx'
import Contato from './Componentes/Contato/index.jsx'
import './App.css'





function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Card />
      <Contato />
      <Footer />
    </>
  )
}

export default App
