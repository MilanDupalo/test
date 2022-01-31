import "./App.css";
import "./index.css";
import react from "react";
import reactDom from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Leaderboard from "./pages/leaderboard/LeaderBoard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
