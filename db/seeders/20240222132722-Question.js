/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        img: 'https://cs12.pikabu.ru/post_img/2021/12/28/2/1640656453150894986.jpg',
        textQuestion: 'Сколько будет стоить обучение в Московском кампусе после поднятия цен (через 2 недели)?',
        answer: '345000',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ltdfoto.ru/images/2024/02/23/FullStack.jpg',
        textQuestion: 'Что изображено на картинке?',
        answer: 'fullStack разработчик',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://timeweb.com/media/default/0001/12/74c0bc01b8a8dab8b2b73b649f9a1b9259282e4e.png',
        textQuestion: 'Что возвращет метод unshift()?',
        answer: 'новую длину масива',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://cs12.pikabu.ru/post_img/2020/01/04/8/1578140447188383575.jpg',
        textQuestion: 'Какой протокол обмена данными представлен на фото (HTTP / HTTPS)?',
        answer: 'HTTPS',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://th.bing.com/th/id/OIG3.sYOCET1JKB1TKAvZWnii?pid=ImgGn',
        textQuestion: 'Сколько нужно выпускников Эльбруса, чтобы уронить один сервер?',
        answer: 'Эльбрусовцы сервер не роняют',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ugadai-film.ru/dest/img/screens/124/2.webp',
        textQuestion: 'Из какого фильма кадр?',
        answer: 'Джанго освобожденный',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ugadai-film.ru/dest/img/screens/224/3.webp',
        textQuestion: 'Из какого фильма кадр?',
        answer: 'Малыш на драйве',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ugadai-film.ru/dest/img/screens/212/1.webp',
        textQuestion: 'Из какого фильма кадр?',
        answer: 'Люди Икс',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ugadai-film.ru/dest/img/screens/60/1.webp',
        textQuestion: 'Из какого фильма кадр?',
        answer: 'Голая правда',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ugadai-film.ru/dest/img/screens/31/2.webp',
        textQuestion: 'Из какого фильма кадр?',
        answer: 'Меняющие реальность',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
