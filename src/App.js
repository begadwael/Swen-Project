import './App.css';
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AdminDashboard from './AdminDashboard/AdminDashboard';




function App() {
  return (
    <div className="App">
        {/*There is no routing implemented*/}
        {/*uncomment the component to see the page*/}



        {/*<SignUp/>*/}

        {/* <Login/> */}
        <AdminDashboard/>
        {/* <Home/> */}


    </div>
  );
}

export default App;
