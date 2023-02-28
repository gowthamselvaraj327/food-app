import './App.css';
import Login from './components/login/Login';
import Data from './components/restaurant-data/Data';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/restaurant' element={<Data/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
