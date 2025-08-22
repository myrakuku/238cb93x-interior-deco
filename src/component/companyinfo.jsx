import React from 'react';



const CompanyInfo = () => {

    return(
        <div className="w-full">
            <section className='text-center m-10'>
                <div>
                    <h4 className='mb-2 text-xl text-[#AB6732] font-bold'>啟發裝飾工程有限公司</h4>
                    <p className='mb-10 tex-sm text-[#AB6732]'>Lorem ipsum turpis nec nisi ullamcorper velit consectetur eget consectetur in eros turpis consequat arcu nisi adipiscing commodo aliquet turpis et amet aliquam sit convallis eu at lectus id porttitor sit gravida posuere etiam urna fermentum sit nunc pulvinar suspendisse. Lorem ipsum turpis nec nisi ullamcorper velit consectetur eget consectetur in eros turpis consequat arcu nisi adipiscing commodo aliquet turpis et amet aliquam sit convallis eu at lectus id porttitor sit gravida posuere etiam urna fermentum sit nunc pulvinar suspendisse. Lorem ipsum turpis nec nisi ullamcorper velit consectetur eget consectetur in eros turpis consequat arcu nisi adipiscing commodo aliquet turpis et amet aliquam sit convallis eu at lectus id porttitor sit gravida posuere etiam urna fermentum sit nunc pulvinar suspendisse.</p>
                    <div className='grid md:grid-cols-3 gap-10'>
                        <div>
                            <p className='text-sm text-[#ad774e] font-bold'>電話</p>
                            <p className='text-sm text-[#ad774e]'>12345678</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#ad774e] font-bold'>電郵</p>
                            <p className='text-sm text-[#ad774e]'>xxxxxx@insfsfoi.com</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#ad774e] font-bold'>地址</p>
                            <p className='text-sm text-[#ad774e]'>XXXXXXXXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='m-10 flex justify-center items-center gap-10'>
                <button>
                    <svg className='w-[48px] h-[48px]' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ad774e" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M56 68a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm34 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path stroke="#ad774e" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M170 115.24c0-19.305-20.141-35.392-45.044-35.392-24.902 0-45.043 16.087-45.043 35.392 0 19.304 20.141 35.392 45.043 35.392a55.928 55.928 0 0 0 15.122-2.06l17.053 8.494-5.342-13.449A33.588 33.588 0 0 0 170 115.24Z"></path><path stroke="#ad774e" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M109 107a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm32 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path stroke="#ad774e" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128.174 79.978c0-24.903-23.744-45.044-53.087-45.044C45.744 34.934 22 54.946 22 79.849a42.988 42.988 0 0 0 20.784 35.392l-7.915 16.087 18.339-10.489a60.859 60.859 0 0 0 21.878 4.055 62.617 62.617 0 0 0 6.435-.387"></path></g></svg>
                </button>
                <button>
                    <svg className='w-[38px] h-[38px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#ad774e"></path> </g></svg>
                </button>
                <button>
                    <svg className='w-[38px] h-[38px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#ad774e"></path> </g></svg>
                </button>
            </section>
        </div>
    );
}

export default CompanyInfo;