const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      name: { 
          type: DataTypes.STRING(500),
          allowNull:false,
      },
      lastName: { 
        type: DataTypes.STRING(500),
        allowNull:false,
      },
      email: {
          type: DataTypes.STRING(500),
          allowNull:false,
      },
      password:{
          type: DataTypes.STRING(500),
          allowNull:false,
      },
      phone: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING(500),
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  }
};
