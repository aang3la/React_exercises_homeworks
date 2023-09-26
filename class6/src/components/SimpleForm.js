import { useState, useEffect } from 'react';

export const SimpleForm = () => {
    const initialValues = {username: "", email: "", password: ""}; //ova e isto kako sto specificiravme posevno za username, pass, name prethodno
    const [formValues, setFormValues] = useState(initialValues);

    const [isSubmit, setIsSubmit] = useState(false);

    //! Form inputs validation (making on front-end as same as on back-end)
    const [formErrors, setFormErrors] = useState({}); //prazen objekt koj ke go polnime so poraki
    // se proveruvaat naednas pri Submit na formata ili na sekoj input posebno, prviot slucaj e najkoristen (vidi f-jata validate)

    let handleChange = (e) => {
        // let value = e.target.value;
        console.log(e.target);
        // console.log(value);

        //destruktuiranje, nemsto toa gore
        const { name, value } = e.target;
        // ...formValues - ova pravi kopija na site propertija vo nov objekt
        // [name] : value - so ova go setirame propertu (klucot) sto nam ni treba
        setFormValues({...formValues, [name]: value}); //ova go pravi dimanicki zatoa stava kockasti zagradi, da ne zimame posebno email, password, username
        // ova name go zima dole od input
    };

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    let handleSubmit = (e) => {
        e.preventDefault(); //prevent the form from default submitting
        // basicaly saying dont submit the form, I know what i'm doing
        setFormErrors(validate(formValues));
        setIsSubmit(true); 
    };

    const validate = (values) => {
        const regex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
        const errors = {};

        if(!values.username) { //ako nema vrednost vo inputot username
            errors.username = "Username is required"; //da se pojavi ovoj error
        }
        if(!values.email) {
            errors.email = "Email is required";
        } else if(!regex.test(values.email)) { //da bide pravilen email so regex gore proveruvame
            errors.email = "This is not a valid email format";
        }
        if(!values.password) {
            errors.password = "Password is required!"
        } else if (values.password.length < 5) { 
            errors.password = "Password is less than 5 characters"
        } else if (values.password.length > 16) {
            errors.password = "Password is grather than 16 characters"
        }

        console.log(errors);
        return errors;
    };

    return(
        <div>
            <form>
                <h1>Login Form</h1>
                {/* prvo proveruvame dali vo objektot prostoi error */}
                { Object.keys(formErrors).length === 0 && isSubmit && <div>Signed in successfully</div>}
                <hr/>
                <div>
                    <div>
                        <label>Username </label>
                        <input name="username" placeholder="enter username" value={formValues.username} onChange={handleChange}/>
                        <p>{formErrors.username}</p>
                    </div>
                    <div>
                        <label>Email </label>
                        <input name="email" placeholder="enter email" value={formValues.email} onChange={handleChange} />
                        <p>{formErrors.email}</p>
                    </div>
                    <div>
                        <label>Password </label>
                        <input name="password" placeholder="enter password" value={formValues.password} onChange={handleChange} />
                        <p>{formErrors.password}</p>
                    </div>
                    {/* <div>
                        <label>Captcha </label>
                        <input name="captcha" placeholder="enter captcha" value={formValues.captcha} onChange={handleChange} />
                    </div> */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}