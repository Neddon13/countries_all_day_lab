import { useState, useEffect } from 'react';
import TotalPopulation from '../components/TotalPopulation';

const CountriesDetails = () => {
    const [countries, setCountries] = useState([]);

     useEffect(() => {
     getCountries();
    },[])

    const getCountries = function(){
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }

    
    return (
        <>
        <TotalPopulation populations={countries.map((country)=>country.population)}/>
        <div className="countries-details">
        {countries.map((country) => {
            return (
            <> 
            <p>{country.name.common}</p>
            <p>{country.population}</p>
            </>
            )
        })
        }

        </div>
           
        </> 
    )
};



export default CountriesDetails;