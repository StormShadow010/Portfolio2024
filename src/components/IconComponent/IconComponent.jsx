/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from "react";

export const IconComponent = ({ icons }) => {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleHover = (index) => { setHoveredIcon(index); }

    const handleLeave = () => { setHoveredIcon(null); }

    const IndividualIcon = ({ icon, index, onHover }) => {
        const paths = icon.icon();
        const clonedPaths = React.Children.map(paths.props.children, (path) => {
            return <path.type {...path.props} fill={onHover ? path.props.fill : (path.props['data-focus'] ? '#20264d' : 'white')} />;
        });

        return (
            <div
                className='w-[85px] h-[70px] flex justify-center items-center flex-col mt-3 hover:scale-125 group'
                onMouseOver={() => handleHover(index)}
                onMouseLeave={handleLeave}
            >
                <div >
                    <svg viewBox='0 0 32 32' width='100%' height='100%'>
                        {clonedPaths}
                    </svg>
                </div>
                <div>
                    <span className='group-hover:text-[0.9rem] text-[0.8rem] font-mainFont font-bold text-black'>{icon.name}</span>
                </div>
            </div>
        );
    };

    return (
        <div className='flex flex-wrap justify-center items-center gap-8 mt-2 md:h-[280px]'>
            {
                icons.map((icon, index) => {
                    return <IndividualIcon key={index} icon={icon} index={index} onHover={hoveredIcon === index} />
                })
            }
        </div >
    )
}