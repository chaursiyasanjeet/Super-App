import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Page/Registration Page/Register"
import CategoryChoose from "./Page/CategoryChoose/CategoryChoose"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<CategoryChoose />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
