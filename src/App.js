import './App.css';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AdminDashboard from './AdminDashboard/adminDashboard';
import Book from "./Book/Book";
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Profile from './Profile/Profile';
// routing stuff
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Author from "./Author/Author";
import BookView from "./BookView/BookView";




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
            <Route path='/profile' element={< Profile />}/>
            <Route path='/author' element={< Author />}/>
            <Route path='/BookView' element={< BookView />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
