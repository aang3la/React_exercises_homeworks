//? DOPOLNUVANJE NA DOMASHNA: 
// Da napraime da se prakjaat query parametri pri navigiranjeto do nov film, 
// mozete direktno vo propertyto vo Link za New Movie da gi stavite so ? 
// nesto kako <Link to="/movies/new?">New movie</Link>
// parametrite da bidat name (ime na film) i genre i potoa ovie query parametri da se zemat 
//vo komponetata za new movie i tamu da se prikazat vo nekoj html elementi

import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const NewMovie = () => {

    const values = {name: "", zanr: "", rating: ""};
    const [formValues, setFormValues] = useState(values);

    // Query params
    const [searchParams, setSearchParams] = useSearchParams([]);
    const movieName = searchParams.get("name");
    const zanr = searchParams.get("zanr");

    let handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <form>
                <input type="text" name="name" 
                placeholder="Enter the name of the movie" 
                value={formValues.name} 
                onChange={handleChange} /><br/>

                <input type="text" name="zanr" 
                placeholder="Enter the zanr of the movie" 
                value={formValues.zanr} 
                onChange={handleChange} /><br/>

                <input type="number" name="rating"
                placeholder="Enter the rating of the movie" 
                value={formValues.rating} 
                onChange={handleChange} /><br/>
                
                <button onClick={handleSubmit}>Submit the informations</button>

                <h3>{movieName}</h3>
                <p>{zanr}</p>
            </form>
        </>
    )
};