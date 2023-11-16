import React from 'react';
import Nav_bar from "../Header/Nav_bar";
import SearchBar from "../SearchBar/SearchBar";
import Catalogue from "../Catalogue/Catalogue";
import SideBar from "../SideBar/SideBar";

const home = () => {
    return (
        <div>
            <Nav_bar/>
            <div className={"mainBox"}>
                <div className="vert_box">
                    <SearchBar/>
                    <Catalogue/>
                </div>
                <SideBar className={"side"}/>
            </div>
            {/*<div className={"mainBox"}>*/}
            {/*    <Catalogue/>*/}
            {/*    <SideBar/>*/}
            {/*</div>*/}
        </div>
    );
};

export default home;
