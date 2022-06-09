const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// Deletes all GrocItems from database
router.delete('/allGrocItems', (req, res) => {

    const sqlQuery = `
        DELETE FROM "shopping_list"
        `;

    pool.query(sqlQuery)
        .then(() => {
            console.log('It worked');
            res.sendStatus(204)
        })
        .catch((err) => {
            console.log(`DELETE failed: ${err}`);
            res.sendStatus(500);
        })
});

// Would recognize '/2'
//             or  '/potatoes'

router.delete('/:deleteCard', (req, res) => {
    let grocId = req.params.deleteCard
    console.log('In Delete', grocId);
    const sqlQuery = `
        DELETE FROM "shopping_list"
        WHERE "id" = $1;
        `;
    const sqlParams = [
        grocId,
    ];

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            console.log('It worked');
            res.sendStatus(204)
        })
        .catch((err) => {
            console.log(`DELETE failed: ${err}`);
            res.sendStatus(500);
        })

});

module.exports = router;