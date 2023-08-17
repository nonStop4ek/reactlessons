import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";

const MainLayuot = () => {
    return (
        <div>

            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayuot};