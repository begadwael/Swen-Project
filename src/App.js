import './App.css';
import Nav_bar from "./Header/Nav_bar";
import Catalogue from "./Catalogue/Catalogue";
import SideBar from "./SideBar/SideBar";
import SearchBar from "./SearchBar/SearchBar";


function App() {
  return (
    <div className="App">
        <Nav_bar/>
        {/*search*/}
        <SearchBar/>
        <div className={"mainBox"}>
            <Catalogue/>
            <SideBar/>
        </div>
    </div>
  );
}

export default App;
