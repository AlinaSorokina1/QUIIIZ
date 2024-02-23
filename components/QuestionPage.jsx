const React = require('react');
const Layout = require('./Layout');
const QuestionCard = require('./QuestionCard');

function QuestionPage({ title, question }) {
  return (
    <Layout title={title}>
      <div className='card-container' data-questionId={question.id}>
        <QuestionCard question={question} />
      </div>
    </Layout>
  );
}

module.exports = QuestionPage;
