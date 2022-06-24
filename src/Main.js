import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DigIlluPosts } from './pages/DigIlluPosts';
import { PaintingFineArtPosts } from './pages/PaintingFineArtPosts';
import { SWEUXPosts } from './pages/SWEUXPosts';
import { TypographyLogosPosts } from './pages/TypographyLogosPosts';

import { Page } from './splashpage/Page'

export const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Page posts={<SWEUXPosts />} pgKey="SWEUX"/>} />
            <Route path='/typography-logos' element={<Page posts={<TypographyLogosPosts />} pgKey="TypographyLogos"/>} />
            <Route path='/digital-illustration' element={<Page posts={<DigIlluPosts />}/>} pgKey="DigitalIllustration" />
            <Route path='/painting-fine-art' element={<Page posts={<PaintingFineArtPosts />}/>} pgKey="PaintingFineArt"/>
        </Routes>
    )
}