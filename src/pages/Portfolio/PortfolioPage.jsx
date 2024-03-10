/* eslint-disable react/prop-types */
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { CardProjectComponent } from "../../components/CardProjectComponent/CardProjectComponent"

const data = [
    {
        imageProject: "assets/projects/project5.png",
        title: "Heroes spa",
        stack: ['React JS', 'Boostrap', "Query-string"],
        description: "The project that was carried out consisted of public and protected routes with a react router for a visualization of DC and Marvel characters, in addition to being able to see each one by category and do a respective search.",
        repoLink: "https://github.com/StormShadow010/heroes-spa"
    },
    {
        imageProject: "assets/projects/project1.png",
        title: "Video Game e-commerce ",
        stack: ['React JS', 'SASS', 'Firebase'],
        description: "Project that consists of simulating a Video Games e-commerce in which you can buy and create products, this in connection with Firebase.",
        repoLink: "https://github.com/StormShadow010/ReactCoderHouse-Final-Project-"
    },
    {
        imageProject: "assets/projects/project2.png",
        title: "IPS Project ",
        stack: ['React JS', 'API Rest', 'SASS', 'Ant Dsg'],
        description: "Project of a website for an IPS company where data is handled massively for different medical cases through API microservices for the validation of users, types of rolls and group in charge.",
        repoLink: "https://github.com/StormShadow010/IPS-React"
    },
    {
        imageProject: "assets/projects/project3.png",
        title: "Multiclass Classifier",
        stack: ['Python', 'Artificial Intelligence', 'Data Management'],
        description: "Project where classification code is generated, which seeks to generate a multiclass classification based on a series of characteristics obtained by the patterns of the images of the turbidity article.",
        repoLink: "https://github.com/StormShadow010/Clasificador-Multiclase"
    },
    {
        imageProject: "assets/projects/project4.png",
        title: "PyPro App",
        stack: ['React Native', 'CSS', 'Mongo DB', 'Adobe Illustrator'],
        description: "Project where an application is generated for teaching the Python language where a dynamic interaction with the user is sought, allowing learning at their own pace.",
        repoLink: "https://github.com/StormShadow010/AmbienteMaestria-ReactNative"
    },

]

export const PortfolioPage = () => {
    const [infoShow, setInfoShow] = useState(data[0])

    const handleInfo = (e) => {
        e.preventDefault();
        setInfoShow(data[e.target.id])
    }

    const ButtonProject = ({ idProject }) => {
        return (
            <button id={idProject} className="w-[50px] h-full bg-[#AE445A] rounded-sm text-white font-bold flex justify-center items-center" onClick={handleInfo}>{idProject + 1}</button>
        )
    }

    return (
        <div id="portfolio" className="flex flex-col bg-projectIn bg-cover bg-center h-max w-full">
            <div className="text-center md:mb-[10px]">
                <span className="text-5xl font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Portofolio
                </span>

                <NavLink target="_blank" to="https://github.com/StormShadow010">
                    <div className="w-[50%] h-max mx-auto mt-2 flex items-center justify-evenly bg-[#E7AB79] rounded-3xl md:max-w-[200px]">
                        <span className="text-white font-mainFont font-semibold text-[15px]">Personal Github</span>
                        <img src={"assets/icons/enlace.png"} className="w-[50px] h-[50px]" alt="" />

                    </div></NavLink>
                <p className="text-white font-mainFont font-semibold text-[15px] mt-2">Click on the number to see the project</p>

            </div>
            <div className="w-[90%] mx-auto pt-2 md:w-[30%] md:pt-0">
                <div className="flex flex-wrap justify-center items-center gap-3 bg-[#F39F5A] p-2  rounded-xl">
                    {
                        data.map((project, index) => {
                            return <ButtonProject key={index} idProject={index} />
                        })
                    }
                </div>

            </div>
            <div>
                <div className="w-[100%] h-max p-[1.5rem]">
                    {infoShow && (
                        <CardProjectComponent infoProject={infoShow} />
                    )}
                </div>
            </div >
        </div >
    )
}
