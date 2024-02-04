import { useState } from "react";
import logoP from '/assets/icons/logoMain.jpg';

export const NavBarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#010b24] h-20 w-full flex items-center justify-evenly fixed top-0 md:h-28 z-50">
            <a href="./" className="w-20 h-20 z-50 md:h-28 md:w-32">
                <img src={logoP} alt="Logo" className="w-full h-full object-cover object-center" />
            </a>
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
                    <li> <a href="">Home</a> </li>
                    <li> <a href="">About</a> </li>
                    <li> <a href="">Projects</a> </li>
                    <li> <a href="">Contact</a> </li>
                </ul>
            </div>
        </div>
    );
}
