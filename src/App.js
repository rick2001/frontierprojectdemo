import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import {ProductTable} from "./Components/ProductTable"
import {ProductForm} from "./Components/ProductForm"

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Home/>
        <Routes>
          <Route path='/' element={<ProductTable/>} exact></Route>
          <Route path='/create' element={<ProductForm/>}></Route>

        </Routes>
      </Router>
      


    </div>
  );
}

export default App;
