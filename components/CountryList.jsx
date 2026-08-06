import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export default function CountryList({query,region}){
    const [CountriesData,setCountriesData]=useState([]);
    console.log(CountriesData);
    useEffect(()=>{
        fetch('/.netlify/functions/getAllCountries')
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
                
                CountriesData.length==0?<CountryListShimmer/>:CountriesData.filter((country)=>(country.names.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query))).map((country)=>{
                    // console.log(country);
                    
                    return country.flag.url_svg && <CountryCard key={country.names.common} name={country.names.common} flag={country.flag.url_svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capitals?.[0].name} data={country}/>
                    
                })
                
            }
            
            
        </div>
    )
}