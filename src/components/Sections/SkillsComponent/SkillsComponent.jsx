import React, { useState } from 'react'
import fronIcon from "/assets/icons/front-end.png"


// eslint-disable-next-line react/prop-types
const HTML5Icon = ({ onHover }) => {
    const paths = (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
            <path data-focus={true} d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path>
        </svg>
    )

    const clonedPaths = React.Children.map(paths.props.children, (path) => {
        return React.cloneElement(path, {
            fill: onHover ? path.props.fill : (path.props['data-focus'] ? '#20264d' : 'white')
        });
    })
    return <svg viewBox="0 0 32 32">{clonedPaths}</svg>

}

// eslint-disable-next-line react/prop-types
const CSS3Icon = ({ onHover }) => {
    const paths = (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>
            <path data-focus={true} d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path>
        </svg>
    )

    const clonedPaths = React.Children.map(paths.props.children, (path) => {
        return React.cloneElement(path, {
            fill: onHover ? path.props.fill : (path.props['data-focus'] ? '#20264d' : 'white')
        });
    })
    return <svg viewBox="0 0 32 32">{clonedPaths}</svg>

}

const Icons = [
    {
        name: "HTML5",
        icon: HTML5Icon,
    },
    {
        name: "CC3",
        icon: CSS3Icon,
    },
]




export const SkillsComponent = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleHover = (index) => {
        setHoveredIcon(index);
    }

    const handleLeave = () => {
        setHoveredIcon(null);
    }

    return (
        <div className="relative h-screen w-full m-auto bg-skills-one bg-cover bg-center">
            <div className="text-5xl font-extrabold text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Skills
                </span>
            </div>
            <div className="absolute w-full inset-y-[4rem] my-auto  justify-center text-white">
                {/* Frontend Skills */}
                <div className="relative w-[300px] h-[215px] bg-[#0F99D9] my-[4rem] mx-[30px] py-[30px] px-[15px] text-black flex flex-col shadow-shadowCardSkills rounded-[15px]">
                    <div className="relative flex justify-center">
                        <img className="absolute -translate-y-full w-[100px] h-[100px]" src={fronIcon} alt="frontend" />
                        <h1 className="text-white font-techTitle font-bold text-[20px]">Frontend</h1>
                    </div>
                    <div className='flex'>
                        {Icons.map((icon, index) => {
                            return (
                                <div key={index} className={`w-[70px] h-[70px] bg-cover bg-center hover:scale-[1.2]`}>
                                    <div onMouseOver={() => handleHover(index)} onMouseLeave={handleLeave}>
                                        <icon.icon key={index} onHover={hoveredIcon === index} />
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    {/* Backend Skills */}
                    < div className="w-6 h-6 bg-blue-500" >
                    </div>
                </div >
            </div >
        </div >
    )
}
