const express = require('express')
const router = express.Router()

const User = require('../models/user.model')
const {generateCrudMethods} = require('../services')
const userCrud = generateCrudMethods(User)
const { validateDBId, raiseRecord404FoundError } = require('../middlewares');


router.post('/create/', (req, res, next) => {
    userCrud.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => next(err))

})

router.get('/:id',validateDBId, (req,res, next) => {
    userCrud.getById(req.params.id)
    .then(data => {
        if(data)
            res.send(data)
        else
            raiseRecord404FoundError(req, res)
    })
    .catch(err => next(err))
})

module.exports = router;