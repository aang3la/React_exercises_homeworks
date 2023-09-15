import "./App.css";
import { Car } from "./components/Car";
import { User } from "./components/User";
import { State } from "./components/State";
import { Dates } from "./components/Dates";

function App() {
  let cars = [
    { brand: "Ford", model: "Focus", year: 2009 },
    { brand: "Tesla", model: "S", year: 2022 },
    { brand: "Opel", model: "Corsa", year: 2015 },
  ];

  let user = {
    name: "Martin",
    age: 27,
  };

  let user1 = {
    name: "Laura",
    age: 25,
  };

  return (
    <div className="App">
      Hello Class!
      {/* <Car vehicles={cars} />
      <User user={user} user1={user1} shouldShowUser={false} /> */}
      {/* <User user1={user1} /> */}
      <br />
      {/* <State /> */}
      <Dates />
    </div>
  );
}

export default App;



//* React hooks - da ja koristime mokjta na klasnite komp za da kreirame nekakovii f-cii, nekakvi hooks sto se zakacuvaat na stateot na react
//! Rules when using hooks
// React Hooks can't be called inside loop, conditions or nested functions
// React Hooks are defined on the begining of our component
// They are called only from functional components
// React Hooks can call other react hooks




//? DOMASHNA
//? da napravime komponenta student koja ke ima: ime, prezime i index
//? neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
//? i taa lista da se prakja kako props od app.js
//? da prakjame pokraj listata i uste edno property koe ke bide nekoj tekst: semestar
//? neka toj semestar se pokazuva na ekranot vo nekoj h1 element cednas posle tabelata

//? Da stavime PropTypes na listata od studenti i neka taa lista bide required
//? Neka ima PropTypes i za semestarot
//? Ako slucajno semestarot ne e praten, sekogas da se ispishuva tekstot 'zimski'
