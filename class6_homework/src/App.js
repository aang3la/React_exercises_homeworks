import './App.css';
import { CarList } from './components/CarList';
import { useState } from "react";
import { ShowUserInfo } from './components/ShowUserInfo';

function App() {

  return (
    <div className="App">
      <CarList />
      {/* <ShowUserInfo /> */}
    </div>
  );
}

export default App;
