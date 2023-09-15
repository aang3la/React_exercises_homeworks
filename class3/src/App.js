import './App.css';
import { Sport } from "./components/Sport";
import { Sport2 } from "./components/Sport2";
import { Sport3 } from "./components/Sport3";
import { Player } from "./components/Player";
import { Comments } from "./components/Comments";
import { StudentClass } from './components/StudentClass';
import { CommentsClass } from './components/CommentsClass';




function App() {

  // Primer sme dobile nekoja baza od lugje so sportovi za da gi prikazeme
  let sportsAndPeople = [
    {name: "Angela", sport: "hiking"},
    {name: "Martin", sport: "biking"},
    {name: "Irena", sport: "tennis"},
    {name: "Danche", sport: "yoga"},
    {name: "Bobi", sport: "handlball"}
  ]

  let gamer = {
    firstName: "Angela",
    score: 5,
    print: function() {
      // when we use `` we can write regular strings and inside
      // if we want to use javascript we use ${}
      console.log(`name: ${player.firstName} - score: ${gamer.score}`);
    }
  }

  //? Da napravime komponenta vo koja ke prikazuvame komentari, neka sekoj komentar ima id, author, text.
  // neka listata so komentari ja imate vo app.js i pratite preku props vo kreiranata komponenta
  // tamu da gi prikazeme informaciite
  // neka bidat vo tabela
  // pokraj ova imate nekoe kopce LIKE sto vo konzola ke pecati +1
  let comment = [
    {postId: "a01b", author: "Angela", text: "This is my first comment on this page."},
    {postId: "a02b", author: "Irena", text: "This is my first comment on this page."} ,
    {postId: "a03b", author: "Danche", text: "This is my first comment on this page."} ,
    {postId: "a04b", author: "Martin", text: "This is my first comment on this page."} ,
  ];


  let student = {
    name: "Angela",
    lastName: "Antova",
    index: 7078,
  }
  let student2 = {
    name: "Martin",
    lastName: "Trajkov",
    index: 50487,
  }

  return (
    <div className="App">
      <h1>Hello from React props</h1>
      {/* <Sport name="Martin" sport="biking"/> 
      <Sport name="Angela" sport="hiking"/>
      <Sport name="Irena" sport="tennis"/> 
      <Sport name="Danche" sport="yoga"/>    */}

      {/* <Sport2 /> 
      <Sport3 />  */}
      
      {/* 
      <Sport2 name="Vedran" sport="tennis" />
      <Sport3 name="Aleksandar" sport="basketball" /> */}

      {/* {sportsAndPeople.map((object) => {
          return <Sport name= {object.name} sport={object.sport} />
        })} */}

      {/* <Player igrac={gamer} /> */}

    <Comments comment={comment}/>

    {/* <StudentClass  student={student} />
    <StudentClass  student={student2} /> */}

    {/* <CommentsClass comment={comment}/> */}

    </div>
  );
}

export default App;

//* React Props - za da skratime vreme i da ne kreirame za sekoja licnost razlicna komponenta celo vreme
// mora dinamicki da raboti toa, toa se resava so PROPS ("Properties.")
// It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments.

//sekoj kod sto e JavaScript se pisuva vo { } osven site sto se HTML bez zagradi se

//? DOMASHNA - da go konvertirame istiot primer od casot (primerot za komentarite) 
//? i da go napravime vo klasna komponenta