import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from './utils/constants';
import { Albums } from './components/Albums';
import { Gallery } from './components/Gallery';

function App() {

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  // se preporacuva da se ima eden useEffect vo app
  useEffect(() => {
    fetch(API_URL + "/albums")
      .then((res) => res.json())
      .then((result) => setAlbums(result))
      .catch((err) => alert(err));

    fetch(API_URL + "/photos")
      .then((res) => res.json())
      .then((result) => setPhotos(result));
  }, []);


  function deleteAlbum(album) {
    console.log(album);

    //* vo novata niza stavi gi site elementi sto imaat razlicno id
    // ne mora tuka spread operator bidejki samiot filter ni vrakja nova niza
    setAlbums(albums.filter((item) => item.id !== album.id));
  }

  function closePhoto() {
    console.log("inside close photo");
    setSelectedPhoto("");
  }

  return (
    <div className="App">
      <h1>Welcome to class10</h1>
      <ul>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/albums" element={<Albums listOfAlbums={albums} deleteAlbum={deleteAlbum} />} />
        <Route path="/gallery" element={<Gallery listOfPhotos={photos} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} closePhoto={closePhoto} />} />
      </Routes>
    </div>
  );
}

export default App;