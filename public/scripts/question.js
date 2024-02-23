const formAnswer = document.querySelector('.formAnswer');

console.log(123);

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    const { answer } = event.target;
    const data1 = {
      answer: answer.value,
      id,
    };
    // console.log(answer.value);
    // console.log(id);
    const res = await fetch('/api/question', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data1),
    });

    const data = await res.json();

    if (data.message === 'OK') {
      document.querySelector('.answer').innerHTML = 'Супер!';
    } else {
      document.querySelector(
        '.answer'
      ).innerHTML = `Неправильно. Верный ответ: ${data.rightAnswer.answer}`;
    }

  });
}
