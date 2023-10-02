import './App.css';
import { Home } from './components/Home';
import { BookList } from './components/BookList';
import { Book } from './components/Book';
import { NewBook } from './components/NewBook';
import { NotFound } from './components/NotFound';
import { Route, Routes, Link } from "react-router-dom";

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
  return (
    <div className="App">
      {/* Ova odi najcesto nadvor od Routes za da se prikazuva nonstop nav iako se menuva pages */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          {/* moze i vaka ama podobro e Link da se koristi; so a se refreshira cela strana i taka e po bavna */}
          {/* <li><a href='/books'>Books with anchor</a></li> */}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book/>} />
        <Route path='/books/new' element={<NewBook/>}/>
        {/* dokolku ruterot ne fati nikoja ruta od gore, togas ke se ispecati ovaa */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
