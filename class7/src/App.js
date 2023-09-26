import './App.css';
import { User } from "./components/User";
import React from "react"; //context se naoga vo react i zatoa go importirame tuka React
import { Homepage } from './components/Homepage';
import { UserInfo } from "./components/UserInfo";
import { User2Context } from "./uttils/User2Context";

//* This is the creation of the context
//najcesto se koristi eden context, no moze 2 razlicni contexts
export const UserContext = React.createContext();
// export const User2Context = React.createContext();


function App() {

  const user = {
    name: "Martin",
    surname: "Trajkov",
    jobPosition: "Developer",
    hobby: "Movies",
    city: "Skopje",
    street: "Jane Sandanski",
    number: 222
  };

  return (
    <div className="App">
      {/* <h1>Hello from class 7</h1> */}
      {/* <UserContext.Provider value="Laura">
        <User />
      </UserContext.Provider> */}

      {/* ova go koristime za da ne koristime props, tuku preku Conext
      {/* <KorisnikContext.Provider value={user}> */}
      {
        // we must use value in the provider it is reserved word
      }

      <User2Context.Provider value={{ theme: "dark", font: 22, role: "ADMIN" }}>
        <Homepage />
        <UserInfo />
      </User2Context.Provider>
      
      {/* </KorisnikContext.Provider> */}
    </div>
  );
}

export default App;

//! React context - lesno da se spodeluva states vnatre vo nasata app
// kako koncept ni dozvoluva da pratime i koristime nekoi podatoci vo bilo koja komponenta vo nasata app bez koristenje na props
// ni dozvoluva da spodeluvame podatoci (state) pomegu nasite komponenti mnogu polesno

//nego go koristime koga prenesuvame podatoci koi trebalo da se koristat vo nekoja komponenta
// primer: podatoci za tema (lightmode, darkmode); podatoci za logiran user, podatoci specificirani za lokacijata za userot

//podatocite treba da bidat onie koi ne se menuvaat premn cesto, bidejki toj e kreiran samo za spodeluvanje na podatocite za polesen nacin

//Sto resava react context- ot? - ni pomaga da go resime 'props drilling problem'
// ovoj odma se koristi, ne se instalira paketi, toj se importira avtomatski so react

// se stava vo app.js ili index.js vo najvisokata tocka. nad index.js e index.html no obicno ne se stava tamu
