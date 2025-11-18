import React from "react";
import {Link} from "react-router-dom";

const SearchBar_Interior = () => {

    return(
        <section className="w-full pt-5 text-center">
            <Link to="/"><button className="bg-[#225C6F]/50 text-white text-lg  py-2 px-5 shadow-lg">裝修</button></Link>
            <Link to="/maintenance"><button className="bg-[#225C6F] text-white text-lg py-2 px-5 shadow-lg">維修保養</button></Link>
            <input className="my-3 ml-20 mr-3 w-[300px] md:w-[450px] lg:w-[650px] h-10 border border-gray-200 shadow-lg rounded-lg"
            placeholder="  請輸入搜尋字眼(如：家居尺寸)"></input>
            <button className="bg-[#225C6F] text-white text-lg rounded-lg py-1 px-2 shadow-lg">搜尋</button>
        </section>
    );
};

export default SearchBar_Interior;