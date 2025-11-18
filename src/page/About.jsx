import React from 'react';
import Nav from "../component/Nav";
import CompanyInfo from "../component/companyinfo";
import bg1 from "../image/about.jpg";



const Main_Interior = () => {

    return(
        <>
        <title>啟發裝飾工程｜關於我們 – 可靠的裝修合作夥伴，超過40年專業經驗</title>
        <meta name='description' content='認識啟發裝飾工程的專業團隊！我們深耕本地裝修業界超過40年，始終秉持「以誠待客，以質為先」的理念，已成功為上千家庭實現理想家居。' />
        <Nav/>
        <hero className="w-full">
            <section className="relative mt-[100px]">
                <img src={bg1} className=" w-full h-[150px] md:h-[200px] object-cover blur-sm" alt=""/>   
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl text-white">關於我們</span>
                </div>
            </section>
        </hero>
        <CompanyInfo/>
    </>
    );
}

export default Main_Interior;