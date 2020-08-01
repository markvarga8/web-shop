module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'products',
    {
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_hungarian_ci',
    },
  ),

  down: (queryInterface) => queryInterface.dropTable('products'),
};
