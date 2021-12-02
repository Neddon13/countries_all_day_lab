import { useState, useEffect } from 'react';
import TotalPopulation from '../components/TotalPopulation';
import FavouriteCountries from '../components/FavouriteCountries';
import CountryDetail from '../components/CountryDetail';
import Country from '../components/Country';

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
        <div class = "container_of_everything">
        <CountryDetail country={selectedCountry} addFavCountry={addFavCountry} />
        <FavouriteCountries favCountries={favCountries}/>   
        </div>
        <Country setSelectedCountry={setSelectedCountry} countries={countries}/> 
        </> 
    )
};



export default CountriesDetails;