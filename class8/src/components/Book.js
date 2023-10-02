import { useParams, useOutletContext } from "react-router-dom";

export const Book = () => {
    const bookList = [{}];

    //ova id e ona sto se naogja vo app.js vo dinamickata ruta za books
    //ova mora da bide isto ime kako vo rutata od app.js
    const {id} = useParams(); //da znae koj book da go prikaze
    const obj = useOutletContext();
    console.log(obj);

    return <h1>Book {id} - genre {obj.genre} - located on shelf number {obj.shelf}</h1>
};