import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
