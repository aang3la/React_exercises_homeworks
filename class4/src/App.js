import "./App.css";
import { Car } from "./components/Car";
import { User } from "./components/User";
import { State } from "./components/State";
import { Dates } from "./components/Dates";
import  { Student }  from "./components/Student";
import  { Semester }  from "./components/Semester";

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

  let students = [
    {name: "Angela", surname: "Antova", index: "10504"},
    {name: "Irena", surname: "Angelov", index: "20457"},
    {name: "Danche", surname: "Bacheva", index: "70548"},
    {name: "Stefan", surname: "Trajkov", index: "40578"},
    {name: "Aleksandar", surname: "Markov", index: "60578"},
    {name: "Mario", surname: "Stefanov", index: "60548"},
    {name: "Marija", surname: "Stefanova", index: "60577"},
    {name: "Tijana", surname: "Petrovska", index: "74125"},
  ];

  return (
    <div className="App">
      Hello Class!
      {/* <Car vehicles={cars} />
      <User user={user} user1={user1} shouldShowUser={false} /> */}
      {/* <User user1={user1} /> */}
      <br />
      {/* <State /> */}
      {/* <Dates /> */}
      <Student students={students}/>
      <Semester shouldShowSemester={true} />
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
