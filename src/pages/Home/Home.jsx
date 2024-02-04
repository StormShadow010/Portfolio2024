import { NavBarComponent } from "../../components/NavBarComponent/NavBarComponent"
import { AboutComponent } from "../../components/Sections/AboutComponent/AboutComponent"
import { SkillsComponent } from "../../components/Sections/SkillsComponent/SkillsComponent"

export const Home = () => {
    return (
        <>
            <NavBarComponent />
            <AboutComponent />
            <SkillsComponent />
        </>
    )
}
