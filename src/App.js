import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";

import SinglePage from "./pages/Singlepage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
        
          <Route exact path="/" element={<HomePage/>} />
          
          <Route path="/singleshow/:id" element={<SinglePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;