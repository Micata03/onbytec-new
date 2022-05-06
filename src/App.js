import Home from './Componentes/Home/Home';
import Contacto from './Componentes/Pages/contacto';
import Costos from './Componentes/Home/Hero/ctaHero/costos/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import './App.css';
import Industrias from './Componentes/Pages/Industrias/index';
import Equipo from './Componentes/Home/Hero/ctaHero/equipo';
import Seguridad from './Componentes/Home/Hero/ctaHero/seguridad';
import Cloud from './Componentes/Home/Hero/ctaHero/cloud';
import Construccion from './Componentes/Pages/Construccion';
import Auditoria from './Componentes/Pages/servicios/serviciosIndividuales/auditoria';
import Consultoria from './Componentes/Pages/servicios/serviciosIndividuales/consultoria';
import Soporte from './Componentes/Pages/servicios/serviciosIndividuales/soporte';
import Outsourcing from './Componentes/Pages/servicios/serviciosIndividuales/outsourcing';
import Servicios from './Componentes/Pages/servicios';
import Nosotros from './Componentes/Pages/nosotros/index';
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/industrias' element={<Industrias/>}/>
      <Route path='/costos' element={<Costos/>}/>
      <Route path='/equipo' element={<Equipo/>}/>
      <Route path='/seguridad' element={<Seguridad/>}/>
      <Route path='/cloud' element={<Cloud/>}/>
      <Route path='/soluciones' element={<Construccion/>}/>
      <Route path='/servicios' element={<Servicios/>}/>
     
      <Route path='/auditoria' element={<Auditoria/>}/>
      <Route path='/consultoria' element={<Consultoria/>}/>
      <Route path='/soporte' element={<Soporte/>}/>
      <Route path='/outsourcing' element={<Outsourcing/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>

    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
