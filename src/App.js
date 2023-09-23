import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Page/Registration Page/Register";
import CategoryChoose from "./Page/CategoryChoose/CategoryChoose";
import HomePage from "./Page/HomePage/HomePage";
import MovieDisplay from "./Page/MovieDisplay/MovieDisplay";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<CategoryChoose />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/movie" element={<MovieDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
