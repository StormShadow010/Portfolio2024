import { NavBarComponent } from "../../components/NavBarComponent/NavBarComponent"
import { AboutComponent } from "../../components/Sections/AboutComponent/AboutComponent"
import { PortolioComponent } from "../../components/Sections/PortolioComponent/PortolioComponent"
import { SkillsComponent } from "../../components/Sections/SkillsComponent/SkillsComponent"

export const Home = () => {
    return (
        <div className="relative inset-0">
            <NavBarComponent />
            <AboutComponent />
            <SkillsComponent />
            <PortolioComponent />
        </div>
    )
}
