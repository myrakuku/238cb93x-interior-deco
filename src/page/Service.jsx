import React from 'react';
import Nav from "../component/Nav";
import ServiceInfo from "../component/Serviceinfo";
import bg1 from "../image/about.jpg";



const Main_Interior = () => {
    

    return(
        <>
        <title>啟發裝飾工程｜一站式裝修服務範疇｜全屋設計、翻新、維修保養</title>
        <meta name='description' content='啟發裝飾工程提供全面一站式裝修服務，涵蓋全屋設計規劃、舊屋翻新、專業維修保養及訂造傢俬。無論是新居入伙還是優化空間，我們都能為您實現。歡迎報價查詢！' />
        <Nav/>
        <hero className="w-full">
            <section className="relative mt-[100px]">
                <img src={bg1} className=" w-full h-[150px] md:h-[200px] object-cover blur-sm" alt=""/>   
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl text-white">服務介紹</span>
                </div>
            </section>
        </hero>
        <ServiceInfo/>
    </>
    );
}

export default Main_Interior;