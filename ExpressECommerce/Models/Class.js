const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// D�finition du mod�le Product
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
    // Options suppl�mentaires
});

// D�finition du mod�le User
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
    // Options suppl�mentaires
});

// Synchroniser les mod�les avec la base de donn�es
sequelize.sync()
    .then(() => {
        console.log('Tables synchronis�es');
    })
    .catch(err => {
        console.error('Erreur de synchronisation des tables :', err);
    });

module.exports = { Product, User };
