const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

function QuestionPage({ title, questions }) {
  return (
    <Layout title={title}>
      ;
      <div className='card-container'>
        {questions.map((question) => (
          <QuestionCard question={question} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = QuestionPage;
