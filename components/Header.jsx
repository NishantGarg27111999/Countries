import { useContext, useState } from "react"
import { temp, theme } from "../contexts/themeProvider";
import { useTheme } from "../hooks/useTheme";

export default function Header() {

    // const[isDark,setIsDark]=useContext(theme);
    const [isDark, setIsDark] = useTheme();
    console.log(isDark);
    // const theme=localStorage.getItem('theme');
    // console.log(theme);
    return (
        <>


            <header className={isDark ? 'dark' : ''}>
                <h2><a href="/">Where in the World?</a></h2>
                <div onClick={() => {
                    setIsDark(!isDark);
                    // debugger
                    localStorage.setItem('uitheme', !isDark);
                }}>
                    <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i> {isDark ? 'Light' : 'Dark'} mode
                </div>
            </header>
        </>
    )
}