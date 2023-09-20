import { useState, useEffect } from 'react';

export const SimpleForm = () => {
    const initialValues = {username: "", email: "", password: "", captcha: ""}; //ova e isto kako sto specificiravme posevno za username, pass, name prethodno
    const [formValues, setFormValues] = useState(initialValues);

    const [isSubmit, setIsSubmit] = useState(false);

    let handleChange = (e) => {
        // let value = e.target.value;
        console.log(e.target);
        // console.log(value);

        //destruktuiranje, nemsto toa gore
        const { name, value } = e.target;
        // ...formValues - ova pravi kopija na site propertija vo nov objekt
        // [name] : value - so ova go setirame propertu (klucot) sto nam ni treba
        setFormValues({...formValues, [name]: value});
    };

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    let handleSubmit = (e) => {
        e.preventDefault(); //prevent the form from default submitting
        // basicaly saying dont submit the form, I know what i'm doing
        setIsSubmit(true); 
    }

    return(
        <div>
            <form>
                <h1>Login Form</h1>
                <div>
                    <div>
                        <label>Username </label>
                        <input name="username" placeholder="enter username" value={formValues.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <input name="email" placeholder="enter email" value={formValues.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Password </label>
                        <input name="password" placeholder="enter password" value={formValues.password} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Captcha </label>
                        <input name="captcha" placeholder="enter captcha" value={formValues.captcha} onChange={handleChange} />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            {isSubmit && <div>Signed in successfully</div>}
        </div>
    )
}