import './App.css';
import Login from './Components/auth/login';
import Mens from './Components/Pages/mens';
import Womens from './Components/Pages/womens';
import Kids from './Components/Pages/kids';
import Shop from './Components/Pages/shop';
import Cart from './Components/Pages/Cart';
import Latest from './Components/Pages/latest'
import Signup from './Components/auth/signup'
import Forget from './Components/auth/forget'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element=
      {      <Shop/>
      }
      />
      <Route path='/login' element={
        <Login/>
      }/>
      <Route path='/mens' element={
        <Mens/>
      }/>
      <Route path='/womens' element={
        <Womens/>
      }/>
      <Route path='/kids' element={
        <Kids/>
      }/>
      <Route path='/shop' element={
        <Shop/>
      }/>
      <Route path='/cart' element={
        <Cart/>
      }/>
      <Route path='/latest' element={
        <Latest/>
      }/>
      <Route path='/signup' element={
        <Signup/>
      }/>
      <Route path='/forget' element={
        <Forget/>
      }/>
      </Routes>
    </Router>
  );
}

export default App;
