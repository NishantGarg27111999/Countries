import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export default function CountryList({query,region}){
    const [CountriesData,setCountriesData]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
                .then((res)=>res.json())
                .then((data)=>{
                    
                    setCountriesData(data);
                //    console.log(data);
                
                    
                })
    },[])

    // useEffect(()=>{
    //     fetch(`https://restcountries.com/v3.1/region/${region}`)
    //         .then((res)=>res.json())
    //         .then((data)=>{
                
    //            //this .then executes even we get 404 error because fetch treats  HTTP errors (like 404, 500) as a successful request unless there is a network-level error (e.g., DNS failure or no internet).
    //             data.length>0 && setCountriesData(data);
    //         }).catch((e)=>{
    //             console.log(e);
                
    //         })
    // },[region])
    
    return(
        <div className="card-container">
            {
                
                CountriesData.length==0?<CountryListShimmer/>:CountriesData.filter((country)=>(country.name.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query))).map((country)=>{
                    // console.log(country);
                    
                    return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]} data={country}/>
                    
                })
                
            }
            
            
        </div>
    )
}