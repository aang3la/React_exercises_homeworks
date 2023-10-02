import React from "react";
import { useParams } from "react-router-dom";

export const Movie = (props) => {
    const { id } = useParams();
    const movie = props.oneMovie.find((movie) => movie.id === Number(id));
    return (
        <>
            <h1>Movie Details</h1>
            <p>Name: {movie.name}</p>
            <p>Genre: {movie.zanr}</p>
            <p>Rating: ★{movie.rating}</p>
        </>
    )
}