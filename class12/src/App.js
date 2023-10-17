// npm i react-router-dom
// npm i redux react-redux
// npm install @reduxjs/toolkit

import './App.css';
import { Routes, Route } from "react-router-dom";
import { Cake } from './components/Cake';
import { Nav } from './components/Nav';
import { Comments } from './components/Comments';

function App() {
  return (
    <div className="App">
      <h1>Class 12 - redux part II</h1>
      <Nav />
      <Routes>
        <Route path='/cake' element={<Cake/>} />
        <Route path='/comments' element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
