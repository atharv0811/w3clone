import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HTMLHome from '../pages/html/HTMLHome'
import HTMLIntro from '../pages/html/HTMLIntro'
import HTMLEditors from '../pages/html/HTMLEditors'
import HTMLHeadings from '../pages/html/HTMLHeadings'
import HTMLElements from '../pages/html/HTMLElements'
import HTMLBasics from '../pages/html/HTMLBasics'
import HTMLForms from '../pages/html/HTMLForms'
import HTMLFormAttributes from '../pages/html/HTMLFormAttributes'
import HTMLFormElements from '../pages/html/HTMLFormElements'
import HTMLInputTypes from '../pages/html/HTMLInputTypes'
import HTMLInputAttributes from '../pages/html/HTMLInputAttributes'
import InputFormAttributes from '../pages/html/InputFormAttributes'
import HTMLColors from '../pages/html/HTMLColors'
import HTMLRGB from '../pages/html/HTMLRGB'
import HTMLHEX from '../pages/html/HTMLHEX'
import HTMLHSL from '../pages/html/HTMLHSl'

const HTMLPagesRoutes = () => {
    return (
        <Routes>
            <Route path='/html' element={<HTMLHome />} />
            <Route path='/html-intro' element={<HTMLIntro />} />
            <Route path='/html-editors' element={<HTMLEditors />} />
            <Route path='/html-basics' element={<HTMLBasics />} />
            <Route path='/html-elements' element={<HTMLElements />} />
            <Route path='/html-headings' element={<HTMLHeadings />} />
            <Route path='/html-colors/colors' element={<HTMLColors />} />
            <Route path='/html-colors/rgb' element={<HTMLRGB />} />
            <Route path='/html-colors/hex' element={<HTMLHEX />} />
            <Route path='/html-colors/hsl' element={<HTMLHSL />} />
            <Route path='/html-forms' element={<HTMLForms />} />
            <Route path='/html-form-attributes' element={<HTMLFormAttributes />} />
            <Route path='/html-form-elements' element={<HTMLFormElements />} />
            <Route path='/html-input-types' element={<HTMLInputTypes />} />
            <Route path='/html-input-attributes' element={<HTMLInputAttributes />} />
            <Route path='/html-input-form-attributes' element={<InputFormAttributes />} />
        </Routes>
    )
}

export default HTMLPagesRoutes