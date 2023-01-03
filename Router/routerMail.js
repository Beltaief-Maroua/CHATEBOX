const router = require('express').Router();
const mailControler = require('../Controles/mail');
router.post('/api/mail', mailControler.nodmail);

module.exports = {routerMail:router};