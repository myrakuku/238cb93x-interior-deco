import React from "react";
import ProjectImage1 from "../image/banner-1.jpg";
import {Link} from "react-router-dom";

const ProjectData_Interior = () => {

    const projectData = [
        {
            id: 1,
            title: "長沙灣宇晴軒",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur Lorem ipsum turpis nec nisi ullamcorper velit consectetur  Lorem ipsum turpis nec nisi ullamcorper velit consectetur ....",
            Duration: 120,
            EstimatePrice: 265000,
            Sqf: 450,
            Style: "溫暖木元素",
            image: ProjectImage1
        },
        {
            id: 2,
            title: "長沙灣宇晴軒",
            description: "Lorem ipsum turpis nec nisi ullamcorper velit consectetur....",
            Duration: 120,
            EstimatePrice: 265000,
            Sqf: 450,
            Style: "溫暖木元素",
            image: ProjectImage1
        }
    ];

    return(
        <Link to="/projectdetail">
            <section className="w-full pt-5 text-left p-10">
            {projectData.map(projectData => (
                <div key={projectData.id} className="grid md:grid-cols-2 my-5">
                <div className="">
                    <img src={ProjectImage1} className="w-[400px] h-[300px] md:w-[500px] md:h-[375px] object-cover" alt=""></img>
                </div>
                <div className="pl-2 pt-2 md:pt-0">
                    <h4 className="text-2xl font-bold text-amber-900">{projectData.title}</h4>
                    <p className="text-md text-[#ad774e] mb-5">{projectData.description}</p>
                    <p className="text-sm text-[#ad774e]">工期: {projectData.Duration}日內</p>
                    <p className="text-sm text-[#ad774e]">預算: ${projectData.EstimatePrice}</p>
                    <p className="text-sm text-[#ad774e]">尺數: {projectData.Sqf}sqf</p>
                    <p className="text-sm text-[#ad774e]">設計風格: {projectData.Style}</p>
                </div>
            </div>
            ))}
        </section>
        </Link>
    );
};

export default ProjectData_Interior;