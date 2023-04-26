import React from 'react';
import Home from '../pages/Home/index.js';

const Keys = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fab9af3022mshcd4e9c52f9e1a85p195239jsne2e03521e6ff',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    return (
        // passar a variável options como uma prop, ai é só importar na home
        // como parametro de entrada

        <Home options={options} />
    );
};

export default Keys;