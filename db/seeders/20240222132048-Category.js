/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Около IT...',
        img: 'https://i.ytimg.com/vi/CKRJZeD_aqE/maxresdefault.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фильмы',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/1567788/pub_5e22ec7a3d5f6900b0ad57be_5e22ec7b92414d00b16b59c2/scale_1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
