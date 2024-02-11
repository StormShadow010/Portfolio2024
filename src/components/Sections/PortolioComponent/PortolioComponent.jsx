/* eslint-disable react/prop-types */
import { useState } from "react"
import { CardProjectComponent } from "../../CardProjectComponent/CardProjectComponent"

const data = [
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

    }
]

export const PortolioComponent = () => {

    const [infoShow, setInfoShow] = useState(data[0])

    const handleInfo = (e) => {
        e.preventDefault();
        setInfoShow(data[e.target.id])
    }

    const ButtonProject = ({ idProject }) => {
        return (
            <button id={idProject} className="w-[50px] h-full bg-[#AE445A] rounded-sm text-white font-bold flex justify-center items-center m-1" onClick={handleInfo}>{idProject + 1}</button>
        )
    }

    return (
        <div className="flex flex-col bg-projectIn bg-cover bg-center h-max w-full">
            <div className="text-5xl font-extrabold text-center md:mb-[10px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Portofolio
                </span>
            </div>
            <div className="w-[90%] mx-auto pt-2 md:w-[30%] md:pt-0">
                <div className="flex flex-wrap justify-center items-center gap-3 bg-[#F39F5A] p-1  rounded-xl">
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
        </div>
    )
}