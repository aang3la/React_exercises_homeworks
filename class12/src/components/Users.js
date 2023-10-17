import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsersRequest } from "../redux/actions/UsersActions";

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.UsersReducer.users);

    useEffect(() => {
        console.log("Inside useEffect")
        dispatch(fetchUsersRequest())
    }, [dispatch]);

    return(
        <div>
            <h1>These are the top users for our website</h1>
            <div>
                {users.map(user => {
                    return(
                        <div key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};