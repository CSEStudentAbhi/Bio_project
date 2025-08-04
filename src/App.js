
import { Outlet, Routes,Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/navi';
import Home from './component/homepage';
import Service from './component/service';
import Medicine from './component/medicine';
import Signup from './component/signup';
import Register from './component/register';
import Carthome from './component/cart/carthome';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/register' element={<Register />} />
          <Route path='/service' element={<Service />} />
          <Route path='/medicine' element={<Medicine />} />
        </Route>
        <Route path='/cart' element={<Carthome/>}>
        
        </Route>
        </Routes>
    </>
  );
}

export default App;
