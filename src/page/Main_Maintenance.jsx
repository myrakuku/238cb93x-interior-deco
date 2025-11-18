import React from 'react';
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import ProjectDataM from "../component/ProjectData_M";
import SearchBarM from '../component/SearchBar_M';



const Main_Interior = () => {

    return(
        <>
        <title>啟發裝飾工程 | 專業維修保養服務 | 快速解決家居問題</title>
        <meta name='description' content='啟發裝飾工程提供專業家居維修保養服務，專精水電、牆身、門窗翻新及各類緊急維修。經驗豐富團隊，快速報價，準時完工，為您的家居提供最可靠的保養方案。立即致電查詢！' />
        <Nav/>
        <Slider/>
        <SearchBarM/>
        <ProjectDataM/>
    </>
    );
}

export default Main_Interior;