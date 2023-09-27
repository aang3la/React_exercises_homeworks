import './App.css';
import { CarList } from './components/CarList';
import { useState } from "react";
import { ShowUserInfo } from './components/ShowUserInfo';
import { FormExample } from './components/FormExample';

function App() {

  return (
    <div className="App">
      {/* <CarList /> */}
      {/* <ShowUserInfo /> */}
      <FormExample />
    </div>
  );
}

export default App;
