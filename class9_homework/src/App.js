//?DOMASHNA: 
// Da napravime nekoja navigacija, kaj sto kje imate Homepage, sto kje ima nekoj tekst Welcome to our page! i uste edna ruta koja sto kje nosi na users
// Da kreirame edna posebna komponenta Users i vnatre da se prikazuvaat users od istovo api sto go imame
// kje bide https://jsonplaceholder.typicode.com samo kje ima i /users, da se prikazat imeto i prezimeto, dokolku nemame useri da se prikazuva Loading
// Potoa pokraj ovie informacii da imame i nekoj nacin da se pokazat details i koga kje se klikne na details, da ni se prikazat poveke informacii za kliknatiot user. 

import './App.css';
import { Routes, Route } from "react-router-dom";
import { Homepage } from './components/Homepage';
import { Users } from './components/Users';
import { Single_User } from './components/Single_User';
import { Navigation } from '../src/components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/users" element={<Users/>} />
        <Route path='/single-user/:id' element={<Single_User />} />
      </Routes>
    </div>
  );
}

export default App;
