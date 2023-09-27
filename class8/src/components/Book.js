import { useParams } from "react-router-dom";

export const Book = () => {
    //ova id e ona sto se naogja vo app.js vo dinamickata ruta za books
    //ova mora da bide isto ime kako vo rutata od app.js
    const {id} = useParams(); //da znae koj book da go prikaze
    return <h1>Book {id}</h1>
};