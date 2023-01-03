const router = require('express').Router()
const deleteControler = require('../Controles/deleteList')
router.delete('/api/deletePost/:id',deleteControler.deletepost)

module.exports = {routerDelete:router}