import React from 'react';
import fronIcon from "/assets/icons/front-end.png"

export const SkillsComponent = () => {

    // const IconCreate = (svg)
    // Icons
    const CSS3Icon = () => {
        const paths = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" >
                <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
                <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
                <path data-focus={true} fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
                <path data-focus={true} fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
                <path data-focus={true} fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
                <path data-focus={true} fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.33-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
            </svg >
        );

        const clonedPaths = React.Children.map(paths.props.children, (path, index) => {
            const id = `path-${index + 1}`;
            const fillColor = path.props['data-focus'] ? '#20264d' : '';
            return React.cloneElement(path, {
                id,
                fill: fillColor
            });
        });

        return <svg viewBox="0 0 128 128">{clonedPaths}</svg>
    }


    const HTML5Icon = () => {
        // let pathHoverTotal = ""
        const paths = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
                <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
                <path data-focus={true} fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
                <path data-focus={true} fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
            </svg>
        );
        const clonedPaths = React.Children.map(paths.props.children, (path, index) => {
            // const originalFill = path.props.fill;
            const id = `path-${index + 1}`;
            // const pathHover = `[&_#${id}]:hover:fill-[${originalFill}] `;
            // pathHoverTotal += pathHover;
            const fillColor = path.props['data-focus'] ? '#20264d' : 'white';
            return React.cloneElement(path, {
                id,
                fill: fillColor
            });
        });
        //console.log("H:", pathHoverTotal)
        return <svg viewBox="0 0 128 128">{clonedPaths}</svg>

    }

    //Data Icons
    const Icons = [
        {
            name: 'CSS3',
            icon: CSS3Icon(),
            className: "[&_#path-1]:hover:fill-[#1572B6] [&_#path-2]:hover:fill-[#33A9DC] [&_#path-3]:hover:fill-[#fff] [&_#path-4]:hover:fill-[#EBEBEB] [&_#path-5]:hover:fill-[#fff] [&_#path-6]:hover:fill-[#EBEBEB]",
        },
        {
            name: 'HTML5',
            icon: HTML5Icon(),
            className: "[&_#path-1]:hover:fill-[#E44D26] [&_#path-2]:hover:fill-[#F16529] [&_#path-3]:hover:fill-[#EBEBEB] [&_#path-4]:hover:fill-[#fff]"
        },
    ];

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
                            console.log(icon.className, index)
                            return (
                                <div key={index} className={`w-[70px] h-[70px] bg-cover bg-center [&>svg]:fill-[#ffffff] ${icon.className}`}>
                                    {icon.icon}
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
