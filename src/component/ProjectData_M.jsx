import React from "react";
import ProjectImage1 from "../image/M-1.jpg";
import { Link } from "react-router-dom";

const ProjectData_Interior = () => {

    const projectData = [
        {
            id: 1,
            title: "旺角",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur  Lorem ipsum turpis nec nisi ullamcorper velit consectetur ....",
            Duration: 1,
            EstimatePrice: 5000,
            Sqf: 20,
            Type: "廁所維修",
            image: ProjectImage1
        },
        {
            id: 2,
            title: "九龍灣",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur....",
            Duration: 1,
            EstimatePrice: 10000,
            Sqf: 50,
            Type: "廚戶翻新",
            image: ProjectImage1
        }
    ];

    return(
        <Link to="/projectdetail">
            <section className="w-full pt-5 text-left p-10">
            {projectData.map(projectData => (
                <div key={projectData.id} className="grid md:grid-cols-2 my-5">
                <div className="">
                    <img src={projectData.image} className="w-[400px] h-[300px] md:w-[500px] md:h-[375px] object-cover"></img>
                </div>
                <div className="pl-2 pt-2 md:pt-0">
                    <h4 className="text-2xl font-bold text-[#225C6F]">{projectData.title}</h4>
                    <p className="text-md text-[#367a91] mb-5">{projectData.description}</p>
                    <p className="text-sm text-[#367a91]">工期: {projectData.Duration}日內</p>
                    <p className="text-sm text-[#367a91]">預算: ${projectData.EstimatePrice}</p>
                    <p className="text-sm text-[#367a91]">尺數: {projectData.Sqf}sqf</p>
                    <p className="text-sm text-[#367a91]">類別: {projectData.Type}</p>
                </div>
            </div>
            ))}
        </section>
        </Link>
    );
};

export default ProjectData_Interior;