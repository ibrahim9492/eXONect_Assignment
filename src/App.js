import React, { useState } from 'react';
import CountryList from './components/CountryList';
import './App.css';

const App = () => {
    const [countries, setCountries] = useState([]);

    return (
        <div className="app-container">
            <h1 className="app-title">🌍 Country, State, City Management</h1>
            <CountryList countries={countries} setCountries={setCountries} />
        </div>
    );
};

export default App;
