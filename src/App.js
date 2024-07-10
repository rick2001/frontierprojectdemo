import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import {ProductTable} from "./Components/ProductTable"
import {ProductForm} from "./Components/ProductForm"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer/>
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
