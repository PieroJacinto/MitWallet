module.exports = function(sequelize, dataTypes){

    let alias = "Links" //Como sequelize llama a nuestra tabla
	let cols = {
		id: {
            type:dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        link: {
            type:dataTypes.STRING(500),
            allownull: false,
        },
        linkName: {
            type:dataTypes.STRING(500),
            allownull: false,
        }
	}
	let config = {
		tableName: "links",
		timestamps: true
	}
	let Links = sequelize.define(alias,cols,config);

    Links.associate = function(models){
        Links.belongsTo(models.User, { 
            as: "user", 
            foreignKey: "userId"
        });
    }
	return Links;
}