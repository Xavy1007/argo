
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorias from './components/Categorias';
import Home from './components/Home';
import Almacenes from './components/Almacenes';
import Articulos from './components/Articulos';
import Proveedores from './components/Proveedores';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      
      <Menu></Menu>

      <Routes >
      <Route  path="/" element={<Home/>} > </Route>  
      <Route  path="/categorias" element={<Categorias/>} > </Route>
      <Route  path="/almacenes" element={<Almacenes/>} > </Route>
      <Route  path="/articulos" element={<Articulos/>} > </Route>
      <Route  path="/proveedores" element={<Proveedores/>} > </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
