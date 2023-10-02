import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const BookLayout = () => {
    // const [number, setNumber] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });    
    console.log(searchParams);
    const number = searchParams.get("n");
    const firstName = searchParams.get("name");

    return(
        <>
            <Link to="/books/1">Book 1</Link><br/>
            <Link to="/books/2">Book 2</Link><br/>
            <Link to="/books/3">Book 3</Link>
            <br/>
            <br/>
            <Link to="/books/new">New book</Link>
            <br/>
            <br/>
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br/>
            <input type="number" value={number}
            onChange={(e) => setSearchParams({n: e.target.value})} />

            <p>{firstName}</p>

            <Outlet context={{shelf: "3B", genre: "Thriller"}}/>
        </>
    )
}

// So outlet prikazuva se drugo sto postoi vo komponentite osven site gore elementi (menito) vo layout
// Outlet se koristi za prikaz na konkretnite komp. koi se prikazuvaat posle spodeluvaniot UI

// Query params - se sto odi vo url posle ? - ova dosta ke se koristi za kveriranje na nekoi ruti
