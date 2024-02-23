const React = require('react');
const Layout = require('./Layout');

function QuestionCard({ title, question }) {
  console.log(question, 1111);
  return (
    <Layout title={title}>
  <div>
  <h2>{question.textQuestion}</h2>
      <img src={question.img} alt='' />
      <input type='text' name='answer' placeholder='Введи ответ' />
      <button>Отправить</button>
  </div>
    </Layout>
  );
}

module.exports = QuestionCard;