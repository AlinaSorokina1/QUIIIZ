const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/index.css" />
      </head>
      <body>{children}</body>

      <footer>
        <span>🍕 Pizza Day АуФ!</span>
      </footer>
    </html>
  );
}

module.exports = Layout;
