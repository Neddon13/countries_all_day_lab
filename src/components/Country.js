import CountriesDetails from "../containers/CountriesDetails";

const Country = ({setSelectedCountry, countries}) => {

        const countriesList = countries.map((country, index) => {
            return (
            <div key={index} onClick={(e) => {
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