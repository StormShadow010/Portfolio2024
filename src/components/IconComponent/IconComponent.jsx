/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from "react";

export const IconComponent = ({ icons }) => {

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleHover = (index) => {
        setHoveredIcon(index);
    }

    const handleLeave = () => {
        setHoveredIcon(null);
    }

    const IndividualIcon = ({ icon, index, onHover }) => {
        const paths = icon.icon()
        const clonedPaths = React.Children.map(paths.props.children, (path) => {
            return React.cloneElement(path, {
                fill: onHover ? path.props.fill : (path.props['data-focus'] ? '#20264d' : 'white')
            });
        })

        return (
            <div key={index} className='w-[70px] h-[70px]'>
                <div onMouseOver={() => handleHover(index)} onMouseLeave={handleLeave}>
                    <svg viewBox="0 0 32 32">{clonedPaths}</svg>
                </div>
            </div>
        )
    }


    return (
        <div className='flex'>
            {
                icons.map((icon, index) => {
                    return <IndividualIcon key={index} icon={icon} index={index} onHover={hoveredIcon === index} />;
                })
            }
        </div>
    )
}