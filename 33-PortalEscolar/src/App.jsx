import './App.css'
import Header from './pages/Inicio/Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
