import { useContext } from "react"
import { theme } from "../contexts/themeProvider";

export function useTheme(){
    const a=useContext(theme);
    return a;
}