import { Home } from "./pages/Home/Home"
import { MainRouter } from "./router/MainRouter"

export const App = () => {
  return (
    <>
      <MainRouter>
        <Home />
      </MainRouter>
    </>
  )
}
