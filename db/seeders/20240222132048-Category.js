/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'topicFirst',
        img: 'https://img.joinfo.com/i/2021/11/800x0/618678d7ee2ff.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'topicSecond',
        img: 'https://www.film.ru/sites/default/files/images/Home-007.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
