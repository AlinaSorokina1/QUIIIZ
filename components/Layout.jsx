const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/index.css' />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <footer>🍕 Pizza Day АуФ!</footer>
    </html>
  );
}

module.exports = Layout;
