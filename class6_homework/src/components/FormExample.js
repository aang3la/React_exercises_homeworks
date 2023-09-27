// Neka imame forma vo koja imame ime, prezime i telefonski broj 
// i neka na submit na taa forma, se proveruvaat slednive validacii 

// imeto mora da bide najmalku 3 karakteri no najmnogu 20
// prezimeto mora da bide najmalku 5 karakteri no najmnogu 20
// telefonskiot broj, zadolzitelno e da bide brojki i da ima tocno 9 brojki

// dokolku nekoi od ovie validacii ne e zadovoleno da se prikaze soodveten error 
// pod negovoto pole a dokolku site se zadovoleni 
// da se napravi da ja snema formata i da se prikaze nekoj tekst vo h1 formata bese ispratena.

import { useState, useEffect } from 'react';

export const FormExample = () => {
    const initialValues = {name: "", surname: "", phone: ""};
    const [formValues, setFormValues] = useState(initialValues);

    // State to track if the form has been submitted
    const [isSubmit, setIsSubmit] = useState(false);
    // State to hold form validation errors
    const [formErrors, setFormErrors] = useState({});
    
    // Function to handle changes in form input fields
    let handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    // Function to handle form submission
    let handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    // Function to validate form input values
    const validate = (values) => {
        const phoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
        const errors = {};

        // Validations for name input
        if(!values.name) {
            errors.name = "Name is required";
        } else if (values.name.length < 3) {
            errors.name = "Name must be grather than 3 characters";
        } else if (values.name.length > 20) {
            errors.name = "Name is grather than 20 characters";
        }

        // Validations for surname input
        if(!values.surname) {
            errors.surname = "Surname is required";
        } else if (values.surname.length < 5) {
            errors.name = "Name must be grather than 5 characters";
        } else if (values.surname.length > 20) {
            errors.name = "Name is grather than 20 characters";
        }

        // Validations for phone number
        if(!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!phoneNumberRegex.test(values.phone)) {
            errors.phone = "This is not a valid phone number format";
        }
        console.log(errors);
        return errors;
    };
    
    return(
        <div>
            { Object.keys(formErrors).length === 0 && isSubmit ? (<h1>Signed in successfully</h1>) : (
            <form className='form'>
                <h1>Simple Form</h1>
                <div>
                    <div>
                        <label>Name </label>
                        <input name='name' placeholder='enter your name' value={formValues.name} onChange={handleChange}/>
                        <p>{formErrors.name}</p>
                    </div>
                    <div>
                        <label>Surname </label>
                        <input name='surname' placeholder='enter your surname' value={formValues.surname} onChange={handleChange}/>
                        <p>{formErrors.surname}</p>
                    </div>
                    <div>
                        <label>Phone </label>
                        <input name='phone' placeholder='enter your phone' value={formValues.phone} onChange={handleChange}/>
                        <p>{formErrors.phone}</p>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form> )}
        </div>
    )
};



