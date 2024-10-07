import { createContext, useState } from "react";

export const theme=createContext();

//  function temp(){
//     const[isDark,setIsDark]=useState(false);
//     return [isDark,setIsDark];
// }

//each time we use temp in different file this temp() will execute and new state is created, means 
//it will be connected with previous state and hence will not update values as those will 
//become completely different states with same name in different components;



export  function ThemeProvider({children}){
    const uiTheme=(JSON.parse(localStorage.getItem('uitheme'))||false);
    // localStorage.setItem('theme',false);
    // debugger
    // let uiTheme;
    // if(localStorage.getItem('uitheme')===undefined){
    //     uiTheme=false;
    // }
    // else{
    //     uiTheme=Boolean(localStorage.getItem('uitheme'));
    // }
    const[isDark,setIsDark]=useState(uiTheme);
    return (
        <theme.Provider value={[isDark,setIsDark]}>
            {children}
         </theme.Provider>
    )
}

