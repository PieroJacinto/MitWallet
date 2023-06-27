const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("links", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      link: {
        type: DataTypes.STRING,
        allownull: true,
      },
      linkName: {
        type: DataTypes.STRING,
        allownull: true,
      },
      usuarioID: {
        type: DataTypes.INTEGER,
          references: {
            model: {
                tableName: "user",
            },
          key: "id",
      },
      allowNull: false,
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("links");
  }
};
