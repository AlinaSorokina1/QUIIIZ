const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, categories }) {
  return (
    <Layout title={title} categories={categories}>
      <h1 className="H">Super-QUIZ🍕</h1>

      <div className="container">
        {categories.map((category) => (
          <div className="quiz">
            <a href={`/category/${category.id}`}><img src={category.img} alt="картинка" /></a>
            <p className="paragraph">{category.name}</p>
          </div>
        ))}
      </div>

    </Layout>
  );
}

module.exports = MainPage;
