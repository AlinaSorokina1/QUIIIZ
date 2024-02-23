const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/registration.css" />
      </head>
      <footer>
        <span>🍕 Pizza Day АуФ!</span>
      </footer>
      <body>
        <Navbar />
        {children}
      </body>
      <footer>🍕 Pizza Day АуФ!</footer>
    </html>
  );
}

module.exports = Layout;
