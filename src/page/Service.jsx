import React from 'react';
import Nav from "../component/Nav";
import bg1 from "../image/about.jpg";
import CompanyInfo from '../component/companyinfo';



const Main_Interior = () => {

    return(
        <>
        <Nav/>
        <hero className="w-full">
            <section className="relative mt-[100px]">
                <img src={bg1} className=" w-full h-[150px] md:h-[200px] object-cover blur-sm" />   
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl text-white">服務介紹</span>
                </div>
            </section>
        </hero>
        <div className="w-full">
            <section className='text-left m-10 mb-[100px]'>
                <div className='m-5'>
                    <h4 className='mb-2 text-xl text-[#AB6732] font-bold'>一、前期規劃與設計服務</h4>
                    <p className='mb-10 tex-sm text-[#AB6732]'>
                    空間規劃設計：依據業主生活習慣、家庭成員結構，規劃客廳、臥室、廚房、衛浴等區域的動線與格局（如隔間調整、開放式空間規劃），確保空間利用率與舒適度。
                    風格定製設計：提供現代簡約、北歐、新中式、工業風等多元風格設計，包含色彩搭配、材質挑選（如木質、石材、金屬）、傢俱尺寸協調等，輸出設計效果圖（3D 渲染圖、平面佈局圖）。
                    預算規劃與報價：根據設計方案拆解各項費用（設計費、材料費、施工費、水電改造費等），提供詳細報價清單，協助業主控制預算，避免後續追加隱性費用。
                    建材挑選諮詢：提供建材品質、性價比、環保標準（如 E0 級板材、低甲醛塗料）的專業建議，可協助業主对接建材供應商，或提供「包工包料」的建材採購服務。
                    </p>
                    {/* Repeat */}
                    <h4 className='mb-2 text-xl text-[#AB6732] font-bold'>一、前期規劃與設計服務</h4>
                    <p className='mb-10 tex-sm text-[#AB6732]'>
                    空間規劃設計：依據業主生活習慣、家庭成員結構，規劃客廳、臥室、廚房、衛浴等區域的動線與格局（如隔間調整、開放式空間規劃），確保空間利用率與舒適度。
                    風格定製設計：提供現代簡約、北歐、新中式、工業風等多元風格設計，包含色彩搭配、材質挑選（如木質、石材、金屬）、傢俱尺寸協調等，輸出設計效果圖（3D 渲染圖、平面佈局圖）。
                    預算規劃與報價：根據設計方案拆解各項費用（設計費、材料費、施工費、水電改造費等），提供詳細報價清單，協助業主控制預算，避免後續追加隱性費用。
                    建材挑選諮詢：提供建材品質、性價比、環保標準（如 E0 級板材、低甲醛塗料）的專業建議，可協助業主对接建材供應商，或提供「包工包料」的建材採購服務。
                    </p>
                </div>
            </section>
        </div>
    </>
    );
}

export default Main_Interior;