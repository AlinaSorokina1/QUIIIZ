/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        img: 'https://cdnb.artstation.com/p/assets/images/images/006/978/227/large/luis-ramos-porco1.jpg?1502742323',
        textQuestion: 'Вопрос 1',
        answer: 'Ответ 1',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://basket-05.wb.ru/vol807/part80783/80783012/images/big/1.jpg',
        textQuestion: 'Вопрос 2',
        answer: 'Ответ 2',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://sc04.alicdn.com/kf/Hdcb54b2baf4a4719a7fdcceb1f738ea7M/232952253/Hdcb54b2baf4a4719a7fdcceb1f738ea7M.jpg',
        textQuestion: 'Вопрос 3',
        answer: 'Ответ 3',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'http://www.radionetplus.ru/uploads/posts/2014-11/1415729452_zhiveotnye-17.jpg',
        textQuestion: 'Вопрос 4',
        answer: 'Ответ 4',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://cdnb.artstation.com/p/assets/images/images/007/369/311/large/bianca-roux-still-04ye.jpg?1505671123',
        textQuestion: 'Вопрос 5',
        answer: 'Ответ 5',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://avatars.mds.yandex.net/i?id=507c99829f27057c62b1abcca0329a2146ce4094-7946262-images-thumbs&ref=rim&n=33&w=250&h=250',
        textQuestion: 'Вопрос 6',
        answer: 'Ответ 6',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://etoholesterin.ru/wp-content/uploads/2018/10/myaso-svininy.jpg',
        textQuestion: 'Вопрос 7',
        answer: 'Ответ 7',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://i.pinimg.com/originals/07/79/ac/0779acd84fd70f8ba3687cd0f9440b9e.jpg',
        textQuestion: 'Вопрос 8',
        answer: 'Ответ 8',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://pixy.org/src2/579/5798446.jpg',
        textQuestion: 'Вопрос 9',
        answer: 'Ответ 9',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://st3.depositphotos.com/1033409/12731/v/950/depositphotos_127319474-stock-illustration-pigs-hogs-breed-icon-set.jpg',
        textQuestion: 'Вопрос 10',
        answer: 'Ответ 10',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        img: 'https://vismarket.ru/upload/iblock/5c1/5c135eb5f32ecb32147365610398535a.jpeg',
        textQuestion: 'Вопрос 11',
        answer: 'Ответ 11',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://granbazar.ru/upload/iblock/adf/adf38703d94fee42bfa0797d9e701c4a.jpg',
        textQuestion: 'Вопрос 12',
        answer: 'Ответ 12',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ali-yes.ru/wp-content/uploads/2017/09/1170038119-1.jpg',
        textQuestion: 'Вопрос 13',
        answer: 'Ответ 13',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/20/95/72/76/02/72/9/600002065546b0.png',
        textQuestion: 'Вопрос 14',
        answer: 'Ответ 14',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://fotopodarok.ucoz.ru/kr-futbol.jpg',
        textQuestion: 'Вопрос 15',
        answer: 'Ответ 15',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://yarmarka-podarkov.ru/upload/iblock/e5f/e5fa7cdf3d657a6fa5c019986f973394.jpg',
        textQuestion: 'Вопрос 16',
        answer: 'Ответ 16',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://cs5.livemaster.ru/storage/3f/0b/9f7cc5c9174afb2fd2e81a96b463--suveniry-i-podarki-izyaschnye-podarki-lyubimym-imennye-kruzhk.jpg',
        textQuestion: 'Вопрос 17',
        answer: 'Ответ 17',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://ae04.alicdn.com/kf/H0dcc1f0572a749a792ac0da0aa0e3da9E/Kuksa.jpg',
        textQuestion: 'Вопрос 18',
        answer: 'Ответ 18',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://i.pinimg.com/originals/2e/ec/33/2eec330dd52c2a99ccde64666bd97bfb.jpg',
        textQuestion: 'Вопрос 19',
        answer: 'Ответ 19',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://tokio1.ru/img/956598.jpg',
        textQuestion: 'Вопрос 20',
        answer: 'Ответ 20',
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
