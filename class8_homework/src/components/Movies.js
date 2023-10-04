import { Link } from "react-router-dom";

export const Movies = (props) => {
    const movies = props.movieList;
    return (
        <>
            <div>
                <ul className="movie-list">
                    {movies.map((movie) => 
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.name} ({movie.zanr}) - ★{movie.rating}</Link>
                         </li>)
                    }
                </ul>
            </div>
            <div>
                <Link to="/movies/new?"><button id="newmovie">Add new movie</button></Link>
            </div>
        </>
    )
};