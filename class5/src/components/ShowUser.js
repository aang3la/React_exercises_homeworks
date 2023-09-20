import { useState } from 'react';

export const ShowUser = () => {
    
    const [name, setName] = useState("Marija");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [age, setAge] = useState(" ");

    const [showUser, setShowUser] = useState(false);

    let userShow = () => {
        setShowUser(!showUser)
    }
    
    return (
        <>
            <div>
                <input placeholder='name' type='string' /> <br />
                <input placeholder='last name' type='string'/> <br />
                <input placeholder='email'type='string'/> <br />
                <input placeholder='password' type='password' /> <br />
                <input placeholder='age' type='number'/> <br />

                <button onClick={userShow}>Hide Results</button>
            </div>
            <div>
            {/* <table border={1}>
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
                        <tr>
                            <td>{name}</td>
                        </tr>
                    </tbody>
                </table> */}
                { showUser ? <h1>{name}</h1> : <div></div> }
            </div>
        </>
    )
}