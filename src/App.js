import './App.css';
import NavBar from './components/NavBar';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <div className='bg-slate-900'>
       <NavBar/>    
      </div>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/cart"} element={<Cart />}/>
      </Routes>
      <Toaster/>

    </div>
  );
}

export default App;
