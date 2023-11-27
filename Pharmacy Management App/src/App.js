import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Home from './Components/Home';
import Slidebar from './Components/Slidebar';
import Pills from './Components/Pills';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signin/>}></Route>
        <Route path='/slidebar' element={<Slidebar/>}></Route>
        <Route path='/pill' element={<Pills/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
