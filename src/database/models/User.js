module.exports = function(sequelize, dataTypes){

    let alias = "User" //Como sequelize llama a nuestra tabla
	let cols = {
		id: {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fullName: {
            type:dataTypes.STRING(500),
            allowNull:false,
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull:false,
        },
        password:{
            type:dataTypes.STRING(500),
            allowNull:false,
        },
	}
	let config = {
		tableName: "user",
		timestamps: true
	}

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.hasMany(models.Links, {
            as: "links",
            foreignKey: "userID",
        }); 
    };
    return User
}