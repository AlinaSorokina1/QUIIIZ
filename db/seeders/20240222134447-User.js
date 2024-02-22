/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jane Doe',
        email: 'JaneDoe@mail.ru',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Smith',
        email: 'JohnSmith@mail.ru',
        password: '67890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
