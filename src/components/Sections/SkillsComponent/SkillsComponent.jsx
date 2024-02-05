import React from 'react';
import fronIcon from "/assets/icons/front-end.png"

export const SkillsComponent = () => {

    // const IconCreate = (svg)
    // Icons
    const CSS3Icon = () => {
        let pathHoverTotal = ""
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
            const originalFill = path.props.fill;
            const id = `path-${index + 1}`;
            const pathHover = `[&_#${id}]:hover:fill-[${originalFill}] `;
            pathHoverTotal += pathHover;
            // pathTotalHover += pathHover
            // console.log(pathHover);
            const fillColor = path.props['data-focus'] ? '#20264d' : 'white';
            return React.cloneElement(path, {
                id,
                fill: fillColor
            });
        });
        // return <svg viewBox="0 0 128 128">{clonedPaths}</svg>
        const svg = <svg viewBox="0 0 128 128">{clonedPaths}</svg>
        return { svg, pathHoverTotal };
    }

    const HTML5Icon = () => {
        let pathHoverTotal = ""
        const paths = (
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path>
                <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>
                <path data-focus={true} d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path>
            </svg>
        );

        const clonedPaths = React.Children.map(paths.props.children, (path, index) => {
            const originalFill = path.props.fill;
            const id = `path-${index + 1}`;
            const pathHover = `[&_#${id}]:hover:fill-[${originalFill}] `;
            pathHoverTotal += pathHover;
            // pathTotalHover += pathHover
            // console.log(pathHover);
            const fillColor = path.props['data-focus'] ? '#20264d' : 'white';
            return React.cloneElement(path, {
                id,
                fill: fillColor
            });
        });
        // return <svg viewBox="0 0 128 128">{clonedPaths}</svg>
        const svg = <svg viewBox="0 0 128 128">{clonedPaths}</svg>
        return { svg, pathHoverTotal };
    }

    //Data Icons
    const Icons = [
        {
            name: 'CSS3',
            icon: CSS3Icon(),
        },
        {
            name: 'HTML5',
            icon: HTML5Icon(),
        },
    ];

    console.log(CSS3Icon())
    // console.log(typeof ("#000"))
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
                    <div>

                        {Icons.map((icon, index) => {
                            console.log(icon, index)
                            return (
                                <div key={index} className={`w-[70px] h-[70px] ${icon.icon.pathHoverTotal}`}>
                                    {icon.icon.svg}
                                </div>
                            )
                        })
                        }
                    </div>
                    {/* Backend Skills */}
                    < div className="w-6 h-6 bg-blue-500" >

                        <div className="w-[250px] h-[250px] [&>svg]:fill-[#fff] [&_#grandchild2]:hover:fill-green-800">
                            <div className="">
                                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z"></path>
                                    <path className='' d="M26 5H16V29.5L24 27L26 5Z"></path>
                                    <path id="grandchild2" d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z">
                                    </path>
                                </svg>
                            </div>
                        </div>


                    </div>
                </div >
            </div >
        </div >
    )
}
