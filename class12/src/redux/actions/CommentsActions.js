import {FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from "../../constants/CommentsConstants";

export const fetchCommentsSuccess = (comments) => { //the json with all the comments
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
};

export const fetchCommentsFail = (error) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
};

// Asihrona akcija
export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(json => dispatch(fetchCommentsSuccess(json))) // call is successfull, we have json with comments
        .catch(err => dispatch(fetchCommentsFail(err))) // if the call is not successful we have the err as response
    }
};