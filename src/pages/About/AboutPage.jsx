import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import pdf from '../../assets/files/HV_Andrés Santiago Jiménez Guzmán.pdf';

function Tilt(props) {
    // eslint-disable-next-line react/prop-types
    const { options, zIndex, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} style={{ zIndex: zIndex }} {...rest} />;
}


export const AboutPage = () => {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30,
    };

    return (
        <div id='about' className='relative h-max w-[100%] m-auto bg-about-section bg-top pt-[5rem]  md:pt-[8rem] md:bg-left '>
            <div className="grid gap-4 items-center justify-items-center p-6 md:grid-cols-2 ">
                <div className=''>
                    <Tilt className="border-4 relative w-[200px] h-[200px] bg-me bg-cover bg-center shadow-2xl rounded-[90%] md:w-[260px] md:h-[260px] " options={options} zIndex={0} />
                </div>
                <div className='p-1 text-center text-white '>
                    <h1 className='font-mainFont font-bold text-xl md:mt-6'>HEY I&apos;M  Santiago Jiménez</h1>
                    <p className='font-mainFont text-base mt-4 md:text-xl'>
                        A passionate Web Developer focused on the Frontend and Backend, building the visual interface of websites and web applications that drives the integral success of each project.
                        My dedication focuses on bringing to life exceptional digital experiences that captivate users and elevate the excellence of each project.</p>
                </div>
            </div>
            <div className='flex justify-center items-center pb-10 md:pb-4'>
                <button className="bg-white w-[100px] rounded-2xl p-1 hover:bg-[#EDB11F] hover:text-white">
                    <span>
                        <a href={pdf} download="CV_Andres_Santiago_Jimenez_Guzman.pdf">
                            CVS
                        </a>
                    </span>
                </button>
            </div>
        </div>
    )
}
