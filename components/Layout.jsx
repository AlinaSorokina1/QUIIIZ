const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <script defer src='/scripts/question.js' />
        <link rel='stylesheet' href='/styles/index.css' />
        <link rel='stylesheet' href='/styles/registration.css' />
        {/* <script defer src='/scripts/some.js' /> */}
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
