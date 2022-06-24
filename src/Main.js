import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DigIlluPosts } from './pages/DigIlluPosts';
import { PaintingFineArtPosts } from './pages/PaintingFineArtPosts';
import { SWEUXPosts } from './pages/SWEUXPosts';
import { TypographyLogosPosts } from './pages/TypographyLogosPosts';

export const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<SWEUXPosts />} />
            <Route path='/typography-logos' element={<TypographyLogosPosts />} />
            <Route path='/digital-illustration' element={<DigIlluPosts />} />
            <Route path='/painting-fine-art' element={<PaintingFineArtPosts />} />
        </Routes>
    )
}