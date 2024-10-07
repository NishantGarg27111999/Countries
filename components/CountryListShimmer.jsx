import CountryCard from "./CountryCard";
import CountryCardShimmer from "./CountryCardShimmer";

export default function CountryListShimmer(){
    return(
        <>
        
        { Array.from({length: 30}). map(()=><CountryCardShimmer key={crypto.randomUUID()}/>)}
           
        </>
        
    
    )
}