export default function SearchBar({setQuery}){
    return(
        <div className="search" >
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for a Country..." onChange={(e)=>{setQuery(e.target.value.toLowerCase())}}/>
        </div>
    )
}