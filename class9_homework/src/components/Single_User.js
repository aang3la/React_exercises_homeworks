import { useParams } from 'react-router-dom';
import { API_URL } from '../uttils/constants';
import { useState, useEffect } from 'react';

export const Single_User = () => {

    const { id } = useParams();
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        fetch(`${API_URL}/users/${id}`)
        .then((res) => res.json())
        .then((result) => setUser(result))
        .catch((err) => alert(err));
    },[]);

    return(
        <>
            <h2>More information about the User {id}</h2>
            { user ? (
                <div className='singleuser'>
                    <span>User no.{user.id}</span>
                    <p>User: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}, {user.address.suite} </p>
                    <p>City: {user.address.city}</p>
                    <p>Zip code: {user.address.zipcode}</p>
                    <p>Contact: {user.phone}</p>
                    <p>Works at: {user.company.name}</p>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </>
    )
};