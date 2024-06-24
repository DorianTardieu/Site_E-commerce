const express = require("express");
const app = express();
const port = 3000;
const ClassModel = require("./Models/Class");
const db = require("./db.config.js");

app.use(express.json()); // Middleware pour parser le JSON

const initApp = async () => {
    console.log("Testing the database connection .. ");
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
        await ClassModel.sync({ alter: true });
        app.listen(port, () => {
            console.log(`Server is up and running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
};

app.post("/create-class", (req, res) => {
    const { title, subtitle, content } = req.body;
    ClassModel.create({ title, subtitle, content })
        .then((result) => {
            res.json({ message: "Record created successfully!", result });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Unable to create a record!", error });
        });
});

app.get("/class/:id", (req, res) => {
    const { id } = req.params;
    ClassModel.findOne({ attributes: ["id", "title", "subtitle", "content"], where: { id } })
        .then((result) => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({ message: "Record not found!" });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Unable to fetch the record!", error });
        });
});

app.put("/class/:id", (req, res) => {
    const { id } = req.params;
    const { title, subtitle, content } = req.body;
    ClassModel.update({ title, subtitle, content }, { where: { id } })
        .then((result) => {
            if (result[0] > 0) {
                res.json({ message: "Record updated successfully!" });
            } else {
                res.status(404).json({ message: "Record not found!" });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Unable to update the record!", error });
        });
});

app.delete("/class/:id", (req, res) => {
    const { id } = req.params;
    ClassModel.destroy({ where: { id } })
        .then((result) => {
            if (result) {
                res.json({ message: "Record deleted successfully!" });
            } else {
                res.status(404).json({ message: "Record not found!" });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Unable to delete the record!", error });
        });
});

initApp();

/*
Création (Create) :
Route: POST /create-class
Description: Crée une nouvelle entrée dans la table Class.

Lecture (Read) :
Route: GET /class/:id
Description: Récupère les informations d'une entrée spécifique par id.

Mise à jour (Update) :
Route: PUT /class/:id
Description: Met à jour les informations d'une entrée spécifique par id.

Suppression (Delete) :
Route: DELETE /class/:id
Description: Supprime une entrée spécifique par id.
*/