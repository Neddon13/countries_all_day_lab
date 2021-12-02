import CountriesDetails from "../containers/CountriesDetails";

const Country = ({setSelectedCountry, countries}) => {

        const countriesList = [...countries].sort((country1, country2) => {
             return country2.population - country1.population
        }).map((country, index) => {
            return (
            <div className="country" key={index} onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(country);
            }} >
            <p>{country.name.common}</p>
            <p>{country.population}</p>
            
            </div>
            )
        })


        return (
            <div className="countries-details">
                {countriesList}
            </div>
        );

    }

export default Country;