const React = require('react');
// const Layout = require('./Layout');

function QuestionCard({ title, question }) {
  // console.log(question, 1111);
  return (
    <>
      <h2>{question.textQuestion}</h2>
      <img src={question.img} alt='' />
      <form className='formAnswer' data-id={question.id}>
        <input type='text' name='answer' placeholder='Введи ответ' />
        <button>Отправить</button>
      </form>
      <button>
        <div className='answer' />
        <a className='next' href={`/question/${question.id + 1}`}>
          Далее
        </a>
      </button>
    </>
  );
}

module.exports = QuestionCard;
