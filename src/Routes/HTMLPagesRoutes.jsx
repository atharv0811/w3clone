import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HTMLHome from '../pages/html/HTMLHome'
import HTMLIntro from '../pages/html/HTMLIntro'
import HTMLEditors from '../pages/html/HTMLEditors'

const HTMLPagesRoutes = () => {
    return (
        <Routes>
            <Route path='/html' element={<HTMLHome />} />
            <Route path='/html-intro' element={<HTMLIntro />} />
            <Route path='/html-editors' element={<HTMLEditors />} />
        </Routes>
    )
}

export default HTMLPagesRoutes