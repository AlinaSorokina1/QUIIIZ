const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
<<<<<<< HEAD
        <link rel='stylesheet' href='/styles/index.css' />
      </head>
=======
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/registration.css" />
      </head>
      <footer>
        <span>🍕 Pizza Day АуФ!</span>
      </footer>
>>>>>>> 2fae0733178abc1e440d0686dff7ad2bf0bfa4df
      <body>
        <Navbar />
        {children}
      </body>
      <footer>🍕 Pizza Day АуФ!</footer>
    </html>
  );
}

module.exports = Layout;
