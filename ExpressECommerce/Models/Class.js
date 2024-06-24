const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Définition du modèle Product
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    category: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    }
}, {
    // Options supplémentaires
});

// Définition du modèle User
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Options supplémentaires
});

// Synchroniser les modèles avec la base de données
sequelize.sync()
    .then(() => {
        console.log('Tables synchronisées');
    })
    .catch(err => {
        console.error('Erreur de synchronisation des tables :', err);
    });

module.exports = { Product, User };
