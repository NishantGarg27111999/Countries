import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import CountryDetailsShimmer from "./CoutryDetailsShimmer";

export default function CountryDetails() {
    const params=useParams();
    let countryName=params.country;
    console.log(countryName);
    const [countryData,setCountryData]=useState(null);
    const {state}=useLocation();

    function updateData(data){
        setCountryData({
            flag: data.flags.svg,
            name: data.name.common,
            nativeName: Object.values(data.name.nativeName||{})?.[0]?.common || null,
            population: data.population.toLocaleString('en-IN'),
            region: data.region,
            subRegion: data.subregion || null,
            capital: data.capital || null,
            tld: data.tld,
            currencies: Object.values(Object.values(data.currencies || {}))?.[0]?.name || null,
            languages: Object.values(data.languages || {})  ,
            borders: []
        });

       
        //promise.all() aspects an array but if we use 'data.borders?.map()' then in case 
        //when borders do not exists then it will return undefined and hence as undefined is not 
        //iterable so promise.all can't iterater undefined so error will appear. so i used precheck 'data.borders && promise.all()'
        data.borders && Promise.all(data.borders.map((border)=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then(([borderCountry])=>{
                return (
                    borderCountry.name.common

                    
                )
            })
        })).then((borderCountry)=>setCountryData((prevState)=>{return ({...prevState, borders: borderCountry})}))
    }

    
    useEffect(()=>{
        if(state){
            updateData(state);
            return;
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res)=>res.json())
        .then(([data])=>{
            // console.log(data);

            updateData(data);
            
        });
    },[])
    
    const [isDark] = useTheme();
    return (
        
        <main className={isDark?'dark':''}>
            
            <button className="back-btn" onClick={()=>{history.back()}} ><i className="fa-solid fa-arrow-left-long"></i> Back</button>
            {!countryData?<CountryDetailsShimmer/>:<div className="details-container"><div className="country-flag">
                <img src={countryData.flag} alt="" />
            </div>
                <div className="country-details">
                    <h2 className="country-name">{countryData.name}</h2>
                    <div className="details-columns">
                        <div className="details-col1">
                        {countryData.nativeName && <div><span>Native Name: </span> {countryData.nativeName}</div>}
                            <div><span>Population: </span>{countryData.population} </div>
                            <div><span>Region: </span>{countryData.region}</div>
                            {countryData.subRegion &&<div><span>Sub Region: </span>{countryData.subRegion}</div>}
                            {countryData.capital && <div><span>Capital: </span>{countryData.capital}</div>}
                        </div>
                        <div className="details-col2">
                            <div><span>Top Level Domain: </span>{countryData.tld}</div>
                            {countryData.currencies && <div><span>Currencies: </span>{countryData.currencies}</div>}
                            <div><span>Languages: </span>{countryData.languages}</div>

                        </div>
                    </div>
                    {countryData.borders.length>0 && <div className="border-contries">
                        <span>Border Countries: </span>


                        <ul>{countryData.borders.map((borderCountry)=>{
                            return <a href={borderCountry}><li>{borderCountry}</li></a>
                        })}</ul></div>}
                </div></div>}
        </main>

    )
}