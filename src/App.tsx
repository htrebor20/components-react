import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass'
import Home from './pages/home'
import Layout from './layaout'
import Models from './modules/models'
import Create from './pages/models/create';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="models/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

