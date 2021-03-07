import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    const {capital, population} = country;
    return (
        <div>
            <h1>Country Detail: {countryName}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetail;