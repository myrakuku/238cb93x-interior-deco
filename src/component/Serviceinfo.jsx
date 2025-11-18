import React from 'react';


const ServiceInfo = () => {

    const Serviceinfo_data = [
        {
            id: 1,
            title: "前期規劃與設計服務",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur  Lorem ipsum turpis nec nisi ullamcorper velit consectetur ....",
        },
        {
            id: 2,
            title: "基礎工程施工服務",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur....",
        }
    ];

    return(
    <>
        <div className="w-full">
        {Serviceinfo_data.map(Serviceinfo_data => (
            <section className='text-left m-10 mb-[100px]'>
                <div className='m-5'>
                    <h4 className='mb-2 text-xl text-[#AB6732] font-bold'>{Serviceinfo_data.title}</h4>
                    <p className='mb-10 tex-sm text-[#AB6732]'>{Serviceinfo_data.description}</p>
                </div>
            </section>
            ))}    
        </div>
    </>
    );
}

export default ServiceInfo;