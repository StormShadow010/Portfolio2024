/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export const CardProjectComponent = ({ infoProject }) => {

    return (
        <div className="w-[100%] mx-auto h-max wrapperCard grid grid-cols-1 md:grid-cols-2">
            <div className="w-[100%] p-2 md:w-full md:h-[380px]">
                <img className="rounded-md  w-full h-full object-cover" src={infoProject.imageProject} alt="" />
            </div>
            <div className=" -mt-[10px] flex flex-col justify-center p-2 md:justify-evenly">
                <h1 className="text-center text-white font-bold font-mainFont text-[1rem] mt-2 md:text-[2rem]">{infoProject.title}</h1>
                <h2 className="text-center font-mainFont text-[1.2rem] text-green-400 font-semibold">Stack:</h2>
                <ul className="flex justify-center items-center gap-2 text-center">
                    {
                        infoProject.stack.map((item, index) => {
                            return <li key={index} className="bg-[#fbf8bf] p-1 rounded-md flex flex-col items-center text-[#234e6f] font-semibold">{item}</li>
                        })
                    }
                </ul>
                <p className="text-center text-white font-mainFont mt-1">{infoProject.description}</p>
                <button className="flex justify-center items-center mt-1"><NavLink target="_blank" to={infoProject.repoLink}><img src="assets/icons/githubRepo.png" alt="" width={40} height={40} /></NavLink></button>

            </div>

        </div >
    )
}
