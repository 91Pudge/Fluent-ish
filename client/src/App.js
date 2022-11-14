import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import "./App";
import ProtectedRoute from "./context/ProtectRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Router>
      <Navbar />
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
