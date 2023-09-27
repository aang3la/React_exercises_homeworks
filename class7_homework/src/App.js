import './App.css';
import React from 'react';
import { Movie } from './components/Movie';
import { Visitors } from './components/Visitors';

//* Creation of react context
export const MovieContext = React.createContext();

function App() {

  // Neka imate nekoj objekt movie koj vnatre kje ima lista od sliki (barem 3), od nekoj film sto 
  // kje go najdete na internet, i potoa neka ima za filmot rating, zanr, plot, releaseDate,linkToTheTrailer.
  const movie = {
    name: "Dumb and Dumber",
    rating: 7.3,
    zanr: "comedy",
    plot: "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
    releaseDate: '1994-12-16',
    linkToTheTrailer: "https://youtu.be/l13yPhimE3o?si=39daWLtCuJakiM-Z",
    pictures: [
      "https://im.rediff.com/movies/2014/nov/20dumb-and-dumber.jpg?w=670&h=900",
      "https://live.staticflickr.com/8332/8093001591_d830ccd0b3_c.jpg",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/jeff-daniels-and-jim-carrey-in-dumb-and-dumber-1994--album.jpg",
    ]
  };

  const usernames = ["user1", "moviefan", "bubbly_snowflake", "VenomFate", "UltimateBeast", "books.beat", "music_viking"];

  return (
    <div className="App">
      <MovieContext.Provider value={movie}>
        <Movie/>
      </MovieContext.Provider>
      <MovieContext.Provider value={usernames}>
        <Visitors/>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
