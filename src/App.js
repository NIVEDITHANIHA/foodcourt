import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Restview from './pages/Restview';
import Header from './components/Header';
import Foooter from './components/Foooter';

function App() {
  return (
    <div>
      <Header />
      <Routes>


        <Route path='/' element={<Home></Home>}  ></Route>
        <Route path='/restview/:id' element={<Restview></Restview>}  ></Route>



      </Routes>
      <Foooter />
    </div>
  );
}

export default App;
