const { DataTypes } = require("sequelize");
const dbConfig = require("../db.config")
const Class = dbConfig.define("Class",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        /**
         * Other model options go here
         */
    }
); 
module.exports = Class;
