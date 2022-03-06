import "../src/_main.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Wallet from "./pages/Wallet/Wallet";
import ModeContext from "./context/ModeContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ModeContext>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="wallet" element={<Wallet />}></Route>
          </Routes>
        </Router>
      </ModeContext>
    </div>
  );
}

export default App;
