const FavouriteCountries = ({favCountries}) => {

        if (favCountries.length === 0) return "Favourite list empty"
        const favouriteCountries = favCountries.map((country) => {
            return ( 
            <div>
                <h3>{country.name.official}</h3>
                <h5>{country.name.common}</h5>
                {country.flag}
            </div>
            )
        })

        return (
            <>
            <h3>Favourite countries</h3>
            {favouriteCountries}
            </>
        )
}

export default FavouriteCountries;