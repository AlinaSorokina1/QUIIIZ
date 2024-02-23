const React = require('react');
// const Layout = require('./Layout');

function QuestionCard({ title, question }) {
  // console.log(question, 1111);
  return (
    <form data-id={question.id}>
      <h2>{question.textQuestion}</h2>
      <img src={question.img} alt='' />
      <input type='text' name='answer' placeholder='Введи ответ' />
      <button>Отправить</button>
      <button><a className='next' href={`/question/${question.id + 1}`}>
        Далее
      </a></button>
     
    </form>
  );
}

module.exports = QuestionCard;
