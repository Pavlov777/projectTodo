const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: '123@mail.ru',
      password: await bcrypt.hash('12345', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Doe',
      email: '1234@mail.ru',
      password: await bcrypt.hash('123456', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'John',
      email: '12345@mail.ru',
      password: await bcrypt.hash('1234567', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
