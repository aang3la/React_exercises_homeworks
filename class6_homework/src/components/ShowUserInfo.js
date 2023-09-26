// Da se kreira aplikacijata od slikata,
// da imame firstName, lastName, email , password i godini i tie da se cuvaat vo state. 
// Tie vrednosti od stejtot da se pokazuvaat vo tabela 
// no da ima moznost preku kopce da se krijat i pokazuvaat. 

// BONUS: Pazete na tekstot na kopceto, dokolku 
// treba da se pokazat tekstot da bide Show Results
// dokolku treba da se skrijat da bide Hide Results

import { useState, useEffect } from 'react';

export const ShowUserInfo = () => {

    const initialValues = {name: "", surname: "", email: "", password: "", age: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [showUser, setShowUser] = useState(false);

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    let userShow = () => {
        setShowUser(!showUser)
    };

    let handleChange = (e) => {
        console.log(e.target);
        //destruction
        const { name, value } = e.target;
        // ...formValues - makes copies in a new object
        // [name] : value - setting the property key that we need
        setFormValues({...formValues, [name]: value});
    };

    return(
        <>
            <form>
                <div>
                <input name="name" placeholder="Enter your name" type="text" 
                value={formValues.name} onChange={handleChange}/>
                </div>
                <div>
                <input name="surname" placeholder="Enter your surname" type="text" 
                value={formValues.surname} onChange={handleChange}/>
                </div>
                <div>
                <input name="email" placeholder="Enter your e-mail" type="email" 
                value={formValues.email} onChange={handleChange}/>
                </div>
                <div>
                <input name="password" placeholder="Enter your password" type="password" 
                value={formValues.password} onChange={handleChange}/>
                </div>
                <div>
                <input name="age" placeholder="Enter your age" 
                type="number" value={formValues.age} onChange={handleChange}/>
                </div>
                <div>
                    <button type="button" onClick={userShow}>{showUser ? "Hide Results" : "Show Results"}</button>
                </div>
            </form>
            { showUser && (
            <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr key="user-info">
                    <td>{formValues.name}</td>
                    <td>{formValues.surname}</td>
                    <td>{formValues.email}</td>
                    <td>{formValues.password}</td>
                    <td>{formValues.age}</td>

                </tr>
            </tbody>
        </table>
        )}
        </>
    )
};