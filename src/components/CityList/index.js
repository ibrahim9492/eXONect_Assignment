import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

const CityList = ({ country, state, countries, setCountries }) => {
    const addCity = () => {
        const name = prompt("Enter city name:");
        if (name) {
            if (state.cities.some(city => city.name.toLowerCase() === name.toLowerCase())) {
                alert(`City "${name}" already exists in ${state.name}!`);
                return;
            }
            setCountries(countries.map(c =>
                c.id === country.id
                    ? {
                        ...c,
                        states: c.states.map(s =>
                            s.id === state.id
                                ? { ...s, cities: [...s.cities, { id: uuidv4(), name }] }
                                : s
                        )
                    }
                    : c
            ));
        }
    };

    const editCity = (cityId) => {
        if (window.confirm("Are you sure you want to update this city?")) {
            const name = prompt("Enter new city name:");
            if (name) {
                setCountries(countries.map(c =>
                    c.id === country.id
                        ? {
                              ...c,
                              states: c.states.map(s =>
                                  s.id === state.id
                                      ? {
                                            ...s,
                                            cities: s.cities.map(city =>
                                                city.id === cityId ? { ...city, name } : city
                                            ),
                                        }
                                      : s
                              ),
                          }
                        : c
                ));
            }
        }
    };

    const deleteCity = (cityId) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
            setCountries(countries.map(c =>
                c.id === country.id
                    ? {
                          ...c,
                          states: c.states.map(s =>
                              s.id === state.id
                                  ? { ...s, cities: s.cities.filter(city => city.id !== cityId) }
                                  : s
                          ),
                      }
                    : c
            ));
        }
    };

    return (
        <div className="city-container">
            <button className="city-add-button" onClick={addCity}>+ Add City</button>
            <ul className="city-list">
                {state.cities.map(city => (
                    <li key={city.id} className="city-item">
                        <span className="city-name">{city.name.toUpperCase()}</span>
                        <div className="city-actions">
                            <button className="edit-button" onClick={() => editCity(city.id)}>Edit</button>
                            <button className="delete-button" onClick={() => deleteCity(city.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;
