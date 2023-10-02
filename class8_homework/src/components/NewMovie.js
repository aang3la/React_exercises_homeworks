import { useState } from "react";

export const NewMovie = () => {

    const values = {name: "", zanr: "", rating: ""};
    const [formValues, setFormValues] = useState(values);

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
                <input type="text" name="name" placeholder="Enter the name of the movie" value={formValues.name} onChange={handleChange} /><br/>
                <input type="text" name="zanr" placeholder="Enter the zanr of the movie" value={formValues.zanr} onChange={handleChange} /><br/>
                <input type="number" name="rating" placeholder="Enter the rating of the movie" value={formValues.rating} onChange={handleChange} /><br/>
                <button onClick={handleSubmit}>Submit the informations</button>
            </form>
        </>
    )
};