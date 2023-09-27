export const Movies = () => {
    const movies = [
        {id: 1, name: "Dumb and dumber" , zanr: "comedy"},
        {id: 2, name: "Grown Up", zanr: "comedy"},
        {id: 3, name: "White Chicks", zanr: "comedy"},
        {id: 4, name: "Oppenheimer", zanr: "drama"},
        {id: 5, name: "Jungle Cruise", zanr: "adventure"}
    ];
    return (
        <div>
            <ul>
                    {movies.map((movie) => 
                            <li key={movie.id}>
                            {movie.name} ({movie.zanr})
                            </li>)
                    }
            </ul>
        </div>
    )
};