import { FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../../constants/UsersConstants";

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

export const fetchUsersFail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
};

export const fetchUsersRequest = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => dispatch(fetchUsersSuccess(json)))
        .catch(err => dispatch(fetchUsersFail(err)))
    }
};