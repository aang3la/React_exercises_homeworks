import "./App.css";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Comment } from "./components/Comment";

function App() {
  return (
    <div className="App">
      <h1>I am learning API's</h1>
      <Navigation />
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/single-comment/:id" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
