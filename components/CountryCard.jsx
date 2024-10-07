import { Link } from "react-router-dom";



export default function CountryCard({name,flag,population,region,capital,data}){
    // console.log("hello");
    // console.log(data);
    return (
        <Link className="card" to={`/${name}`} state={data}>
                <img src={flag} alt="flag"/>
                <h3>{name}</h3>
                <div className="card-text">
                    
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Capital: </span>{capital}</p>
                </div>
           </Link>
    )
}