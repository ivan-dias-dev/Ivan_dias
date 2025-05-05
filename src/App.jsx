import { useState } from 'react'
import Header from './Componentes/Header/index.jsx'
import Hero from './Componentes/Hero/index.jsx'
import Card from './Componentes/Card/index.jsx'
import Footer from './Componentes/Footer/index.jsx'
import './App.css'





function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Card />
      <Footer />
    </>
  )
}

export default App
