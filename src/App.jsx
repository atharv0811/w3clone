import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import ReactRoutes from "./Routes/ReactPagesRoutes"
import HTMLPagesRoutes from "./Routes/HTMLPagesRoutes"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes />
        <HTMLPagesRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
