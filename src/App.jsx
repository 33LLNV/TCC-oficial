
import "./App.css"
import { BrowserRouter } from 'react-router-dom'

import Rotas from './rotas'
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App