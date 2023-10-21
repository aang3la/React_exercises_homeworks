import './App.css';
import { Cities } from './components/Cities';
import { LocalWeather } from './components/LocalWeather';
import { Nav } from './components/Nav';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Weather app!</h1>
      <Nav />

      <Routes>
        {/* home path, redirect */}
        <Route path='/' element={<Navigate to="/local-weather" />} /> 
        <Route path='/search-cities' element={<Cities />} />
        <Route path='/local-weather' element={<LocalWeather />} />
      </Routes>
    </div>
  );
}

export default App;

// npm i react-router-dom
