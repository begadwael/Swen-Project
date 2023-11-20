import './App.css';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AdminDashboard from './AdminDashboard/adminDashboard';
import Book from "./Book/Book";
import ShoppingCart from './ShoppingCart/ShoppingCart';
// routing stuff
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
            <Route path='/SignUp' element={< SignUp />}/>
            <Route path='/SignIn' element={< Login />}/>
            <Route path='/' element={< Home />}/>
            <Route path='/book' element={< Book />}/>
            <Route path='/admin' element={< AdminDashboard />}/>
            <Route path='/cart' element={< ShoppingCart />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
