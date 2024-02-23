const React = require('react');

function Navbar({}) {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Main</a>
        </li>
        <li>
          <a href='/registration'>Sign-up</a>
        </li>
      </ul>
    </nav>
  );
}

module.exports = Navbar;
