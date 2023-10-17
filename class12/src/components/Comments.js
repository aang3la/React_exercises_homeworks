import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../redux/actions/CommentsActions";

export const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.CommentsReducer.comments)

    useEffect(() => {
        console.log("Inside useEffect")
        dispatch(fetchCommentsRequest())
    }, [dispatch]);

    return(
        <div>
            <h1>This are the comments for our cakes!</h1>
            <div>
                {comments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <p>Name: {comment.name}</p>
                            <p>Email: {comment.email}</p>
                            <p>Body: {comment.body}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}