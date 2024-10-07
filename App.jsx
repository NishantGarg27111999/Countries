
import { useState } from "react";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeProvider";

export default function App(){
    // const[isDark,setIsDark]=useState(false);
    return (
        <>
        <ThemeProvider>
        <Header />
        <Outlet />
        </ThemeProvider>
        
        
        </>
        

    )
}