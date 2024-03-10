import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const dataCertificates = [
    {
        id: 1,
        imageCertficate: "assets/certificates/certifi1.png",
    },
    {
        id: 2,
        imageCertficate: "assets/certificates/certifi2.png",
    },
    {
        id: 3,
        imageCertficate: "assets/certificates/certifi3.png",
    },
    {
        id: 4,
        imageCertficate: "assets/certificates/certifi4.png",
    },
    {
        id: 5,
        imageCertficate: "assets/certificates/certifi5.png",
    },
    {
        id: 6,
        imageCertficate: "assets/certificates/certifi6.png",
    },
    {
        id: 7,
        imageCertficate: "assets/certificates/certifi7.png",
    }
]

export const CertificatesPage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const autoplayParams = {
        delay: 2500,
        pauseOnMouseEnter: true,
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id='certificates' className='w-[100%] bg-[#363062] pb-8 '>

            <div className="text-5xl font-extrabold text-center md:mb-[10px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Certificates
                </span>
            </div>

            <Swiper className="swiper-slide w-[90%] mx-auto mt-3 md:w-[70%] lg:w-[48%]"
                spaceBetween={30}
                centeredSlides={true}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                autoplay={isHovered ? undefined : autoplayParams}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    dataCertificates.map((certificate) => {
                        return (
                            <SwiperSlide key={certificate.id}>
                                {/* <div className="w-[100%] h-[100%] flex justify-center items-center"> */}
                                <img className="w-full h-full" src={certificate.imageCertficate} alt={certificate.id} />
                                {/* </div> */}
                            </SwiperSlide>
                        )
                    })
                }
                {/* <SwiperSlide><img src={"assets/certificates/certifi1.png"} alt="" /></SwiperSlide> */}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    )
}
