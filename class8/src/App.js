import './App.css';
import { Home } from './components/Home';
import { BookList } from './components/BookList';
import { Book } from './components/Book';
import { NewBook } from './components/NewBook';
import { NotFound } from './components/NotFound';
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { BookLayout } from './components/BookLayout';
import "./css/style.css";

//* React router (browser router) - pak se stava kako context vo najvisokata komponenta (parent) - index.js
// install ==> npm i react-router-dom --save
// isto i Link se importira preku router dom
//? ovoj se koristi 90% vo slucaevite

// element- sto ke se prikaze na ekran; vo element se stava koja strana da se prikaze
// path - kako ke izgleda naseto url

//* Hash router - ima # pred patekata
// primer: /#/books

//* History router 
// celoto navigiranje napred-nazad

//* Memory router
// namesto da cuva vo rutata kade sme bile, vo memorija go cuva
// najcesto se koristi za testiranje

//* Static router
// se koristi za server renderi i toa go pravi preku property location
// primer: <StaticRouter location ="/books">
// ne se koristi za navigiranje od page do page, poseben e ovoj

//* Native Router
// ovoj se instalira posebno vo poseben paket e
// se koristi za mobilni apps

function App() {
  // Rutite moze da gi napravime i preku JS, ne mora da se so JSX
  // let element = useRoutes([
  //   {path: "/", element: <Home />},
  //   {path: "*", element: <NotFound/>},
  //   {path: "/books", element: <BookLayout/>, children: {index: true, element: <BookList/>}}
  // ]);

  return (
    <div className="App">
      {/* Tuka gi prikazuvame rutite preku JavaScript ako odime */}
      {/* {element} */}

      {/* ova go stavame ako sakame da stavime na odreden url extra stuff (primer banners ili nekoe meni) - react dozvoluva da imame poveke ruti so isti paths */}
      <Routes>
        <Route path='/books/new' element={<h1>Some extra content</h1>} />
      </Routes>


      {/* Ova odi najcesto nadvor od Routes za da se prikazuva nonstop nav iako se menuva pages */}
      <nav>
        <ul>
        {/* replace - ja menuva rutata vo istorijata na browser; ova bi bilo korisno koga sme na nekoj login page; se vrakjas i ne ti ja pamti poslednata ruta tuku odi na predposlednata */}
          <li><Link to="/" replace>Home</Link></li>

        {/* ima zamena za Link koja e NavLink; ova se koristi za nekoi specificni situacii kako sto e menu */}
          <li><NavLink style={({isActive}) => {
            return isActive ? {color: "red"} : {color: "blue"}
          }} to="/" replace>Home with NavLink</NavLink></li>

        {/* reloadDocument - pravi reload na cela strana; primer koga sakame app da povika odnovo API */}
          <li><Link to="/books" reloadDocument>Books</Link></li>

          {/* moze i vaka ama podobro e Link da se koristi; so a se refreshira cela strana i taka e po bavna */}
          {/* <li><a href='/books'>Books with anchor</a></li> */}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book/>} />
        <Route path='/books/new' element={<NewBook/>}/> */}

{/* // site ruti sto imaat ist pocetok primer so /books moze da gi grupirame. zamena za tie gore */}
{/* BookLayout ke se prikazuva na site ruti sto zapocnuvaat so /books */}
{/* Child rutite bi se prikazuvale preku outletot sto go imame vo book layout */}
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList/>} /> 
          <Route path=":id" element={<Book/>} />
          <Route path='new' element={<NewBook/>} />
        </Route>

        {/* dokolku ruterot ne fati nikoja ruta od gore, togas ke se ispecati ovaa */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;