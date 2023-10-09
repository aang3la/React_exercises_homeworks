import { useState, useEffect } from "react";
import { API_URL } from "../Uttils/constants";
import { Link } from "react-router-dom";
import { getComments } from "../Service/commentsService";

export const Comments = () => {
  const [comments, setComments] = useState([]);

  //* Prv nacin za prevzemanje na podatoci od API
  // useEffect(() => {
  //   fetch(`${API_URL}/comments`)
  //     .then((res) => res.json())
  //     .then((result) => setComments(result))
  //     .catch((err) => alert(err));
  // }, []);

  //* Vtor nacin - preku service (getComments) - commentsService.js
  useEffect(() => {
    getComments().then((result) => setComments(result));
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <span>Id: {comment.id}</span>
                <p>Name: {comment.name}</p>
                <Link to={"/single-comment/" + comment.id}>Details...</Link>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading comments ....</h2>
      )}
    </div>
  );
};