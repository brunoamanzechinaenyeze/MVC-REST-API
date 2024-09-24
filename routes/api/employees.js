const express = require('express');
const router = express.Router();
const path = require('path');


router.route('/')
    .get()
    .post()
    .put()
    .delete((req, res) => {
        res.json({
            "id": req.body.id
        })
    });

router.route('/:id')
    .get((req, res) => {
        res.json({
            "id": req.params.id
        })
    })

module.exports = router;