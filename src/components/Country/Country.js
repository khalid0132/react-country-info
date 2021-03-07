import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = ({country}) => {
    const {name, capital, population, flag} = country;
    let history = useHistory();
    const handleClick =(countryName)=>{
        const url = `/country/${countryName}`;
        history.push(url);
    }
    return (
        <div className = "country-design">
           
            <h1>Name: {name}</h1>
            <img style={{width:'100px'}} src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <Link to={`/country/${name}`}>
                <button>Click</button>
            </Link>
            <button onClick={()=>handleClick(name)}>Click to show</button>
        </div>
    );
};

export default Country;