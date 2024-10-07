export default function Filter({setQuery}){
    return(
        <div className="filter">
            <select id="" onChange={(e)=>{setQuery(e.target.value.toLocaleLowerCase());}}>
                <option hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}