import './App.css';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AdminDashboard from './AdminDashboard/AdminDashboard';

// routing stuff
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
            <Route path='/SignUp' element={< SignUp />}/>
            <Route path='/SignIn' element={< Login />}/>
            <Route path='/Home' element={< Home />}/>
            <Route path='/AdminDashboard' element={< AdminDashboard />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
