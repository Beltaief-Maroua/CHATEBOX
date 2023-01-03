const router = require('express').Router()
const upDateControler = require('../Controles/updateList')
router.put('/api/updatePost/:id',upDateControler.updatepost)

module.exports = {routerUpDate:router}