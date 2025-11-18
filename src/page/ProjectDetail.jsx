import React from "react";
import Nav from "../component/Nav";
import ProjectImage1 from "../image/banner-1.jpg";
import Img1 from "../image/image-10.jpg";
import Img2 from "../image/image-11.jpg";
import Img3 from "../image/image-12.jpg";
import VideoEmbed from '../component/VideoEmbed'; // Import your component


const ProjectData_Detail = () => {

const youtubeEmbedUrl = [
        "t7iDIZ0RuE4",
        "TXbx7j-04RY"
]


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
        }
    ];

    const ProjectImg = [
        Img1,
        Img2,
        Img3,
        Img1,
        Img2,
        Img3
    ];

    return(
    <>
        <Nav/>
        <section className="w-full mt-10 pt-5 text-left p-10">
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

        <section className="px-10">
            <div className="pt-5">
                <p className="text-2xl font-bold text-amber-900">相片 Photo</p>
                <div className="flex flex-wrap gap-5">
                {ProjectImg.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Project ${index + 1}`} className="w-[500px] h-auto rounded-md"></img>
                    </div>
                ))}
                </div>
            </div>
            <div className="pt-5">
                <p className="text-2xl font-bold text-amber-900 mb-5">影片 Video</p>
                {youtubeEmbedUrl.map((video, index) => (
                    <div className="flex flex-wrap gap-5 mb-5">
                        <VideoEmbed embedUrl={`https://www.youtube.com/embed/${video}`} title="Embedded YouTube Video" />
                    </div>
                ))}
            </div>
        </section>
    </>
    );
};

export default ProjectData_Detail;