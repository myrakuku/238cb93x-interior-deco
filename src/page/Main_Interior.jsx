import React from 'react';
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import ProjectData from "../component/ProjectData_Interior";
import SearchBarInterior from '../component/SearchBar_Interior';



const Main_Interior = () => {

    return(
        <>
        <title>啟發裝飾工程有限公司｜全屋裝修、維修一站式服務｜專業設計施工團隊</title>
        <meta name='description' content='啟發裝飾工程有限公司提供專業全屋裝修、翻新及維修服務，從設計到施工一條龍完成！品質保證、價格透明，讓您輕鬆打造理想家居。立即預約免費諮詢！' />
        <Nav/>
        <Slider/>
        <SearchBarInterior/>
        <ProjectData/>
        
    </>
    );
}

export default Main_Interior;