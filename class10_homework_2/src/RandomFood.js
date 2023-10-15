// Da go iskoristime slednovo API https://www.themealdb.com/api/json/v1/1/random.php
// i da kreirame aplikacija koja kje ni prikazuva random hrana 

// Vo nekoja komponenta pokazete gi slednive podatoci za hranata

// strMeal, strCategory, strArea i strInstructions 

// * Iskoritete axios a ne fetch za povik do API-to

import axios from 'axios';
import { useState, useEffect } from 'react';

export const RandomFood = () => {
    const [randomFood, setRandomFood] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => setRandomFood(res.data.meals))
        .catch((err) => console.log(err));
    },[]);

    return(
        <>
            {randomFood.map((food, index) => {
                return(
                    <div key={index} className='food-container'>
                        <h1>Random Food Generator</h1>
                        <h2>{food.strMeal}</h2>
                        <h3>{food.strCategory}</h3>
                        <p>{food.strArea}</p>
                        <p>{food.strInstructions}</p>
                    </div>
                )
            })

            }
        </>
    )
}
