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
      fullName: { 
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  }
};
