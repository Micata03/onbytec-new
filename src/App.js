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

import Soluciones from './Componentes/Pages/soluciones/index';
import CloudSoluciones from './Componentes/Pages/soluciones/solucionesIndividuales/cloud';
import Cybersecurity from './Componentes/Pages/soluciones/solucionesIndividuales/cybersec';
import Datacenter from './Componentes/Pages/soluciones/solucionesIndividuales/datacenter';
import Networking from './Componentes/Pages/soluciones/solucionesIndividuales/networking';
import Rrhh from './Componentes/Pages/nosotros/sumate';
import Navbar from './Componentes/Pages/navbar';
import NavBar from './Componentes/Pages/navbar';
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
      <Route path='/soluciones' element={<Soluciones/>}/>
      <Route path='/soluciones/cloud' element={<CloudSoluciones/>}/>
      <Route path='/soluciones/cybersecurity' element={<Cybersecurity/>}/>
      <Route path='/soluciones/datacenter' element={<Datacenter/>}/>
      <Route path='/soluciones/networking' element={<Networking/>}/>

      <Route path='/servicios' element={<Servicios/>}/>
     
      <Route path='/auditoria' element={<Auditoria/>}/>
      <Route path='/consultoria' element={<Consultoria/>}/>
      <Route path='/soporte' element={<Soporte/>}/>
      <Route path='/outsourcing' element={<Outsourcing/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/nosotros/rrhh' element={<Rrhh/>}/>
      

    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
