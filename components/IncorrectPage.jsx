const React = require('react');
const Layout = require('./Layout');

function IncorrectPage() {
  return (
    <Layout>
      <div className="incorrect">
        <h3>Если ты без бобра добр,</h3>
        <h2>значит, сам ты в душе бобр!</h2>
        <img
          alt="..."
          src="https://kalix.club/uploads/posts/2022-12/1671523765_kalix-club-p-bober-oboi-instagram-4.jpg"
        />
        <a href="/" className="link_404">404</a>
      </div>
    </Layout>
  );
};

module.exports = IncorrectPage