import React from "react";
import { MovieContext } from "../App";

export const VisualInformationAboutMovie = () => {
    const visual = React.useContext(MovieContext);
    console.log(visual);

    return(
        <div>
            <a href={visual.linkToTheTrailer}>Link to the trailer</a>
            <br></br>
            {visual.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Picture ${index + 1}`} />))}
        </div>
    )
};