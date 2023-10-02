import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { NewMovie } from './components/NewMovie';
import { NotFound } from './components/NotFound';
import { Movie } from './components/Movie';

function App() {

  const movies = [
    {id: 1, name: "Dumb and dumber" , zanr: "comedy", rating: 4.3},
    {id: 2, name: "Grown Up", zanr: "comedy", rating: 3.5},
    {id: 3, name: "White Chicks", zanr: "comedy", rating: 4.5},
    {id: 4, name: "Oppenheimer", zanr: "drama", rating: 3},
    {id: 5, name: "Jungle Cruise", zanr: "adventure", rating: 4.9}
  ];

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies movieList={movies} />} />
        <Route path='/movies/:id' element={<Movie oneMovie={movies}/>} />
        <Route path='/movies/new' element={<NewMovie/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
