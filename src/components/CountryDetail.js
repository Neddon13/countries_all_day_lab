const CountryDetail = ({country}) => {
if (!country) return "Please select a Country"

    return (
        <div>
            <h3>{country.name.official}</h3>
            <h5>{country.name.common}</h5>
            <h4>{country.currencies}</h4>
            {country.flag}
        </div>
    )
}


export default CountryDetail;