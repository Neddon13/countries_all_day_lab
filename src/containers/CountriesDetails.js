import { useState, useEffect } from 'react';
import TotalPopulation from '../components/TotalPopulation';
import FavouriteCountries from '../components/FavouriteCountries';
import CountryDetail from '../components/CountryDetail';

const CountriesDetails = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favCountries, setFavCountries] = useState([]);

     useEffect(() => {
     getCountries();
    },[])

    const getCountries = function(){
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }

    const addFavCountry = (country) => {
        setFavCountries(Array.from(new Set([...favCountries, country])));
    }


    
    return (
        <>
        <TotalPopulation populations={countries.map((country)=>country.population)}/>
        <CountryDetail country={selectedCountry} addFavCountry={addFavCountry} />
        <FavouriteCountries favCountries={favCountries}/>
        <div className="countries-details">
        {countries.map((country, index) => {
            return (
            <div key={index} onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(country);
            }} >
            <p>{country.name.common}</p>
            <p>{country.population}</p>
            {/* {(Object.keys(country.currencies).length != 0) ? country.currencies[Object.keys(country.currencies)[0]].name : ""} */}
            
            </div>
            )
        })}
        {/* <FavouriteCountries favCountries={favCountries} />  */}
        
        </div>
           
        </> 
    )
};



export default CountriesDetails;