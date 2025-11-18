import React from 'react';
import Nav from "../component/Nav";
import ServiceInfo from "../component/Serviceinfo";
import bg1 from "../image/about.jpg";



const Main_Interior = () => {
    

    return(
        <>
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