const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Product, User } = require('./Models/Class');
const { Sequelize, ValidationError } = require('sequelize');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes pour les produits

// GET /api/products/:id - Récupérer un produit par ID
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    Product.findByPk(productId)
        .then(product => {
            if (product) {
                res.json(product);
            } else {
                res.status(404).send('Produit non trouvé');
            }
        })
        .catch(err => {
            console.error('Erreur lors de la récupération du produit :', err);
            res.status(500).send('Erreur du serveur');
        });
});
// GET /api/products - Récupérer tous les produits
app.get('/api/products', (req, res) => {
    Product.findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            console.error('Erreur lors de la récupération des produits :', err);
            res.status(500).send('Erreur du serveur');
        });
});

// POST /api/products - Créer un nouveau produit
app.post('/api/products', (req, res) => {
    const { name, price, description, category, stock } = req.body;

    Product.create({
        name,
        price,
        description,
        category,
        stock
    })
        .then(product => {
            res.status(201).json(product);
        })
        .catch(err => {
            if (err instanceof ValidationError) {
                const errors = err.errors.map(error => error.message);
                res.status(400).json({ errors });
            } else {
                console.error('Erreur de création du produit :', err);
                res.status(500).send('Erreur du serveur');
            }
        });
});

// PUT /api/products/:id - Mettre à jour un produit par ID
app.put('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price, description, category, stock } = req.body;

    Product.update({
        name,
        price,
        description,
        category,
        stock
    }, {
        where: { id: productId },
        returning: true
    })
        .then(([rowsUpdated, [updatedProduct]]) => {
            if (rowsUpdated === 0) {
                res.status(404).send('Produit non trouvé');
            } else {
                res.json(updatedProduct);
            }
        })
        .catch(err => {
            console.error('Erreur lors de la mise à jour du produit :', err);
            res.status(500).send('Erreur du serveur');
        });
});

// DELETE /api/products/:id - Supprimer un produit par ID
app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    Product.findByPk(productId)
        .then(product => {
            if (!product) {
                res.status(404).send('Produit non trouvé');
            } else {
                Product.destroy({
                    where: { id: productId }
                })
                    .then(() => {
                        res.status(204).send(`Le produit avec l'ID ${productId} a été supprimé avec succès.`);
                    })
                    .catch(err => {
                        console.error('Erreur lors de la suppression du produit :', err);
                        res.status(500).send('Erreur du serveur');
                    });
            }
        })
        .catch(err => {
            console.error('Erreur lors de la recherche du produit avant suppression :', err);
            res.status(500).send('Erreur du serveur');
        });
});


/// Routes pour les utilisateurs
// Obtenir un utilisateur par ID
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('Utilisateur non trouvé');
            }
        })
        .catch(err => {
            console.error('Erreur lors de la récupération de l\'utilisateur :', err);
            res.status(500).send('Erreur du serveur');
        });
});

// Créer un nouvel utilisateur
app.post('/api/users', (req, res) => {
    const { username, email, password } = req.body;

    User.create({
        username,
        email,
        password
    })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            if (err instanceof ValidationError) {
                const errors = err.errors.map(error => error.message);
                res.status(400).json({ errors });
            } else {
                console.error('Erreur de création de l\'utilisateur :', err);
                res.status(500).send('Erreur du serveur');
            }
        });
});

// Mettre à jour un utilisateur par ID
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;

    User.update({
        username,
        email,
        password
    }, {
        where: { id: userId },
        returning: true
    })
        .then(([rowsUpdated, [updatedUser]]) => {
            if (rowsUpdated === 0) {
                res.status(404).send('Utilisateur non trouvé');
            } else {
                res.json(updatedUser);
            }
        })
        .catch(err => {
            console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
            res.status(500).send('Erreur du serveur');
        });
});

// Supprimer un utilisateur par ID
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).send('Utilisateur non trouvé');
            } else {
                User.destroy({
                    where: { id: userId }
                })
                    .then(() => {
                        res.status(204).send({
                            message: `L'utilisateur avec l'ID ${userId} a été supprimé avec succès.`
                        });
                    })
                    .catch(err => {
                        console.error('Erreur lors de la suppression de l\'utilisateur :', err);
                        res.status(500).send('Erreur du serveur');
                    });
            }
        })
        .catch(err => {
            console.error('Erreur lors de la recherche de l\'utilisateur avant suppression :', err);
            res.status(500).send('Erreur du serveur');
        });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
/*
  Comment utiliser les différents appels API :

  1. Produits
  - Obtenir un produit par ID :
    GET http://10.172.74.123:3000/api/products/:id
    Exemple : GET http://10.172.74.123:3000/api/products/1

  - Créer un nouveau produit :
    POST http://10.172.74.123:3000/api/products
    Body (JSON) :
    {
      "name": "Nom du produit",
      "price": 99.99,
      "description": "Description du produit",
      "category": "Catégorie du produit",
      "stock": 10
    }

  - Mettre à jour un produit par ID :
    PUT http://10.172.74.123:3000/api/products/:id
    Body (JSON) :
    {
      "name": "Nom du produit",
      "price": 99.99,
      "description": "Description mise à jour",
      "category": "Nouvelle catégorie",
      "stock": 20
    }

  - Supprimer un produit par ID :
    DELETE http://10.172.74.123:3000/api/products/:id
    Exemple : DELETE http://10.172.74.123:3000/api/products/1

  2. Utilisateurs
  - Obtenir un utilisateur par ID :
    GET http://10.172.74.123:3000/api/users/:id
    Exemple : GET http://10.172.74.123:3000/api/users/1

  - Créer un nouvel utilisateur :
    POST http://10.172.74.123:3000/api/users
    Body (JSON) :
    {
      "username": "nom_utilisateur",
      "email": "email@example.com",
      "password": "motdepasse"
    }

  - Mettre à jour un utilisateur par ID :
    PUT http://10.172.74.123:3000/api/users/:id
    Body (JSON) :
    {
      "username": "nouveau_nom_utilisateur",
      "email": "nouvel_email@example.com",
      "password": "nouveau_motdepasse"
    }

  - Supprimer un utilisateur par ID :
    DELETE http://10.172.74.123:3000/api/users/:id
    Exemple : DELETE http://10.172.74.123:3000/api/users/1
*/