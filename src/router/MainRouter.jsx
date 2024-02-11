import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { TutorialsPage } from "../pages/Tutorials/TutorialsPage"
import { CertificatesPage } from "../pages/Certificates/CertificatesPage"
import { AboutPage } from "../pages/About/AboutPage"
import { SkillsPage } from "../pages/Skills/SkillsPage"
import { PortfolioPage } from "../pages/Portfolio/PortfolioPage"

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/skills' element={<SkillsPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/tutorials' element={<TutorialsPage />} />
                <Route path='/certificates' element={<CertificatesPage />} />
            </Routes>
        </BrowserRouter>
    )
}
