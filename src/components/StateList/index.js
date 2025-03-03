import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CityList from '../CityList';
import './index.css';

const StateList = ({ country, countries, setCountries }) => {
    const addState = () => {
        const name = prompt("Enter state name:");
        if (name) {
            if (country.states.some(state => state.name.toLowerCase() === name.toLowerCase())) {
                alert(`State "${name}" already exists in ${country.name}!`);
                return;
            }
            setCountries(countries.map(each =>
                each.id === country.id
                    ? { ...each, states: [...each.states, { id: uuidv4(), name, cities: [] }] }
                    : each
            ));
        }
    };

    const editState = (stateId) => {
        if (window.confirm("Are you sure you want to update this state?")) {
            const name = prompt("Enter new state name:");
            if (name) {
                setCountries(countries.map(each =>
                    each.id === country.id
                        ? {
                              ...each,
                              states: each.states.map(state =>
                                  state.id === stateId ? { ...state, name } : state
                              ),
                          }
                        : each
                ));
            }
        }
    };

    const deleteState = (stateId) => {
        if (window.confirm("Are you sure you want to delete this state?")) {
            setCountries(countries.map(each =>
                each.id === country.id
                    ? { ...each, states: each.states.filter(state => state.id !== stateId) }
                    : each
            ));
        }
    };

    return (
        <div className="state-container">
            <button className="state-add-button" onClick={addState}>+ Add State</button>
            <ul className="state-list">
                {country.states.map(state => (
                    <li key={state.id} className="state-item">
                        <div className="state-header">
                            <span className="state-name">{state.name.toUpperCase()}</span>
                            <div className="state-actions">
                                <button className="edit-button" onClick={() => editState(state.id)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteState(state.id)}>Delete</button>
                            </div>
                        </div>
                        <CityList country={country} state={state} countries={countries} setCountries={setCountries} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StateList;
