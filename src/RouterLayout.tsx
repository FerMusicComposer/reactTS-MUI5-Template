import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';

export const RouterLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
