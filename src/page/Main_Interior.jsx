import React from 'react';
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import ProjectData from "../component/ProjectData_Interior";
import SearchBar_Interior from '../component/SearchBar_Interior';



const Main_Interior = () => {

    return(
        <>
        <Nav/>
        <Slider/>
        <SearchBar_Interior/>
        <ProjectData/>
        
    </>
    );
}

export default Main_Interior;