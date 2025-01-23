import { Route, Routes } from "react-router-dom"
import ReactGetStart from "../pages/react/ReactGetStart"
import ReactHome from "../pages/react/ReactHome"
import ReactIntro from "../pages/react/ReactIntro"

const ReactPagesRoutes = () => {
    return (
        <Routes>
            <Route path="/react" element={<ReactHome />} />
            <Route path="/react-intro" element={<ReactIntro />} />
            <Route path="/react-get-started" element={<ReactGetStart />} />
        </Routes>
    )
}

export default ReactPagesRoutes