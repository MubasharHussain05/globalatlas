export const SearchFilter=({ countries,setCountries,search,setSearch,filter,setFilter})=>{

    const handleInputChange=(event)=>{
        event.preventDefault()
        setSearch(event.target.value);

    }

    const handleSelectChange=(event)=>{
        event.preventDefault()
        setFilter(event.target.value)

    }
    const sortCountries=(value)=>{
        const sortcountry=[...countries].sort((a,b)=>{
            return value==="asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
            
        })
        setCountries(sortcountry)

    }
    
    
    return(
        <>
        <section className="section-searchFilter">
            <input 
            type="text" 
            placeholder="search" 
            value={search}
            onChange={handleInputChange}
             />
             <div>
                <button onClick={()=>sortCountries("asc")}>Acsending</button>
             </div>

             <div>
                <button onClick={()=>sortCountries("des")}>Decsending</button>
             </div>

             <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                
             </select>

        </section>
        </>
    )
}