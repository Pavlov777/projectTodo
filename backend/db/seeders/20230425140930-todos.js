/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Todos', [{
      title: 'Покормить кота',
      description: 'Купить вкусненького корма',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Поиграть с котом',
      description: 'Купить классную игрушку для пушистого',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Купить кота',
      description: 'Чтобы его кормить, любить и играть с ним',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
