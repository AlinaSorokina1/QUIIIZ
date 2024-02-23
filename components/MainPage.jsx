const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      
      <h1 className='H'>Super-QUIZ🍕</h1>

      <div className='container'>
        <div className='quiz quiz_1'>
          <a href='https://www.kinopoisk.ru/123123123/'>
            <img
              src='https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/08/02/02/5522251/da3a2ab3ecaa72f975b091069050730cc7fefd3a.jpg'
              alt='картинка авто'
            />
          </a>
          <p className='paragraph paragraph_1'>Квиз про тачки🚘</p>
        </div>

        <div className='quiz quiz_2'>
          <a href='https://www.kinopoisk.ru/123123123/'>
            <img
              src='https://news.store.rambler.ru/img/e45b3254617511b2e23c49959fe0928a?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
              alt='картинка жвачек'
            />
          </a>
          <p className='paragraph paragraph_2'>Квиз про жвачки🤤</p>
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
