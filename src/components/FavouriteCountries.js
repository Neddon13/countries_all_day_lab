const FavouriteCountries = ({favCountries}) => {

        if (favCountries.length === 0) return <p className='list-headings'>Favourite list empty</p>
        const favouriteCountries = favCountries.map((country) => {
            return ( 
            <div className="favs">
                <h3>{country.flag} {country.name.official}</h3>
                <h5>{country.name.common}</h5>
            </div>
            )
        })

        return (
            <div>
            <h3>Favourite countries</h3>
            {favouriteCountries}
            </div>
        )
}

export default FavouriteCountries;