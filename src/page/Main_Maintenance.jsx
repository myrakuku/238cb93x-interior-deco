import React from 'react';
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import ProjectData_M from "../component/ProjectData_M";
import SearchBar_M from '../component/SearchBar_M';



const Main_Interior = () => {

    return(
        <>
        <Nav/>
        <Slider/>
        <SearchBar_M/>
        <ProjectData_M/>
    </>
    );
}

export default Main_Interior;