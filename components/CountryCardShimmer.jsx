import { Link } from "react-router-dom";
import "./CardShimmer.css"


export default function CountryCardShimmer(){
    // console.log("hello");
    // console.log(data);
    return (
        <Link className="card-shimmer" >
                <div  class="shimmer-img"/>
                <h3></h3>
                <div className="card-text-shimmer">
                     
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </div>
           </Link>
    )
}