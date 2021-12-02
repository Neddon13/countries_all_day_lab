const CountryDetail = ({country, addFavCountry}) => {
if (!country) return <p className='list-headings' >Please select a Country</p>

let currencyNames = []
for (let currency in country.currencies) {
    currencyNames.push(<span>{country.currencies[currency].name}<br/> </span>)
}


    return (
        <div className="selectedCountry">
            <h3>{country.flag} {country.name.official}</h3>
            <h5>{country.name.common}</h5>
            <h4>Currency: {currencyNames}</h4>
            <button onClick={(e) => {
                e.preventDefault()
                addFavCountry(country)
            }}>Add to favourites</button>    
        </div>
    )
}


export default CountryDetail;