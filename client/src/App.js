import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Account" element={<Account />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
