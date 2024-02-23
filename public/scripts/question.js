const formAnswer = document.querySelector('.formAnswer');

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    const { answer } = event.target;
    const data = {
      answer: answer.value,
    };
   // console.log(answer.value);
    // console.log(id);
    const res = await fetch('/');
  });
}
