import coutryFacts from '../API/countryData.json'
export const About=()=>{

    return(
        <>
        <section className="section-about container">
            <h2 className="container-title">
                Here are Interesting Facts
                <br />
                we're proud of

            </h2>
            <div className="gradient-cards">
                {
                    coutryFacts.map((curElem)=>{
                        const {id,country_name,population,capital,interesting_fact}=curElem
                        return(
                            <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title">{country_name} </p>
                        <p>
                            <span className="card-description">Captial: </span>
                            {capital}
                        </p>

                        <p>
                            <span className="card-description">Papulation: </span>
                            {population}
                        </p>

                        <p>
                            <span className="card-description">Interesting Fact: </span>
                            {interesting_fact}
                        </p>

                        

                    </div>
                </div>
                        )
                    })
                }
               
            </div>
        </section>
        </>
    )
}