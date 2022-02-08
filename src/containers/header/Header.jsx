import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import logo from "../../assets/YUNO_logo.png";

function Header() {
  return (
    <header className="header h-24">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
    </header>
  );
}

export default Header;
