import { NavBarComponent } from "../../components/NavBarComponent/NavBarComponent"
import { AboutPage } from "../About/AboutPage"
import { SkillsPage } from "../Skills/SkillsPage"
import { PortfolioPage } from "../Portfolio/PortfolioPage"
import { TutorialsPage } from "../Tutorials/TutorialsPage"
import { CertificatesPage } from "../Certificates/CertificatesPage"

export const Home = () => {
    return (
        <div id="home" className="relative inset-0">
            <NavBarComponent />
            <AboutPage />
            <SkillsPage />
            <PortfolioPage />
            <TutorialsPage />
            <CertificatesPage />
        </div>
    )
}
