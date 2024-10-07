import { useContext, useState } from "react";
import CountryList from "./CountryList";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useOutletContext } from "react-router-dom";
import { temp, theme } from "../contexts/themeProvider";
import { useTheme } from "../hooks/useTheme";
import CountryListShimmer from "./CountryListShimmer";
import CountryCardShimmer from "./CountryCardShimmer";

export default function Home(){
    const [query,setQuery]=useState('');
    // const [region,setRegion]=useState('');
    // const isDark=useOutletContext();
//    const[isDark]=useContext(theme);
    const [isDark]=useTheme();


    // console.log(isDark);
    // console.log(query);
    return(
        <>
        
        <main className={isDark?'dark':''}>
        <div className="search-filter-container">
            <SearchBar setQuery={setQuery}/>
            <Filter setQuery={setQuery}/>
        </div>
            
            <CountryList query={query} />
        </main>
        </>
    )
}