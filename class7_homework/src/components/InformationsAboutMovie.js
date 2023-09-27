import React from "react";
import { MovieContext } from "../App";

export const InformationsAboutMovie = () => {
    const context = React.useContext(MovieContext);
    console.log(context);

    return(
        <div>
            <p>Name: {context.name}</p>
            <p>Rating: {context.rating}</p>
            <p>Zanr: {context.zanr}</p>
            <p>Plot: {context.plot}</p>
            <p>Release date: {context.releaseDate}</p>
        </div>
    )
}