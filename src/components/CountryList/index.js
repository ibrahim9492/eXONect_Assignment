import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StateList from '../StateList';
import './index.css'; 

const CountryList = ({ countries, setCountries }) => {
    const addCountry = () => {
        const name = prompt("Enter country name:");
        if (name) {
            if (countries.some(country => country.name.toLowerCase() === name.toLowerCase())) {
                alert(`Country "${name}" already exists!`);
                return;
            }
            setCountries([...countries, { id: uuidv4(), name, states: [] }]);
        }
    };

    const editCountry = (id) => {
        if (window.confirm("Are you sure you want to update this country?")) {
            const name = prompt("Enter new country name:");
            if (name) {
                setCountries(countries.map(country => 
                    country.id === id ? { ...country, name } : country
                ));
            }
        }
    };

    const deleteCountry = (id) => {
        if (window.confirm("Are you sure you want to delete this country?")) {
            setCountries(countries.filter(country => country.id !== id));
        }
    };

    return (
        <div className="country-container">
            <button className="country-add-button" onClick={addCountry}>+ Add Country</button>
            <ul className="country-list">
                {countries.map(country => (
                    <li key={country.id} className="country-item">
                        <div className="country-header">
                            <span className="country-name">{country.name.toUpperCase()}</span>
                            <div className="country-actions">
                                <button className="edit-button" onClick={() => editCountry(country.id)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteCountry(country.id)}>Delete</button>
                            </div>
                        </div>
                        <StateList country={country} countries={countries} setCountries={setCountries} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
