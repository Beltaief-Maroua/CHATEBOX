const router = require('express').Router()
const getControler = require('../Controles/getList')
router.get('/api/getPost',getControler.getpost)

module.exports = {routerGet:router}