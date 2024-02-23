const React = require('react');

function Navbar({}) {
  return (
    <nav className="navBar">
      <div className="nav nav_1">
        <a href="/">Main</a>
      </div>
      <div className="nav nav_2">
        <a href="/registration">Sign-up</a>
      </div>

      <div className="score">Score: 0</div>
    </nav>

  );
}

module.exports = Navbar;