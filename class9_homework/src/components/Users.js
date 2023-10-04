import { useState, useEffect } from 'react';
import { API_URL } from '../uttils/constants';
import { Link } from 'react-router-dom';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/users`)
        .then((res) => res.json())
        .then((result) => setUsers(result))
        .catch((err) => alert(err));
    }, []);

    return(
        <>
            <h1>List of users</h1>

            {users.length > 0 ? (
                <div>
                    {users.map((user) => {
                        return(
                            <div key={user.id}>
                                <p>User: {user.name}</p>
                                <Link to={"/single-user/" + user.id}>Show more info</Link> <hr/>
                            </div>
                        )
                    })

                    }
                </div>
            ) : (
                <h3>Loading users..</h3>
            )}
        </>
    )
};