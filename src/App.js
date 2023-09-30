import './App.css';
import NavBar from './components/NavBar';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>

      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/cart"} element={<Cart />}/>
      </Routes>
      <Toaster/>

    </div>
  );
}

export default App;
