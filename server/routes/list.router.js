const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// PUT route to Purchase groc item
router.put(`/:purchasedGrocItem`, (req,res) => {
    let grocId = req.params.purchasedGrocItem
    console.log('In PUT router', grocId);
    const sqlQuery = `
        UPDATE "shopping_list"
        SET "purchased" = true
        WHERE "id" = $1;
    `;
    const sqlParams = [
        grocId
    ];

    pool.query(sqlQuery,sqlParams)
        .then(() => {
            console.log(`PUT router SUCCESS`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT router FAILED ${err}`);
            res.sendStatus(500);
        });
})

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

// GET route to fetch all GrocItems from Database!
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "shopping_list"`;
    pool.query(sqlText)
        .then((result) => {
            // console.log('result row',result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


// POST grocItem to the Database
router.post('/', (req, res) => {
    
    console.log("In the post with", req.body)

    // Pull out the request object as a variable
    const newGrocItem = req.body

    // Build the SQL statement using all the fields in the table
    // regardless if they are going to be populated with values
    // or with `null` (meaning nothing was provided).
    const sqlText = `
        INSERT INTO "shopping_list"
            ("name", "quantity", "unit")
        VALUES
            ($1, $2, $3)
    `

    // Set the default unit measurement to null, in case
    // the value is `undefined`.
    let unitNumber = null
    // If the value is NOT `undefined`, then set it to
    // the provided value.
    if (newGrocItem.unit) {
        unitNumber = newGrocItem.unit
    }

    const sqlParams = [
        newGrocItem.name,       // Name of the item
        newGrocItem.quantity,   // Item count
        unitNumber              // Unit of measurement (i.e. boxes), or `null`
    ]

    pool.query(sqlText, sqlParams)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`
                Error making database query ${sqlText}
            
                ${err}`
            )
            res.sendStatus(500);
        });
});


module.exports = router;