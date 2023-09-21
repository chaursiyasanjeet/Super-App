import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Page/Registration Page/Register";
import CategoryChoose from "./Page/CategoryChoose/CategoryChoose";
import HomePage from "./Page/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<CategoryChoose />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
