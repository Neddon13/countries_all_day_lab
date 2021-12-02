const CountryDetail = ({country, addFavCountry}) => {
if (!country) return "Please select a Country"

    return (
        <div>
            <h3>{country.name.official}</h3>
            <h5>{country.name.common}</h5>
            {/* <h4>{country.currencies}</h4> */}
            {country.flag}
            <button onClick={(e) => {
                e.preventDefault()
                addFavCountry(country)
            }}>Add to favourites</button>    
        </div>
    )
}


export default CountryDetail;