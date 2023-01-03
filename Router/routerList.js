const router = require('express').Router()
const postControler = require('../Controles/postList')
router.post('/api/createPost',postControler.addpost)

module.exports = {routerPost:router}