import { Route, Routes } from "react-router-dom"
import ReactGetStart from "../pages/react/ReactGetStart"
import ReactHome from "../pages/react/ReactHome"
import ReactIntro from "../pages/react/ReactIntro"
import ReactUpgrade from "../pages/react/ReactUpgrade"
import ReactES6 from "../pages/react/React ES6"
import ReactRenderHTML from "../pages/react/ReactRenderHTML"
import ReactJSX from "../pages/react/ReactJSX"

const ReactPagesRoutes = () => {
    return (
        <Routes>
            <Route path="/react" element={<ReactHome />} />
            <Route path="/react-intro" element={<ReactIntro />} />
            <Route path="/react-get-started" element={<ReactGetStart />} />
            <Route path="/react-upgrade" element={<ReactUpgrade />} />
            <Route path="/react-es6" element={<ReactES6 />} />
            <Route path="/react-render-html" element={<ReactRenderHTML />} />
            <Route path="/react-jsx" element={<ReactJSX />} />
        </Routes>
    )
}

export default ReactPagesRoutes