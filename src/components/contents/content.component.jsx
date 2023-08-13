import React from "react";
import { Routes, Route, } from 'react-router-dom'

import { HomepageComponent } from "../pages/homepage/homepage.component";
import { AboutComponent } from '../pages/about/about.component'
import { AboutSotmAsiaComponent } from '../pages/about/about-sotm-asia.component'

export const ContentComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomepageComponent />} ></Route>
                <Route path="/about" element={<AboutComponent />} ></Route>
                <Route path="/about/sotm-asia" element={<AboutSotmAsiaComponent />} ></Route>
                <Route path="/about/sotm-asia-history" element={<AboutSotmAsiaComponent />} ></Route>
                <Route path="/about/code-of-conduct" element={<AboutSotmAsiaComponent />} ></Route>
                <Route path="/about/committee" element={<AboutSotmAsiaComponent />} ></Route>
            </Routes>
        </div>
    );
};
