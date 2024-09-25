import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/postApi"
import { Loader } from "../components/UI/Loader"
import { CountryCard } from "../components/UI/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter"

export const Country=()=>{
    const [isPending,startTransition]=useTransition()
    const [countries,setCountries]=useState([])


    const [search,setSearch]=useState()
    const [filter,setFilter]=useState("All")

    useEffect(()=>{
        startTransition(async()=>{
            const res=await getCountryData()
            console.log(res)
            setCountries(res.data)
        })
    },[])

    if(isPending){
        return <Loader/>
    }

    // console.log(search,filter)

    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
}

// serarh all

const filterRegion=(country)=>{
    if(filter==="all"){
    return country.region===filter
}return country

}
    // main logic
    const filterCountries=countries.filter((country)=>searchCountry(country) && filterRegion(country))
    return(
        <>
        <section className="country-section">
            <SearchFilter countries={countries} setCountries={setCountries} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((Curcountry,index)=>{
                        return <CountryCard key={index} country={Curcountry}/>
                    })
                }
            </ul>
        </section>
        </>
    )
}