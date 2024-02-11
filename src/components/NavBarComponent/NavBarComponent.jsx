import { useState } from "react";
import logoP from '/assets/icons/logoMain.jpg';
import { Link as ScrollLink } from "react-scroll";

const dataLinks = [
    {
        label: "Home",
        link: true,
        path: "home",
    },
    {
        label: "About",
        link: false,
        path: "about",
    },
    {
        label: "Skills",
        link: false,
        path: "skills",
    },
    {
        label: "Portfolio",
        link: false,
        path: "portfolio",
    },
    {
        label: "Tutorials",
        link: false,
        path: "tutorials",
    },
    {
        label: "Certificates",
        link: false,
        path: "certificates",
    },
];


export const NavBarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#010b24] h-20 w-full flex items-center justify-evenly fixed top-0 md:h-28 z-50">
            <ScrollLink
                className="cursor-pointer w-20 h-20 z-50 md:h-28 md:w-32"
                to={'home'}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
            >
                <img src={logoP} alt="Logo" className="w-full h-full object-cover object-center" />
            </ScrollLink>
            <div className="h-20 -ml-8 z-50 flex items-center justify-between">
                <h1 className="text-white font-logoFont text-center ml-6">StormShadow</h1>
            </div>
            <input
                type="checkbox"
                id="menu"
                className="hidden peer/menuHamb"
                onClick={handleMenuClick}
            />
            <label
                htmlFor="menu"
                className={`filtered-black-white w-10 h-10 bg-cover bg-center mr-2 z-50 transition-transform duration-[800ms] ${isMenuOpen ? "bg-open-menu" : "bg-close-menu"}  md:hidden`}
            />
            <div
                className={`fixed inset-0 md:static bg-transparent ${isMenuOpen ? "transition-transform duration-[500ms] translate-y-20" : "-translate-y-full"} md:static md:translate-y-0  md:transition-none`}
            >
                <ul className="absolute inset-x-0 grid gap-10 bg-[#010b24] text-white text-center mx-auto py-4 rounded-3xl w-[90%]  md:static md:grid-flow-col md:w-max md:bg-transparent md:p-0">
                    {
                        dataLinks.map((link, index) => {
                            return (
                                <ScrollLink
                                    className="cursor-pointer"
                                    key={index}
                                    to={link.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                >
                                    <li> {link.label} </li>
                                </ScrollLink>
                            )
                        })
                    }
                    {/* <li> <a href="">Home</a> </li>
                    <li> <a href="">About</a> </li>
                    <li> <a href="">Projects</a> </li>
                    <ScrollLink
                        className="cursor-pointer"
                        // key={label}
                        to={'tutoriales'}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    // onSetActive={() => handleClick(path)}
                    >
                        <li> <a href="">Contact</a> </li>
                    </ScrollLink> */}
                </ul>
            </div>
        </div>
    );
}
